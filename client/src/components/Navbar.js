import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

function NavBar({ setUser }) {
  const history = useHistory();

  function handleLogoutClick() {
    fetch("http://127.0.0.1:3000/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  history.push(`/`)
  }

  return (
      <Nav>
        <Button2 as={Link} to="/profile">Profile</Button2>
        <Button2 as={Link} to="/events">Events</Button2>
        <Button2 as={Link} to="/create">Create Event</Button2>
        <Button2 as={Link} to="/search">Search</Button2>
        <Button2 onClick={handleLogoutClick}>Logout</Button2>
      </Nav>
  );
}

const Nav = styled.nav`
  text-align: center;
`;

const Button2 = styled.button`
  display: inline-block;
  padding: 15px;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  color: black;
`;

export default NavBar;
