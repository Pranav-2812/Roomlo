import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../Styles/userhome.css";

function Userhome() {
  return (
    <>
      <div className="home">
        <div className="bg-image">
          <nav className="navbar navbar-light  bg-transparent py-1">
            <div className="container-fluid p-2 m-4  ">
            <Link to="/" className="text-decoration-none">
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
              </Link>
              <div className="d-flex flex-col ">
                <h5
                  className="d-flex align-items-center justify-content-center"
                  id="tenant"
                >
                  <Link className=" text-dark px-4" id="tenant" to={"/login"}>
                    Tenant
                  </Link>
                </h5>
                <h3 className=" fs-5 d-flex align-items-center justify-content-center ">
                  <Link
                    className="text-decoration-none text-light "
                    id="login"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </h3>
              </div>
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

              <div className="container d-flex flex-column justify-content-center align-items-center py-5">
                <div
                  className="row flex-column align-items-center py-2"
                  id="box1"
                >
                  <div class="mb-3 px-5">
                    <label
                      for="formGroupExampleInput"
                      class="form-label fs-4 fw-semibold text-light"
                    >
                      Select Your College
                    </label>
                    <div class="input-group">
                      <input
                        type="search"
                        class="form-control fs-5 p-2 text-dark"
                        placeholder="Select Your College"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        id="searchbtn"
                      />
                      <button
                        type="button"
                        class="btn bg-primary fs-5 text-light"
                        data-mdb-ripple-init
                        id="search"
                      >
                        Search
                      </button>
                    </div>
                    <div className="pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-md mx-1 shadow bg-white text-dark rounded-pill"
                        id="filter"
                      >
                        <i className="fa-solid fa-arrow-down-wide-short mx-2 text-dark"></i>
                        Filter
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-md mx-2 shadow bg-white text-dark rounded-pill"
                        id="filter"
                      >
                        <i className="fa-solid fa-arrow-down-wide-short text-dark mx-2"></i>
                        Sort
                      </button>
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
}

export default Userhome;
