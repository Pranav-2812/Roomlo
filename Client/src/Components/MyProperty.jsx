import React from "react";
import InfoCard from "./InfoCard";
import { Link } from "react-router-dom";

const MyProperty = () => {
  return (
    <div className="container text-center m-4 p-4">
      <h2 className="p-4">My Property</h2>
      <div class="card">
        <div class="card-body">
          <h5 className="text-start">Address:</h5>
          <p class="card-text">
            Plot no.9 Manav Nagar, Babupeth, behind Bengali mandir, Chandrapur.
          </p>
          <div className="d-flex justify-content-center align-item-center m-1">
          <a href="#" class="">
            {" "}
            <span class="badge rounded-pill shadow text-dark m-2 p-2 px-3">2 Rooms</span>
          </a>
          <a href="#" class="">
            {" "}
            <span class="badge rounded-pill shadow text-dark m-2 p-2 px-3">5 Rooms</span>
          </a>
          <Link to="/addroom" class="">
            {" "}
            <span class="badge rounded-pill text-bg-danger shadow p-2 px-3 m-2">Add Rooms</span>
          </Link>
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid grey" }} />

      <div className="room-cards">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default MyProperty;
