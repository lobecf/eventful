import React, { useState } from "react";
import styled from "styled-components";
import { Error } from "../styles";
import { useHistory } from 'react-router-dom'

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
      }),
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
    <H3>Sign Up</H3>
    <Wrapper>
    <form onSubmit={handleSubmit}>
      <P>
        <Input
          placeholder="Name"
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </P>
      <P>
        <Input
          placeholder="Username"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </P>
      <P>
        <Input
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </P>
      <P>
        <Input
          placeholder="Confirm Password"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </P>
      <P>
        <Button2 type="submit">{isLoading ? "Loading..." : "Submit"}</Button2>
      </P>
      <P>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </P>
    </form>
    </Wrapper>
    </Wrapper2>
  );
}

export default SignUpForm;

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
