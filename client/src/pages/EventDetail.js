import React, { useState, useEffect, useCallback } from 'react'
import styled from "styled-components";
import { useHistory } from 'react-router-dom'
import { Button, Birthday, Halloween, Holiday, NewYears, Thanksgiving, P, H1 } from "../styles";

function EventDetail({ invitations, eventId, handleAcceptInvitation, handleRejectInvitation, cancelEvent, updateEvent }) {
  const [event, setEvent] = useState(null)
  const history = useHistory();

  const fetchEventCallback = useCallback(
    () => {
      fetch(`/api/events/${eventId}`, {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(event => setEvent(event))
    },
    [eventId],
  )

  console.log(eventId)

  useEffect(() => {
    fetchEventCallback()
  }, [fetchEventCallback])


  const cancelEventButton = (event) => {
    if (event.user_can_modify) {
      return (
        <Div>
          <Button2
            onClick={handleCancel}
          >
            Cancel Event
          </Button2>
        </Div>
      )
    }
  }

  const updateEventButton = (event) => {
    if (event.user_can_modify) {
      return (
        <Div>
          <Button2

            onClick={handleUpdate}
          >
            Update Event
          </Button2>
        </Div>
      )
    }
  }

  const handleUpdate = () => {
    history.push(`/events/update/${eventId}`)
  }

  const handleCancel = (e) => {
    cancelEvent(event.id);
    history.push('/events')
  }

  const rsvpButton = (event) => {
    if (!event.user_can_modify) {
      return (
        <button
          onClick={() => {
            handleRejectInvitation(event.invitation.id).then(() => fetchEventCallback())
          }
        }>
          Cancel RSVP
        </button >
      )
    } else {
      return (
        <button
          className="px-4 py-1 bg-green-500 text-white" 
          onClick={() => {
            handleAcceptInvitation(event.invitation.id).then(() => fetchEventCallback())
          }
        }>
          RSVP for event
        </button>
      )
    }
  }
  

  if(!event) { return <div></div>}
  return (
    <Container>
        <Img src={event.event_picture_url}/>
        <Holiday>
          <H1>{event.title}</H1>
          <P>{event.description}</P>
          <P2>Hosted by {event.user.name}</P2>
          <P2>{event.time}</P2>
          <P2>Location: {event.location}</P2>
          <Map src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"/>
          {/* <p>{rsvpButton(event)}</p> */}
        </Holiday>
      <Wrapper>
      {updateEventButton(event)}
      {cancelEventButton(event)}
      {/* {rsvpButton(event)} */}
      </Wrapper>
      <Wrapper>
      <Wrapper3>
        <P>Going:</P>
        {event.invitations.filter(invitation => invitation.rsvp === true).map(invitation => (
          <P3>{invitation.receiver.name}</P3>
        ))}
        <P3>{""}</P3>
      </Wrapper3>
      <Wrapper3>
        <P>Not Going:</P>
        {event.invitations.filter(invitation => invitation.rsvp === false).map(invitation => (
          <P3>{invitation.receiver.name}</P3>
        ))}
       <P3>{""}</P3>
      </Wrapper3>
      <Wrapper3>
        <P>No Reply:</P>
        {event.invitations.filter(invitation => invitation.rsvp === null).map(invitation => (
          <P3>{invitation.receiver.name}</P3>
        ))}
        <P3>{""}</P3>
      </Wrapper3>
      </Wrapper>
    </Container>
  )
}

export default EventDetail

const Div = styled.div`
    width: auto;
    float: left;
    padding: 2px;
`;

const Img = styled.img`
    margin: auto;
`;

const Map = styled.img`
  width: 350px;
  margin: auto;
  padding-bottom: 40px;
`;

const Button2 = styled.button`
    float: left;
    padding-left: 50px;
    padding-right: 50px;
    font-family: 'Quicksand', sans-serif;
    font-size: 20px;
`;

const P2 = styled.p `
font-family: 'Quicksand', sans-serif;
padding-left: 100px;
padding-right: 100px;
font-size: 15px;

`
const P3 = styled.p `
font-family: 'Quicksand', sans-serif;
font-size: 15px;
width: 130px;
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 8px;
  width: 500px;
  background: lightgray;
  margin: 10px auto;
  outline: 1px solid white;
  outline-offset: -10px ;
`;

const Wrapper3 = styled.section`
  display: inline;
  width: auto;
  padding: 10px;
  position: relative;
`;

const Container = styled.section`
margin: auto
`;

// const WrapperChild = styled.div`
//   flex: 1;
// `;
