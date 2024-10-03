import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../Styles/Home.css"
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="bg-image">
          <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid p-2 m-3">
              <h2 className="navbar-brand px-4 fs-1" >
                <img
                  src={logo}
                  alt=""
                  width="50"
                  height="50"
                  className="d-inline-block align-text-top"
                />&ensp;
                RoomLo
              </h2>
              <h3 className="btn btn-dark rounded-pill fs-5">
                <Link className="text-decoration-none text-light p-3" to={"/login"}>Login</Link>
              </h3>
            </div>
          </nav>
          <div className="container position-absolute top-50 start-50 translate-middle">
            <h1 className="text-center text-light fs-1">
              Get Rooms
              Anywhere In India.
            </h1>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
