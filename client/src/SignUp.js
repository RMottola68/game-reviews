import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function SignUp({ setUser, setClicked }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isDeveloper, setIsDeveloper] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [image, setImage] = useState("");
  
  function handleLogin(e) {
    
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
  
    let fullDate = `${month}/${day}/${year}`;

    useEffect(()=>{
        setJoinDate(fullDate)
    },[])
 

  function handleSignUp(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        is_developer: isDeveloper,
        join_date: joinDate,
        image
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    }).then((r) => {
      if(r.ok){
        handleLogin(e)
      }
    })
    
  }

  return (
    <div className="p-5">
      <Container className="text-center p-5 bg-dark text-light" style={{borderRadius: "30px"}}>
          <Form onSubmit={handleSignUp}>
            <Row>
              <h1>Sign Up</h1>
              <Form.Label htmlFor="username"><h2>Username</h2></Form.Label>
              <Form.Control
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label htmlFor="password"><h2>Password</h2></Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <Form.Label htmlFor="password"><h2>Password Confirmation</h2></Form.Label>
              <Form.Control
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
              />
              <Form.Label htmlFor="isDeveloper"><h2>Are you a Game Developer?</h2></Form.Label>
                  <select name="develoeprs" id="isDeveloper" required onChange={(e) => setIsDeveloper(e.target.value)}>
                      <option value="">Please Choose Yes or No</option>
                      <option value="true" >Yes</option>
                      <option value="false" >No</option>

                  </select>
              {/* <input 
                  type="text"
                  id="isDeveloper"
                  value={isDeveloper}
                  onChange={(e) => setIsDeveloper(e.target.value)}
                  autoComplete="off"
              /> */}
              <label htmlFor="image"><h1>Choose Your Profile Image</h1></label>
              <input 
                  type="text"
                  id="state"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  autoComplete="off"
              />
            </Row>
            <Row>
              <Col>
              <Button className="mt-5" type="submit" >Sign Up</Button>
              </Col>
            </Row>
          </Form>
          <br></br>
          <h1>OR</h1>
          <Button className="my-5" onClick={()=> setClicked(false)}>Login</Button>
        </Container>
    </div>
    
  );
}

export default SignUp;