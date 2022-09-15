import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Sidebar from "./Sidebar";
import Landing from "./Landing";
import GamesContainer from "./GamesContainer";
import GameDetails from "./GameDetails";
import ReviewsContainer from "./ReviewsContainer";
import MyProfile from "./MyProfile";
import GameForm from "./GameForm";
import ReviewForm from "./ReviewForm";
import Login from "./Login";
import NeonGaming from "./assets/NeonGaming.webp";
import './App.css';


function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    fetch('/games')
      .then(res=>res.json())
      .then(gamesData => setGames(gamesData))
  },[])

  useEffect(()=>{
    fetch('/reviews')
      .then(res=>res.json())
      .then(reviewsData => setReviews(reviewsData))
  },[])

  useEffect(() => {
    // auto-login
    fetch("/myprofile").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const sectionStyle = {
    backgroundImage: `url(${NeonGaming})`,
    height: "100%",
    width: "100%",
    backgroundAttachment: "fixed"
  }


  if(!user) {
    return (
      <div style={sectionStyle} >
        <Login setUser={setUser}/>
      </div>
    )
  } else {
    return (
      <div className="App m-0 p-0" style={sectionStyle} >
        
        <Sidebar className="" id="sidebar" user={user} setUser={setUser} style={{position: "relative"}}/>
        
        <Routes style={{position: "relative"}}>
          
          <Route path="*" element={<Navigate to="/home" replace/>} />
          <Route path="home" element={<Landing />} />
          <Route path="games" element={<GamesContainer games={games} setGames={setGames} />} />
          <Route path="games/:id" element={<GameDetails />} />
          <Route path="reviews" element={<ReviewsContainer reviews={reviews} />} />
          <Route path="myprofile" element={<MyProfile user={user} />} />
          <Route path="addgame" element={<GameForm setGames={setGames}/>} />
          <Route path="addreview" element={<ReviewForm setReviews={setReviews} user={user} setUser={setUser} games={games} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
