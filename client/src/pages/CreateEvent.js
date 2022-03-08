import React, { useState } from 'react'
import styled from "styled-components";
import { ProfileTitle } from "../styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
// import CloudinaryUpload from './CloudinaryUpload'


function CreateEvent({ allUsers, createEvent }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [eventType, setEventType] = useState('')
  // const [eventImage, setEventImage] = useState('')
  const [receivers, setReceivers] = useState([])
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    createEvent({
      title,
      description,
      location,
      start_time: startTime,
      end_time: endTime,
      event_type: eventType,
      receivers,
      // event_picture_url: eventImage
    })
    setTitle('')
    setDescription('')
    setLocation('')
    setStartTime('')
    setEndTime('')
    setEventType('')
    setReceivers([])
    // setEventImage('')
    history.push("/events")
  }

  // const handlePosterUpload = (result) => {
  //   setEventImage(result.info.secure_url)
  // }

  const handleChange2 = (user, checked) =>
  checked
    ? setReceivers((prev) => [...prev, user])
    : setReceivers((prev) =>
        prev.filter((c) => c.name !== user.name)
      );

  return (
    <Wrapper2>
      <Thumbnail src="https://cdn0.iconfinder.com/data/icons/neutro-interface/32/compose-1024.png"/>
      <ProfileTitle>Create New Event</ProfileTitle>
      <Wrapper>
      <form className="my-4 space-y-4" onSubmit={handleSubmit}>
        <P >
          <List htmlFor="title">Title: </List>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </P>
        <P >
          <List htmlFor="description"> Desc: </List>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
        </P>
        <P >
          <List htmlFor="name"> Where: </List>
          <Input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
          />
        </P>
        <P >
          <List htmlFor="start_time"> Start: </List>
          <Input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            name="start_time"
          />
        </P>
        <P >
          <List htmlFor="end_time"> End: </List>
          <Input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            name="end_time"
          />
          </P>
          {/* <P>
          <List htmlFor="title">Image: </List>
          <CloudinaryUpload
            preset="czv350o5"
            buttonText="Click to add"
            handleUpload={handlePosterUpload}
          />
        </P> */}
      
        <Div >
          <List htmlFor="guests"> Guests: </List>
          <Div2>
          {allUsers.map((c) => {
          return (
            <H2>
              <input type="checkbox"
              value={receivers} 
              onChange={(e) => handleChange2(c, e.target.checked)} />
              {" "}{`${c.name}`}
            </H2>
          );
        })}
        </Div2>
          </Div>
        <p>
          <Button2 type="submit">Add Event</Button2>
        </p>
      </form>
      </Wrapper>
    </Wrapper2>
  )
}

export default CreateEvent

const Wrapper = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
`;

const Button2 = styled.button`
    text-align: center;
    margin-left: 60px;
    font-family: 'Quicksand', sans-serif;
    width: 340px;
    color: white;
    background: black;
    display: inline-block
    position: relative;
    border-radius: 20px;
    &:hover {
      color: #99FFFF;
      transition: all 0.4s ease 0s;
    }
`;

const Wrapper2 = styled.section`
margin: 15px;
`;

const Div = styled.section`
position: relative;
display: flex;
`;

const Div2 = styled.section`
  width: 340px;
  height: 150px;
  overflow: auto;
  border-radius: 20px;
`;


const Input = styled.input`
font-family: 'Quicksand', sans-serif;
width: 340px;
border-radius: 20px;
padding-left: 10px;
`;

const H2 = styled.section`
font-family: 'Quicksand', sans-serif;
font-size: 15px;
margin: 0px;
padding-left: 10px;
padding-top: 5px;
background: white;
`

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 50px;
  height: auto;
  display:inline;
`;

const List = styled.h1`
font-family: 'Quicksand', sans-serif;
font-size: 15px;
display: inline;
width: 60px;
`

const P = styled.p `
display: flex;
position: relative;
`