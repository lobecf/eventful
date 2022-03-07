import React from 'react'
import styled from "styled-components";


function UserDetails({ user, handleUpload }) {


  return (
    <Wrapper>
      <Thumbnail src={user.profile_picture_thumbnail_url}/>
      <ProfileTitle>{user.name}</ProfileTitle>
      <List>{''}</List>
      <List>@{user.username}</List>
    </Wrapper>
  )
}

export default UserDetails

const Wrapper = styled.section`
margin: 15px;
`;

const List = styled.h1`
margin-right: 10px;
font-family: 'Quicksand', sans-serif;
font-size: 15px;
position: relative;
display: inline;
`

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 50px;
  height: auto;
  border-radius: 30px 5px 5px 5px;
  display:inline;
`;

const ProfileTitle = styled.h1 `
position: relative;
padding-top: 30px;
font-family: 'Quicksand', sans-serif;
font-size: 25px;
display:inline;
`;