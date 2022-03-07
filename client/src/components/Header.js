import React from 'react';
import styled from "styled-components";

function Header () {

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
