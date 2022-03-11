import React from 'react'
import styled from "styled-components";
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

  return (
    <Wrapper>
      <img alt="User Profile" src={user.profile_picture_url}/>
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