import React from 'react'
import styled from "styled-components";
import { Button, Birthday, Halloween, Holiday, NewYears, Thanksgiving, P } from "../styles";
import CloudinaryUpload from './CloudinaryUpload'


function Profile({ user, setUser }) {

  const handleUpload = (result) => {
    const body = {
      profile_picture_url: result.info.secure_url,
      profile_picture_thumbnail_url: result.info.eager[0].secure_url
    }
    fetch('/api/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        setUser(user)
      })
  }

  const profilePic = () => {
    if (user.profile_picture_thumbnail_url) {
      return (
        <img
          src={user.profile_picture_thumbnail_url}
          alt={user.username}
          className="rounded-full ml-auto"
        />
      )
    } else {
      return `Logged in as ${user.username}`
    }
    
  }

  return (
    <Wrapper>
      <img src={user.profile_picture_url}/>
      <CloudinaryUpload
      preset="vndioupo"
      handleUpload={handleUpload}
      buttonText="Update Profile Picture"
    />
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.section`
margin: 15px;
`;

const List = styled.h1`
margin-left: 60px;
font-family: 'Quicksand', sans-serif;
font-size: 15px;
`

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 50px;
  height: auto;
  border-radius: 50%;
  display:inline;
`;

const ProfileTitle = styled.h1 `
position: relative;
padding-top: 30px;
padding-bottom: 30px;
font-family: 'Quicksand', sans-serif;
font-size: 25px;
display:inline;
`;