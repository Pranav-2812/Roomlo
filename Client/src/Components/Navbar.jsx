import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/Logo.png";
import whatsappLogo from "../assets/Whatsapp.png";
import MoneyLogo from "../assets/Money.png";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate hook

import { signOut } from "firebase/auth";
import { auth } from "../context/firebase";

const Navbar = () => {
  const [open, setOpen] = useState(false); // to check if side bar is open
  const navigate = useNavigate(); // use the useNavigate hook

  const openSideBar = () => {
    if (!open) {
      document.querySelector(".side_bar").style.display = "block";
      document
        .querySelector(".side_bar_btn")
        .classList.toggle("side_bar_btn_after");
      // document.querySelector("body").style.overflow = "hidden";
      setOpen(true);
    } else {
      closeSideBar();
    }
  };

  const closeSideBar = () => {
    document.querySelector(".side_bar").style.display = "none";
    document
      .querySelector(".side_bar_btn")
      .classList.remove("side_bar_btn_after");
    document.querySelector("body").style.overflow = "scroll";
    setOpen(false);
  };

  window.onclick = (e) => {
    if (e.target === document.querySelector(".side_bar")) {
      closeSideBar();
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("token");
        console.log("Signed out successfully");
        navigate("/login"); // Redirect to login after logout
      })
      .catch((error) => {
        console.log("Error logging out:", error.message);
      });
  };

  const isLoggedIn = localStorage.getItem("token"); // Check if user is logged in

  return (
    <>
    {localStorage.getItem("acc") === "owner" ? <> <div className="navbar_main">
        <div className="first_half">
          <span className="side_bar_btn" onClick={openSideBar}>
            <hr className="hr" />
            <hr className="hr" />
            <hr className="hr" />
          </span>
          <span className="logo_name">
            <img src={logo} alt="Roomlo logo" />
            <h2>Roomlo</h2>
          </span>
        </div>
        <div className="second_half">
          <span className="icons">
            <img src={whatsappLogo} alt="WhatsApp logo" />
            <p>Whatsapp</p>
          </span>
          <span className="icons">
            <i className="fa-regular fa-user"></i>
            <p>
  {!isLoggedIn ? (
    <Link className="link" to="/signup">
      Signup
    </Link>
  ) : (
    localStorage.getItem("acc") === "user" ? "User" : "Owner"
  )}
</p>

          </span>
        </div>
      </div>
      <div className="side_bar">
        <div className="side_bar_contents">
          <ul className="list">
            <li>
              <i className="fa-regular fa-user"></i>
              <Link className="link" to={!isLoggedIn ? "/login" : "/profile"}>
              Profile
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-map"></i>
              <Link className="link" to="/listproperty">
                List Property
              </Link>
            </li>
            <li>
              <i className="fa-regular fa-heart"></i>
              <Link className="link" to={!isLoggedIn ? "/login" : "/myproperty"}>
                My Property
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-sack-dollar"></i>
              <Link className="link" to={!isLoggedIn ? "/login" : "/Rooms"}>
                Details
              </Link>
            </li>
            <hr style={{ border: "1px solid grey" }} />
            <li>
              <img src={MoneyLogo} alt="Money logo" />
              <Link className="link" to="/Tax">
                Tax
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-gear"></i>
              <Link className="link" to="/Setting">
                Setting
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-circle-question"></i>
              <Link className="link" to="/Help">
                Help and Support
              </Link>
            </li>
            <li onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <span className="link">Logout</span>{" "}
              {/* No need to navigate to a logout route */}
            </li>
          </ul>
        </div>
      </div> </>: 
      <>
      <div className="navbar_main">
        <div className="first_half">
          <span className="side_bar_btn" onClick={openSideBar}>
            <hr className="hr" />
            <hr className="hr" />
            <hr className="hr" />
          </span>
          <span className="logo_name">
            <img src={logo} alt="Roomlo logo" />
            <h2>Roomlo</h2>
          </span>
        </div>
        <div className="second_half">
          <span className="icons">
            <img src={whatsappLogo} alt="WhatsApp logo" />
            <p>Whatsapp</p>
          </span>
          <span className="icons">
            <i className="fa-regular fa-user"></i>
            <p>
              {!isLoggedIn ? (
                <Link className="link" to="/signup">
                  Signup
                </Link>
              ) : (
                "User"
              )}
            </p>
          </span>
        </div>
      </div>
      <div className="side_bar">
        <div className="side_bar_contents">
          <ul className="list">
            <li>
              <i className="fa-solid fa-house"></i>
              <Link className="link" to={!isLoggedIn ? "/login" : "/desktop"}>
                Home
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-map"></i>
              <Link className="link" to="/Map">
                Map
              </Link>
            </li>
            <li>
              <i className="fa-regular fa-heart"></i>
              <Link className="link" to={!isLoggedIn ? "/login" : "/Wishlist"}>
                Wishlist
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-door-open"></i>
              <Link className="link" to={!isLoggedIn ? "/login" : "/Rooms"}>
                My Rooms
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-sack-dollar"></i>
              <Link
                className="link"
                to={!isLoggedIn ? "/login" : "/Navdetails"}
              >
                Details
              </Link>
            </li>
            <hr style={{ border: "1px solid grey" }} />
            <li>
              <i className="fa-regular fa-user"></i>
              <Link className="link" to={!isLoggedIn ? "/login" : "/profile"}>
                Profile
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-sack-dollar"></i>
              <Link
                className="link"
                to={!isLoggedIn ? "/login" : "/Navdetails"}
              >
                pay
              </Link>
            </li>
            <li>
              <img src={MoneyLogo} alt="Money logo" />
              <Link className="link" to="/Tax">
                Tax
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <Link className="link" to="/History">
                History
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-gear"></i>
              <Link className="link" to="/Setting">
                Setting
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-circle-question"></i>
              <Link className="link" to="/Help">
                Help and Support
              </Link>
            </li>
            <li onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <span className="link">Logout</span>{" "}
              {/* No need to navigate to a logout route */}
            </li>
          </ul>
        </div>
      </div></> }
       
    </>
  );
};

export default Navbar;
