import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { ProfileTitle } from "../styles";

function CreatedEventsList({ events, cancelEvent, user }) {

  const cancelEventButton = (event) => {
    if (event.user_can_modify) {
      return <Button2 onClick={() => cancelEvent(event.id)}>Cancel Event</Button2>
    }
  }

  return (
    <Wrapper>
      <Thumbnail src="https://cdn0.iconfinder.com/data/icons/election-and-politics-4/68/Agreement_document_invitation_letter_post__1-1024.png"/>
      <ProfileTitle>Your Created Events</ProfileTitle>
      <div className="space-y-4 my-4">
        {events.map(event => (
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
          <Link to={`events/update/${event.id}`}>
            <Button2> Update Event</Button2>
          </Link>
          <span> {cancelEventButton(event)}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default CreatedEventsList

const Wrapper = styled.section`
margin: 15px;
`;

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 50px;
  height: auto;
  display:inline;
`;

const List = styled.h1`
margin-left: 40px;
font-family: 'Quicksand', sans-serif;
font-size: 17px;

`
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
      border: 3.2px solid #99FFFF;
      transition: all 0.4s ease 0s;
    }
`;

const P1 = styled.p`
font-size: 14px;
margin: 0;
`

const P2 = styled.p`
margin-top: -7px;
font-size: 22px;
`

const Button2 = styled.button`
font-family: 'Quicksand', sans-serif;
margin-right: 5px;
color: black;
font-size: 15px;
`
