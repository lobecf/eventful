import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../styles";

function Header ( { onLogin} ) {

    return (
    <Wrapper>
        <Logo>Eventful</Logo>
    </Wrapper>
    )
}
export default Header;

const Logo = styled.h1`
font-family: 'Damion', cursive;
font-family: 'Pacifico', cursive;
  font-size: 5rem;
  color: black;
  margin: 8px 0 16px;
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;