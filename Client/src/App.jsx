import "./App.css";
import Desktop from "./Components/Desktop";
import Navbar from "./Components/Navbar";
import Details from "./Components/Details";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Nav_details from "./Components/Nav_details";
import Tax from "./Components/Tax";
import HelpandSupp from "./Components/HelpandSupp";
import Home from "./Components/Home";
import { useEffect } from "react";
import Ownerhome from "./Components/Ownerhome";
import Userhome from "./Components/Userhome";
function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/');
    }
  },[])
  return (

    <>
      <Navbar />


      <Routes>
        {/* Default route set to Home component */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/owner" element={<Ownerhome />} />
        <Route exact path="/user" element={<Userhome />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/desktop" element={<Desktop />} />
        <Route exact path="/Navdetails" element={<Nav_details />} />
        <Route exact path="/Tax" element={<Tax />} />
        <Route exact path="/Help" element={<HelpandSupp />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>


    </>
  );
}

export default App;
