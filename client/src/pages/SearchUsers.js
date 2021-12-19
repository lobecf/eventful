import React, {useState} from 'react'
import styled from "styled-components";
import { Button, Birthday, Halloween, Holiday, NewYears, Thanksgiving, P } from "../styles";
import CloudinaryUpload from './CloudinaryUpload'


function SearchUsers({ allUsers }) {

const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');

const filterUsers = (allUsers, query) => {
  if (!query) {
      return allUsers;
  }

  return allUsers.filter((user) => {
      const userName = user.name.toLowerCase();
      return userName.includes(query);
  });
};

const filteredUsers = filterUsers(allUsers, searchQuery);

  return (
    <Wrapper>
      <Thumbnail src="https://cdn2.iconfinder.com/data/icons/lucid-generic/24/add_new_button_plus_create-1024.png"/>
      <ProfileTitle>Search Users</ProfileTitle>
      <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
        <ul>
          {filteredUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
          ))}
        </ul>
    </form>
    </Wrapper>
  )
}

export default SearchUsers

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