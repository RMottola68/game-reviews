import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import GamesContainer from "./GamesContainer";
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/games" replace/>} />
      <Route path="games" element={<GamesContainer />} />
    </Routes>
  );
}

export default App;
