import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Sidebar from "./Sidebar"
import GamesContainer from "./GamesContainer";
import GameDetails from "./GameDetails";
import ReviewsContainer from "./ReviewsContainer";
import MyProfile from "./MyProfile";
import GameForm from "./GameForm";
import ReviewForm from "./ReviewForm";
import Login from "./Login";
import './App.css';


function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [reviews, setReviews] = useState([]);



  useEffect(() => {
    // auto-login
    fetch("/myprofile").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(()=>{
    fetch('/reviews')
      .then(res=>res.json())
      .then(reviewsData => setReviews(reviewsData))
  },[])

  useEffect(()=>{
    fetch('/games')
      .then(res=>res.json())
      .then(gamesData => setGames(gamesData))
  },[])

  if(!user) {
    return (
    <Login setUser={setUser}/>
    )
  } else {
    return (
      <div className="App m-0 p-0" style={{}}>
        
        <Sidebar className="" id="sidebar" user={user} setUser={setUser} style={{position: "relative"}}/>
        
        <Routes style={{position: "relative"}}>
          
          <Route path="*" element={<Navigate to="/games" replace/>} />
          <Route path="games" element={<GamesContainer games={games} />} />
          <Route path="games/:id" element={<GameDetails />} />
          <Route path="reviews" element={<ReviewsContainer reviews={reviews} />} />
          <Route path="myprofile" element={<MyProfile user={user}/>} />
          <Route path="addgame" element={<GameForm setGames={setGames} />} />
          <Route path="addreview" element={<ReviewForm setReviews={setReviews} />} />
          
        </Routes>
      </div>
    );
  }
}

export default App;
