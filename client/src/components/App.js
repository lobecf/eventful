import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Header from "./Header";
import EventsContainer from "../pages/EventsContainer";
import Login from "../pages/Login";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <main>
        {user ? (
          <div>
            <NavBar user={user} setUser={setUser} />
            <Switch>
                  <Route path="/profile">
                    <EventsContainer user={user} setUser={setUser} />
                  </Route>
                  <Route path="/events">
                    <EventsContainer user={user} setUser={setUser}/>
                  </Route>
                  <Route path="/create">
                    <EventsContainer user={user} setUser={setUser}/>
                  </Route>
                  <Route path="/search">
                    <EventsContainer user={user} setUser={setUser}/>
                  </Route>
            </Switch>
          </div>
        ) : (
          <Wrapper>
          <Login onLogin={setUser} />
          </Wrapper>
        )}
      </main>
    </div>
  );
}

export default App;

const Wrapper = styled.section`
padding: 5px;
width: 400px;
background: lightgray;
margin: auto;
position: relative;
border-radius: 50px;
outline: 1px solid white;
outline-offset: -10px ;
`;
