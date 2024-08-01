import React from "react";
import Room from "../assets/room.png";
import "../Styles/Details.css";
import Profile from "../assets/profile.png";
const Details = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4 justify-content-center" id="filter_search">
          <div className="col-12 col-md-8 mb-2">
            <input
              type="search"
              className="form-control form-control-lg shadow bg-white rounded-pill"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              id="searchbar"
            />
          </div>
          <div
            className="col-12 col-md-4 d-flex justify-content-center"
            id="mainFil"
          >
            <button
              type="button"
              className="btn btn-outline-secondary btn-md mx-2 shadow bg-white rounded-pill"
              id="filter"
            >
              <i className="fa-solid fa-arrow-down-wide-short mx-2"></i>Filter
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-md mx-2 shadow bg-white rounded-pill"
              id="filter"
            >
              <i className="fa-solid fa-arrow-down-wide-short mx-2"></i>Rent
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-md mx-2 shadow bg-white rounded-pill"
              id="filter"
            >
              <i className="fa-solid fa-arrow-down-wide-short mx-2"></i>Rent
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Left Column for Desktop Component */}
          <div className="col-12 col-lg-9">
            <div className="container">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="img-fluid h-75 w-100"
                      src={Room}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="img-fluid h-75 w-100"
                      src={Room}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="img-fluid h-75 w-100"
                      src={Room}
                      alt="Third slide"
                    />
                  </div>
                </div>
              </div>
              <hr className="active" />
              <img src={Room} className="img-thumbnail h-25 w-25" alt="..." />
              <img src={Room} className="img-thumbnail h-25 w-25" alt="..." />
            </div>
          </div>

          {/* Right Column for Card Component */}
          {/* Right Column for Card Component */}
          <div className="col-12 col-lg-3 col">
            <div className="card" style={{ width: "25rem", height: "25rem" }}>
              <div className="card-body">
                <ul>
                  <li>
                    {" "}
                    <h5 className="card-text fs-5 py-1">
                      {" "}
                      Get 10% instant Cashback on your 1st rent.
                    </h5>
                  </li>
                  <li>
                    {" "}
                    <h5 className="card-text fs-5 py-1">
                      {" "}
                      Last Month FREE RENT (Deposit).
                    </h5>
                  </li>
                  <li>
                    {" "}
                    <h5 className="card-text fs-5 py-1">
                      {" "}
                      Know EVERY room in EVERY area.
                    </h5>
                  </li>
                  <li>
                    {" "}
                    <h5 className="card-text fs-5 py-1">
                      {" "}
                      Get Brokerage FREE room.
                    </h5>
                  </li>
                  <li>
                    {" "}
                    <h5 className="card-text fs-5 py-1">
                      {" "}
                      Get All room of India in only one app.
                    </h5>
                  </li>

                  <h5 className="card-text fs-5">
                    {" "}
                    Get All room of India in only one app.
                  </h5>
                </ul>
                <a href="#" className="card-link fs-5" id="linkc">
                  1000+ tenants/buyers
                </a>
                <a href="#" className="card-link fs-5" id="linkc">
                  400+ Owner/Sellers
                </a>
              </div>
              <button type="button" className="btn btn-danger btn-lg">
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="" style={{ width: "18rem" }}>
          <div className="card-body">
            <div className="mb-4">
              <button type="button" className="btn btn-outline-secondary mx-4 fs-5">Photos</button>

              <button type="button" className="btn btn-outline-secondary fs-5">Videos</button>

            </div>
            <h1 className="card-title">Rs. 1200/month</h1>
            <div className="card-text"><h4>Double Sharing </h4></div>
            <div><h4>Available from : 21 March 2024</h4></div>
            <div><h4>Name: Giradkar</h4></div>
            <div id="icon">
              <i className="fa-solid fa-location-dot fa-beat fa-xl" style={{ color: "#000000" }}></i>
              <i className="fa-regular fa-heart fa-beat fa-xl mx-3"></i>
              <i className="fa-solid fa-share fa-beat fa-xl" style={{ color: "#050505" }}></i>
            </div>

          </div>
          <div className="mt-4">
            <i className="fa-solid fa-phone fa-2xl" style={{ color: "#ffffff" }}></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;