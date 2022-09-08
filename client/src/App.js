import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import Sidebar from "./Sidebar"
import GamesContainer from "./GamesContainer";
import ReviewsContainer from "./ReviewsContainer";
import MyProfile from "./MyProfile";
import GameForm from "./GameForm";
import ReviewForm from "./ReviewForm";
import Login from "./Login";
import './App.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/myprofile").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(!user) {
    return (
    <Login setUser={setUser}/>
    )
  } else {
    return (
      <div className="App m-0 p-0">
        <Sidebar user={user} setUser={setUser} className="m-0 p-0" />
        <Routes className="" >
          <Route path="*" element={<Navigate to="/games" replace/>} />
          <Route path="games" element={<GamesContainer />} />
          <Route path="reviews" element={<ReviewsContainer />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="addgame" element={<GameForm />} />
          <Route path="addreview" element={<ReviewForm />} />
        </Routes>
      </div>
    );
  }
}

export default App;
