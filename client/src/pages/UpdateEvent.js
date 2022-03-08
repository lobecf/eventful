import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { ProfileTitle } from "../styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
// import CloudinaryUpload from './CloudinaryUpload'

function UpdateEvent({eventId, allUsers}) {
  const [event, setEvent] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [receivers, setReceivers] = useState([])
  // const [eventImage, setEventImage] = useState('')
  const history = useHistory();

  useEffect(() => {
    getEvent();
  }, [])
  function getEvent() {
    fetch(`/api/events/${eventId}`).then((result) => {
      result.json().then((event) => {
        setEvent(event)
        setTitle(event.title)
        setDescription(event.description)
        setLocation(event.location)
        setStartTime(event.start_time)
        setEndTime(event.end_time)
        // setEventImage(event.event_picture_url)
        setReceivers([])
      })
    })
  }

  // const handlePosterUpload = (result) => {
  //   setEventImage(result.info.secure_url)
  // }

  const handleChange = (user, checked) =>
  checked
    ? setReceivers((prev) => [...prev, user])
    : setReceivers((prev) =>
        prev.filter((c) => c.name !== user.name)
      );



  function handleUpdate() {
    let event={title, description, location, start_time: startTime, end_time: endTime, receivers
      // , event_picture_url: eventImage
    }
    console.warn("event", event)
    fetch(`/api/events/${eventId}`, {
      method: 'PATCH',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(event)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getEvent()
      })
    })
    history.push(`/events/${eventId}`)
  }

  return (
    <Wrapper2>
      <Thumbnail src="https://cdn0.iconfinder.com/data/icons/ui-3-1/512/refresh-512.png"/>
      <ProfileTitle>Update {''}
        <Link to={`/events/${eventId}`}>{event.title}
        </Link>
        </ProfileTitle>
      <Wrapper>
      <form className="my-4 space-y-4" onSubmit={handleUpdate}>
        <P>
          <List htmlFor="title">Title: </List>
          <Input name="title" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </P>
        <P>
        <List htmlFor="title">Desc: </List>
        <Input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        </P>
        <P>
        <List htmlFor="title">Where: </List>
        <Input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
        </P>
        <P>
        <List htmlFor="title">Start: </List>
        <Input type="datetime-local" value={startTime} onChange={(e)=>{setStartTime(e.target.value)}} />
        </P>
        <P>
          <List htmlFor="title">End: </List>
          <Input type="datetime-local" value={endTime} onChange={(e)=>{setEndTime(e.target.value)}} />
        </P>
        {/* <P>
          <List htmlFor="title">Image: </List>
          <CloudinaryUpload
            preset="czv350o5"
            buttonText="Click to add"
            handleUpload={handlePosterUpload}
          />
        </P> */}
        <Div>
          <List htmlFor="guests">Guests: </List>
          <Div2>
          {allUsers.map((c) => {
          return (
            <H2>
              <input type="checkbox"
              value={receivers} 
              onChange={(e) => handleChange(c, e.target.checked)} />
              {`${c.name}`}
            </H2>
          );
        })}
        </Div2>
      </Div>
        <p>
          <Button2 type="submit">Update Event</Button2>
        </p>
      </form>
      {/* <p>{receivers}</p> */}
      </Wrapper>

    </Wrapper2>
  )
}

export default UpdateEvent

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