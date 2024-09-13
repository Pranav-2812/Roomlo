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
              <img src={Room} className="h-75 w-100 rounded-3" alt="..." />
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
            <span className="d-flex flex-row align-items-center" style={{ color: "grey" }}>
              <i className="fa-solid fa-location-dot me-2 pb-2"></i>
              <h4>900m</h4>
            </span>
            <p>Available from :21 March 2024</p>
            <p><a href="#" className="link-underline-secondary">Name: Giradkar</a></p>
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
      <div className="col container">
        <div className="link-container">
          <a className="details-links" href="#about">About</a>
          <a className="details-links" href="#address">Address</a>
          <a className="details-links">Contact</a>
          <a className="details-links">Similar Propeties</a>
        </div>
        <div className="my-4" id="about">
          <h2>About</h2>
            <div className="w-75 bg-info bg-opacity-25 rounded-5 my-4">
              <div className="d-flex flex-row w-100 px-4 py-2">
                <div className="d-flex flex-row mx-2 my-2 w-50 align-items-center  even">
                  <h4 className="w-50">Area:</h4>
                  &ensp;&ensp;
                  <p className="w-50">250sq.ft    (Medium) </p>
                </div>
                <div className="d-flex flex-row mx-2 my-2 w-50 align-items-center  odd">
                <h4 className="w-50">Electric Bill:</h4>
                &ensp;&ensp;
                <p className="w-50">Include </p>
                </div>
              </div>
              <div className="d-flex flex-row w-100 px-4 py-2">
                <div className="d-flex flex-row mx-2 my-2 w-50  align-items-center even">
                  <h4 className="w-50">Wall:</h4>
                  &ensp;&ensp;
                  <p className="w-50">Putting  (White) </p></div>
                <div className="d-flex flex-row mx-2 my-2 w-50 align-items-center  odd">
                <h4 className="w-50">Non Veg:</h4>
                &ensp;&ensp;
                <p className="w-50">Yes allow </p>
                </div>
              </div>
              <div className="d-flex flex-row w-100 px-4 py-2">
                <div className="d-flex flex-row mx-2 my-2 w-50 align-items-center  even">
                  <h4 className="w-50">Floor:</h4>
                  &ensp;&ensp;
                  <p className="w-50">1-3 Floor </p>
                </div>
                <div className="d-flex flex-row mx-2 my-2 w-50  align-items-center odd">
                <h4 className="w-50">Wifi:</h4>
                &ensp;&ensp;
                <p className="w-50">Yes </p>
                </div>
              </div>
              <div className="d-flex flex-row w-100 px-4 py-2">
                <div className="d-flex flex-row mx-2 my-2 w-50  align-items-center even">
                  <h4 className="w-50">Tiles:</h4>
                  &ensp;&ensp;
                  <p className="w-50">Yes </p>
                </div>
                <div className="d-flex flex-row mx-2 my-2 w-50 align-items-center  odd">
                <h4 className="w-50">Aminities:</h4>
                &ensp;&ensp;
                <p className="w-50">Bed,Fan,Almari, Light</p>
                </div>
              </div>
              <div className="d-flex flex-row w-100 px-4 py-2">
                <div className="d-flex flex-row mx-2 my-2 w-50 align-items-center even ">
                  <h4 className="w-50">Parking:</h4>
                  &ensp;&ensp;
                  <p className="w-50">2 wheller,4 wheeler </p>
                </div>
                <div className="d-flex flex-row mx-2 my-2 w-50 align-items-center  odd"></div>
              </div>
              <div className="d-flex flex-row w-100 px-4 py-2">
                <div className="d-flex flex-row mx-2 my-2 w-50 align-items-center  even">
                  <h4 className="w-50">Bathroom:</h4>
                  &ensp;&ensp;
                  <p className="w-50">2</p>
                </div>
                <div className="d-flex flex-row mx-2 my-2 w-50  align-items-center odd"></div>
              </div>
              <div className="d-flex flex-row w-100 px-4 py-2">
                <div className="d-flex flex-row mx-2 my-2 w-50  align-items-center even">
                  <h4 className="w-50">Toilet:</h4>
                  &ensp;&ensp;
                  <p className="w-50">2 </p>
                </div>
                <div className="d-flex flex-row mx-2 my-2 w-50  align-items-center odd"></div>
              </div>
            </div>
            <h3 className="link link-danger" style={{cursor:"pointer"}}>View more details -&gt;</h3>
        </div>
        <hr className="active" style={{border:"10px solid grey"}}></hr>
        <div className="my-4" id="address"></div>
      </div> 
    </div>
  );
};
export default Details;