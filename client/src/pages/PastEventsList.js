import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { ProfileTitle } from "../styles";

function PastEventsList({ pastEvents, pastInvitations }) {


  return (
    <Wrapper>
      <Thumbnail src="https://cdn3.iconfinder.com/data/icons/social-productivity-line-art-5/128/history-dating-1024.png"/>
      <ProfileTitle>Past Events</ProfileTitle>
      <div className="space-y-4 my-4">
        <H2>CREATED EVENTS</H2>
        {pastEvents.map(event => (
          <div>
          <TimeIcon>
          <P1>{event.date}</P1>
          <P2>{event.start}</P2>
          </TimeIcon>
          <List>
            <Link to={`events/${event.id}`}>
              {event.title}
            </Link>
          </List>
          <P1>{event.user.name}</P1>
          </div>
        ))}
        </div>
        <div className="space-y-4 my-4">
        <H2>INVITED EVENTS</H2>
        {pastInvitations.filter(invitation => invitation.rsvp === true).map(invitation => (
          <div>
          <TimeIcon>
          <P1>{invitation.event.date}</P1>
          <P2>{invitation.event.start}</P2>
          </TimeIcon>
          <List>
            <Link to={`events/${invitation.event.id}`}>
              {invitation.event.title}
            </Link>
          </List>
          <P1>Guests</P1>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default PastEventsList

const Wrapper = styled.section`
margin: 15px;
`;

const H2 = styled.h2`
font-family: 'Quicksand', sans-serif;
display:inline;
margin-left: 60px;
font-size: 15px;
`

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 50px;
  height: auto;
  border-radius: 50%;
  display:inline;
`;

const List = styled.h1`
margin-left: 40px;
font-family: 'Quicksand', sans-serif;
font-size: 15px;
`
const TimeIcon = styled.div`
    padding-top: 2.2px;
    font-family: 'Quicksand', sans-serif;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    color: lightgray;
    background: black;
    border-radius: 8px;
    float: left;
    text-align: center;
`;

const P1 = styled.p`
font-family: 'Quicksand', sans-serif;
font-size: 14px;
margin: 0;
`

const P2 = styled.p`
margin-top: -7px;
font-size: 22px;
`