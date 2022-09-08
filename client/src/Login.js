import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';

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
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      } else {
        alert('Invalid username or password')
      }
    })
  }


    if (!clicked) {
      return(
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={loginUser}
          onChange={(e) => setloginUser(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={loginPass}
          onChange={(e) => setloginPass(e.target.value)}
        />
        <Button type="submit" >Login</Button>
      </form>
      <br></br>
      <h1>OR</h1>
      <Button className=" my-5" onClick={()=> setClicked(true)}>Sign Up!</Button>
    </div>
  )} else {
    return(
      <SignUp clicked={clicked} setClicked={setClicked} setUser={setUser}/>
    )
  };
}

export default Login;