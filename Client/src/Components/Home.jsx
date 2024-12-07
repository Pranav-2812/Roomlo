import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="bg-image">
          <nav className="navbar navbar-light  bg-transparent py-1">
            <div className="container-fluid p-2 m-4  ">
              <h2 className="d-flex align-items-center navbar-brand px-4 fs-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-filter"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "30px" }}
                >
                  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="roomlo">
                  <img
                    src={logo}
                    alt="logo"
                    width="50"
                    height="50"
                    className="d-inline-block align-text-top pl-3"
                  />
                  &ensp;RoomLo
                </span>
              </h2>
              <h3 className="btn btn-dark rounded-pill fs-5 d-flex align-items-center justify-content-center">
                <Link
                  className="text-decoration-none text-light px-2"
                  to={"/login"}
                >
                  Login
                </Link>
              </h3>
            </div>
          </nav>

          {/* Center section */}
          <div id="cnt">
            <div className="container">
              <h1 className="text-center text-light fw-bold" id="Title">
                Get Rooms
              </h1>
              <h1 className="text-center text-light fw-bold" id="Title">
                Anywhere In India.
              </h1>

              <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="row flex-column align-items-center" id="box">
                  <h3 className="text-white text-center pt-3 pb-1 fs-3">
                    Who Are You?
                  </h3>

                  {/* Owner button */}
                  <div className="col pb-4 px-5 w-100">
                    <div className="p-2 py-2 border bg-light text-center rounded-pill">
                      <Link className="link" to="/ownerlogin">
                        <h4 className="text-center text-dark fw-bold">Owner</h4>
                        <h5 className="text-center px-4 m-2 fst-italic fw-lighter text-dark">
                          (Rent Room)
                        </h5>
                      </Link>
                    </div>
                  </div>

                  {/* Tenants button */}
                  <div className="col pb-4 px-5 w-100">
                    <div className="p-2 border bg-light text-center rounded-pill">
                      <Link className="link" to="/user">
                        <h4 className="text-center text-dark fw-bold">
                          Tenants
                        </h4>
                        <h5 className="text-center px-4 m-2 fst-italic fw-lighter text-dark">
                          (Want Room)
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Stats */}
            <div className="bottom-0 end-0 mb-5 me-5 text-white" id="btm">
              <div className="d-flex flex-column text-center">
                <div className="row gx-5">
                  <div className="col">
                    <h4>
                      400+ <br /> Owner/Rooms
                    </h4>
                  </div>
                  <div className="col">
                    <h4>
                      1000+ <br /> Tenants/Want Room
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
