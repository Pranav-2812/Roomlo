import React from "react";
import Room from "../assets/room.png";
import "../Styles/Details.css";
import phone_icon from "../assets/Phone_icon.png"
const Details = () => {
  return (
    <div className="col">
      <div className="container px-2">
        <div className="col">
          <div className="row mt-5" id="details-img-card">
            <div className="w-75">
              <img src={Room} className="h-75 w-100" alt="..." />
            </div>
            <div className="card w-25" >
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
                <span className="d-flex flex-row">
                  <p href="#" className="card-link fs-5 w-50 ms-2" id="linkc">
                    1000+ tenants/buyers
                  </p>
                  <p className="card-link fs-5 w-50 ms-2 " id="linkc">
                    400+ Owner/Sellers
                  </p>
                </span>
              </div>
              <button type="button" className="btn btn-danger btn-lg rounded-0 ">
                Book
              </button>
            </div>
          </div>
          <div className="row " >
            <img src={Room} className="next-img" alt="..." />
            <img src={Room} className="next-img" alt="..." />
            <img src={Room} className="next-img" alt="..." />
          </div>
        </div>
        <hr />
        <div className="col px-3">
          <span className="badge text-bg-light border border-secondary-subtle me-5" id="badge">Photos</span>
          <span className="badge text-bg-light border border-secondary-subtle  me-5" id="badge">Videos</span>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="w-75">
            <h2>Rs.1200/month</h2>
            <span className="d-flex flex-row align-items-center ">
              <h3>Double Sharing</h3>
              <h4 className="ms-2" style={{ color: "grey", marginBottom: "5px" }}>(Bachlor)</h4>
            </span>
            <span className="d-flex flex-row align-items-center" style={{color:"grey"}}>
              <i className="fa-solid fa-location-dot me-2 pb-2"></i>
              <h4>900m</h4>
            </span>
            <p>Available from :21 March 2024</p>
            <p><a href="#" class="link-underline-secondary">Name: Giradkar</a></p>
          </div>
          <div className="col w-25">
            <div className="d-flex justify-content-end">
              <i className="fa-regular fa-heart me-4"></i>
              <i className="fa-solid fa-share me-4"></i>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <img src={phone_icon} className="phone_icon"></img>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Details;