import React, { useState } from "react";
import styled from "styled-components";
import { Button, Error, FormField, Label, ProfileTitle } from "../styles";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    history.push("/profile")
  }

  return (
    <Wrapper2>
    <H3>Login</H3>
    <Wrapper>
    <Form onSubmit={handleSubmit}>
      <P>
        <Input
          type="text"
          placeholder="Username"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </P>
      <P>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </P>
      <P>
        <Button2 variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </Button2>
      </P>
      <P>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </P>
    </Form>
    </Wrapper>
    </Wrapper2>
  );
}

export default LoginForm;

const Form = styled.form`
  margin-bottom: 3px;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Button2 = styled.button`
    margin: auto;
    font-family: 'Quicksand', sans-serif;
    width: 300px;
    color: white;
    background: black;
    border-radius: 20px;
    &:hover {
      color: #99FFFF;
      transition: all 0.4s ease 0s;
    }
`;

const Wrapper2 = styled.section`
margin: 15px;
`;


const Input = styled.input`
font-family: 'Quicksand', sans-serif;
width: 300px;
border-radius: 20px;
padding-left: 5px;
`;

const H2 = styled.section`
font-family: 'Quicksand', sans-serif;
font-size: 15px;
margin-left: 90px;
background: white;
`

const Thumbnail = styled.img`
  margin-right: 10px;
  width: 50px;
  height: auto;
  border-radius: 50%;
  display:inline;
`;

const List = styled.h1`
font-family: 'Quicksand', sans-serif;
font-size: 15px;
display: inline;
width: 90px;
`

const P = styled.p `
display: flex;
position: relative;
`

const H3 = styled.h1 `
text-align: center;
padding-top: 15px;
padding-bottom: 15px;
font-family: 'Quicksand', sans-serif;
font-size: 25px;
`;
