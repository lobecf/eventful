import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Birthday, Halloween, Holiday, NewYears, Thanksgiving, P, ProfileTitle } from "../styles";
import styled from "styled-components";

function AcceptedInvitedEventsList({ user, invitations, events, handleAcceptInvitation, handleRejectInvitation }) {
  
  return (
    <Wrapper>
      <Thumbnail src="https://cdn2.iconfinder.com/data/icons/lucid-generic/24/add_new_button_plus_create-1024.png"/>
      <ProfileTitle>Your Upcomming Events</ProfileTitle>
      <div> Accepted Invitations </div>
      <div className="space-y-4 my-4">
        {invitations.filter(invitation => invitation.rsvp === true).map(invitation => (
          <div>
          <List
            className="flex justify-between items-center">
            <Link to={`events/${invitation.event.id}`}>
              {invitation.event.title}
            </Link>
            <Button onClick={() => handleRejectInvitation(invitation.id)}>Attending</Button>
          </List>
          <List>
            Invited by: {invitation.sender.name}
          </List>
          </div>
        ))}
      </div>
      <div> Declined Invitations </div>
      <div className="space-y-4 my-4">
        {invitations.filter(invitation => invitation.rsvp === false).map(invitation => (
          <div>
          <List
            className="flex justify-between items-center">
            <Link to={`events/${invitation.event.id}`}>
              {invitation.event.title}
            </Link>
            <Button onClick={() => handleAcceptInvitation(invitation.id)}>Not Attending</Button>
          </List>
          <List>
            Invited by: {invitation.sender.name}
          </List>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default AcceptedInvitedEventsList

const Wrapper = styled.section`
margin: 15px;
`;

const H1 = styled.h1`
display:inline;
`

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 30px;
  height: auto;
  border-radius: 50%;
  display:inline;
`;

const List = styled.h1`
margin-left: 40px;
font-family: 'Quicksand', sans-serif;
font-size: 15px;
`