import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import CreatedEventsList from './CreatedEventsList'
import CreateEvent from './CreateEvent'
import Profile from './Profile'
import PastEventsList from './PastEventsList'
import UserDetails from './UserDetails'
import EventDetail from './EventDetail'
import UpdateEvent from './UpdateEvent'
import SearchUsers from './SearchUsers'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import PendingInvitedEventsList from './PendingInvitedEventsList'

function EventsContainer( {user, setUser} ) {
  const [events, setEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [pastInvitations, setPastInvitations] = useState([])
  const [invitations, setInvitations] = useState([])
  const [sentInvitations, setSentInvitations] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const history = useHistory();
  
  useEffect(() => {
    fetch("/api/users", {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(allUsers => setAllUsers(allUsers))
  },[])

  useEffect(() => {
    fetch("/api/user_index_invitations", {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(invitations => setInvitations(invitations))
  },[])

  useEffect(() => {
    fetch("/api/user_index_invitations_past", {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(invitations => setPastInvitations(invitations))
  },[])


  useEffect(() => {
    fetch("/api/user_index_invitations_sent", {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(sentInvitations => setSentInvitations(sentInvitations))
  },[])

  useEffect(() => {
    fetch("/api/user_index_events", {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(events => setEvents(events))
  },[])

  useEffect(() => {
    fetch("/api/user_index_events_past", {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(events => setPastEvents(events))
  },[])

  const handleAcceptInvitation = (invitationId) => {
    fetch(`/api/invitations/${invitationId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        rsvp: true
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then(errors => Promise.reject(errors))
      }
    })
    .then(invitation => {
      const updatedInvitations = invitations.map((invitation) => {
        if (invitation.id === invitationId) {
          return {
            ...invitation,
            invitation
          }
        } else {
          return invitation
        }
      })
      setInvitations(updatedInvitations)
    })
}

const handleRejectInvitation = (invitationId) => {
  fetch(`/api/invitations/${invitationId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      rsvp: false
    })
  })
  .then(invitation => {
    const updatedInvitations = invitations.map((invitation) => {
      if (invitation.id === invitationId) {
        return {
          ...invitation,
          invitation
        }
      } else {
        return invitation
      }
    })
    setInvitations(updatedInvitations)
  })
}

  const createEvent = (formData) => {
    return fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(event => setEvents([...events, event]))
  }

  const updateEvent = (eventId, formData) => {
    return fetch(`/api/events/${eventId}`, {
      method: "PUT",
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then(errors => Promise.reject(errors))
      }
    })      
    .then(res => {
      if (res.ok) {
        const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          event
        }
      } else {
        return event
      }
    })
     setEvents(updatedEvents)
      }
    })
  }

  const cancelEvent = (eventId) => {
    return fetch(`/api/events/${eventId}`, {
      method: "DELETE",
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          const updatedEvents = events.filter(event => event.id !== eventId)
          setEvents(updatedEvents)
        }
      })
  }


  return (
    <div>
      <Wrapper2>
          <UserDetails user={user}/>
      </Wrapper2>
      <Switch>
        <Route exact path="/profile">
          <Wrapper>
            <Profile user={user} setUser={setUser}/>
          </Wrapper>
        </Route>
        <Route exact path="/events">
          <Wrapper>
          <PendingInvitedEventsList
            user={user}
            events={events}
            invitations={invitations}
            handleAcceptInvitation={handleAcceptInvitation}
            handleRejectInvitation={handleRejectInvitation}
          />
          </Wrapper>
          <Wrapper>
          <CreatedEventsList
            user={user}
            events={events}
            cancelEvent={cancelEvent}
            allUsers={allUsers}
          />
          </Wrapper>
          <Wrapper>
          <PastEventsList
            user={user}
            pastEvents={pastEvents}
            pastInvitations={pastInvitations}
          />
          </Wrapper>
        </Route>
        <Route exact path="/create">
          <Wrapper>
          <CreateEvent 
            createEvent={createEvent}
            allUsers={allUsers}
          />
          </Wrapper>
        </Route>
        <Route exact path="/search">
          <Wrapper>
          <SearchUsers 
            allUsers={allUsers}
          />
          </Wrapper>
        </Route>
        <Route
          exact
          path="/events/:id"
          render={({ match }) => {
            return (
              <EventDetail
              allUsers={allUsers}
              eventId={match.params.id}
              invitations={invitations}
              cancelEvent={cancelEvent}
              allUsers={allUsers}
              handleAcceptInvitation={handleAcceptInvitation}
              handleRejectInvitation={handleRejectInvitation}
            />
            )
          }}
        />
        <Route
          exact
          path="/events/update/:id"
          render={({ match }) => {
            return (
              <Wrapper>
              <UpdateEvent
              allUsers={allUsers}
              eventId={match.params.id}
              sentInvitations={sentInvitations}
              updateEvent={updateEvent}
              allUsers={allUsers}
            />
            </Wrapper>
            )
          }}
          />
      </Switch>
    </div>
  )
}

export default EventsContainer

const Wrapper2 = styled.section`
padding: 5px;
width: 500px;
background: lightgray;
margin: auto;
margin-bottom: 10px;
position: relative;
border-radius: 50px 50px 0px 0px;
outline: 1px solid white;
outline-offset: -10px ;
`;

const Wrapper = styled.section`
padding: 5px;
width: 500px;
background: lightgray;
margin: auto;
margin-bottom: 10px;
position: relative;
outline: 1px solid white;
outline-offset: -10px ;
`;