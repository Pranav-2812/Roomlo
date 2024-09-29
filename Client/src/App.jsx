import "./App.css";
import Desktop from "./Components/Desktop";
import Navbar from "./Components/Navbar";
import Details from "./Components/Details";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Nav_details from "./Components/Nav_details";
import Tax from "./Components/Tax";
import HelpandSupp from "./Components/HelpandSupp";
import Desktoppage from "./Components/Desktoppage";
import { useState, useEffect } from "react"; // Import useState and useEffect

function App() {
  const [open, setOpen] = useState(false); // State to toggle between Desktoppage and Navbar

 

  return (
    <>
      <Router>
           <Navbar/>
            <div>
              <section>
                <Routes>
                  <Route path="/" element={<Desktoppage />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/details" element={<Details />} />
                  <Route path="/desktop" element={<Desktop />} />
                  <Route path="/Navdetails" element={<Nav_details />} />
                  <Route path="/Tax" element={<Tax />} />
                  <Route path="/Help" element={<HelpandSupp />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </section>
            </div>
         
      
      </Router>
    </>
  );
}

export default App;
