import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row } from 'react-bootstrap';
import SignUp from './SignUp';
import LoginImg from './assets/login.png';

function Login({ setUser }) {
  const [loginUser, setloginUser] = useState("");
  const [loginPass, setloginPass] = useState("");
  const [clicked, setClicked] = useState(false);
  function handleLogin(e) {
    
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: loginUser, password: loginPass}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        alert('Invalid username or password')
      }
    })
  }


    if (!clicked) {
      return(
    <div className="p-5" style={{height: "100vh"}}>
      <Container className="text-center p-5 bg-dark text-light" style={{borderRadius: "30px"}}>
        
        <Form onSubmit={handleLogin}>
        <img src={LoginImg} style={{width:"100%"}} />
          <Row>
            <Form.Group  className="mb-0" >
              <Form.Label htmlFor="username"><h2>Username</h2></Form.Label>
              <Form.Control
                type="text"
                id="username"
                autoComplete="off"
                value={loginUser}
                onChange={(e) => setloginUser(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            autoComplete="current-password"
            value={loginPass}
            onChange={(e) => setloginPass(e.target.value)}
          />
          <Form.Text  className="text-muted"></Form.Text>
          </Form.Group>
          </Row>
          <Button type="submit" className="my-5">Login</Button>
        </Form>
        <br></br>
        <h1>OR</h1>
        <Button className=" my-5" onClick={()=> setClicked(true)}>Sign Up!</Button>
        </Container>
    </div>
  )} else {
    return(
      <SignUp clicked={clicked} setClicked={setClicked} setUser={setUser}/>
    )
  };
}

export default Login;