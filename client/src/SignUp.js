import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

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
  
    let fullDate = `${day}/${month}/${year}`;

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
    <div style={{marginLeft: "160px"}}>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="isDeveloper">Are you a Game Developer?</label>
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
        <label htmlFor="image">Choose Your Profile Image</label>
        <input 
            type="text"
            id="state"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            autoComplete="off"
        />
        <button type="submit" >Sign Up</button>
      </form>
      <br></br>
      <h1>OR</h1>
      <Button className="btn-dark my-5" onClick={()=> setClicked(false)}>Login</Button>
    </div>
    
  );
}

export default SignUp;