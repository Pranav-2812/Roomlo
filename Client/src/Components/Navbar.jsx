import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/Logo.png";
import whatsappLogo from "../assets/Whatsapp.png";
import MoneyLogo from "../assets/Money.png";
import { Link , useNavigate } from "react-router-dom";

import {  signOut } from "firebase/auth";
import { auth} from "../context/firebase";
const Navbar = () => {
  const [open, setOpen] = useState(false); //to check if side bar is open
  const openSideBar = () => {
    if (!open) {
      document.querySelector(".side_bar").style.display = "block";
      document
        .querySelector(".side_bar_btn")
        .classList.toggle("side_bar_btn_after");
      setOpen((open) => (open = true));
    } else {
      closeSideBar();
    }
  };
  const closeSideBar = () => {
    document.querySelector(".side_bar").style.display = "none";
    document
      .querySelector(".side_bar_btn")
      .classList.remove("side_bar_btn_after");
    setOpen((open) => (open = false));
  };
  window.onclick = (e) => {
    if (e.target === document.querySelector(".side_bar")) {
      closeSideBar();
    }
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/Login");
        localStorage.removeItem("token")
        console.log(localStorage.getItem("token"))
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
 
  return (
    <>
      <div className="navbar_main">
        <div className="first_half">
          <span className="side_bar_btn" onClick={openSideBar}>
            <hr className="hr" />
            <hr className="hr" />
            <hr className="hr" />
          </span>
          <span className="logo_name">
            <img src={logo} />
            <h2>Roomlo</h2>
          </span>
        </div>
        <div className="second_half">
          <span className="icons">
            <img src={whatsappLogo}></img>
            <p>Whatsapp</p>
          </span>
          <span className="icons">
            <i className="fa-regular fa-user"></i>
            <p><Link
            className="link" to="/signup">Signup</Link></p>
          </span>
        </div>
      </div>
      <div className="side_bar">
        <div className="side_bar_contents">
          <ul className="list">
            <li>
              <i className="fa-solid fa-house"></i>
              <Link  className="link" to="/desktop">Home</Link>
            </li>
            <li>
              <i className="fa-solid fa-map"></i>
              <Link className="link" to="/">Map</Link>
            </li>
            <li>
              <i className="fa-regular fa-heart"></i>
              <Link className="link" to="/cats">Wishlist</Link>
            </li>
            <li>
              <i className="fa-solid fa-door-open"></i>
              <Link className="link" to="/">My Rooms</Link>
            </li>
            <hr style={{ border: "1px solid grey" }} />
            <li>
              <i className="fa-regular fa-user"></i>
              <Link className="link" to="/profile">Profile</Link>
            </li>
            <li>
              <i className="fa-solid fa-sack-dollar"></i>
              <Link className="link" to={!localStorage.getItem("token")? "/details":"/login"}>Payments</Link>
            </li>
            <li>
              <img src={MoneyLogo} />
              <Link className="link" to="/">Tax</Link>
            </li>
            <li>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <Link className="link" to="/">History</Link>
            </li>
            <li>
              <i className="fa-solid fa-gear"></i>
              <Link className="link" to="/">Setting</Link>
            </li>
            <li>
              <i className="fa-solid fa-circle-question"></i>
              <Link className="link" tp="/">Help and Support</Link>
            </li>
            <li onClick={handleLogout}>
              <i className="fa-solid fa-circle-question"></i>
              <Link className="link" to={!localStorage.getItem("token")? "/home":"/logout"} >
               Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
