import './App.css';
import Nav from './Nav';
import Home from './Home';
import Settings from './Settings'
import Login from './Login'
import { Routes, Route } from "react-router-dom";

function App() {



  return (
    <>
      <Nav />
      <div className='Container'>
        <Routes>
          <Route path="/home" element={ <Home/> } />
          <Route path="/settings" element={ <Settings/> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
