import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Birthday, Halloween, Holiday, NewYears, Thanksgiving, P, ProfileTitle } from "../styles";
import styled from "styled-components";

function PendingInvitedEventsList({ user, events, invitations, handleAcceptInvitation, handleRejectInvitation }) {
  
  return (
    <Wrapper>
      <Thumbnail src="https://cdn1.iconfinder.com/data/icons/wedding-day-6/32/Wedding_Invitation-512.png"/>
      <ProfileTitle>Invited Events</ProfileTitle>
      <div className="space-y-4 my-4">
        <H2>PENDING INVITATIONS</H2>
        {invitations.filter(invitation => invitation.rsvp === null).map(invitation => (
        <div>
        <TimeIcon>
        <P1>{invitation.event.date}</P1>
        <P2>{invitation.event.start}</P2>
        </TimeIcon>
        <List>
          {invitation.sender.name} invited you to {''}
          <Link to={`events/${invitation.event.id}`}>
          {invitation.event.title}
          </Link>
        </List>
        <form>
        <Button2 onClick={() => handleAcceptInvitation(invitation.id)}>RSVP Yes</Button2>
        <Button2 onClick={() => handleRejectInvitation(invitation.id)}>RSVP No</Button2>
        </form>    
      </div>
        ))}
      </div>
      <div className="space-y-4 my-4">
        <H2>ACCEPTED INVITATIONS</H2>
        {invitations.filter(invitation => invitation.rsvp === true).map(invitation => (
          <div>
        <TimeIcon>
        <P1>{invitation.event.date}</P1>
        <P2>{invitation.event.start}</P2>
        </TimeIcon>
          <Img src={invitation.event.event_picture_url}/>
          <List>
            <Link to={`events/${invitation.event.id}`}>
              {invitation.event.title}
            </Link>
          </List>
          <form>
          <Button2 onClick={() => handleRejectInvitation(invitation.id)}>Update to Can't Go</Button2>
          </form>
          </div>
        ))}
      </div>
      <div className="space-y-4 my-4">
        <H2>DECLINED INVITATIONS</H2>
        {invitations.filter(invitation => invitation.rsvp === false).map(invitation => (
          <div>
            <TimeIcon2>
              <P1>{invitation.event.date}</P1>
              <P2>{invitation.event.start}</P2>
            </TimeIcon2>
          <List>
            <Button4 as={Link} to={`events/${invitation.event.id}`}>
              {invitation.event.title}
            </Button4>
          </List>
          <form>
          <Button3 onClick={() => handleAcceptInvitation(invitation.id)}>Update to Attending</Button3>
          </form>
          </div>
        ))}
      </div>

    </Wrapper>
  )
}

export default PendingInvitedEventsList

const Wrapper = styled.section`
margin: 15px;
`;

const Img = styled.img`
height: 50px;
border-radius: 8px;
display:inline;
float: right;
`;

const H2 = styled.h2`
font-family: 'Quicksand', sans-serif;
display:inline;
padding-top: 50px;
margin-left: 60px;
font-size: 17px;
`

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 50px;
  height: auto;
  display:inline;
`;


const TimeIcon = styled.div`
    padding-top: 2.2px;
    font-family: 'Quicksand', sans-serif;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    background: black;
    color: lightgray;
    /* border: 3.2px solid white; */
    border-radius: 8px;
    float: left;
    text-align: center;
    &:hover {
      color: #99FFFF;
      transition: all 0.4s ease 0s;
    }
`;

const TimeIcon2 = styled.div`
    padding-top: 2.2px;
    font-family: 'Quicksand', sans-serif;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    background: gray;
    border-radius: 8px;
    float: left;
    text-align: center;
    color: lightgray;
`;

const P1 = styled.p`
font-size: 14px;
margin: 0;
`

const P2 = styled.p`
margin-top: -7px;
font-size: 22px;
`

const P11 = styled.p`
font-size: 14px;
margin: 0;
color: gray;
`

const P21 = styled.p`
margin-top: -7px;
font-size: 22px;
color: gray;
`

const List = styled.h1`
margin-left: 60px;
font-family: 'Quicksand', sans-serif;
font-size: 17px;
`

const Button2 = styled.button`
font-family: 'Quicksand', sans-serif;
margin-right: 40px;
color: black;
font-size: 14px;
`
const Button3 = styled.button`
font-family: 'Quicksand', sans-serif;
margin-right: 40px;
color: gray;
font-size: 14px;
`
const Button4 = styled.button`
font-family: 'Quicksand', sans-serif;
margin-right: 40px;
color: gray;
font-size: 17px;
`

