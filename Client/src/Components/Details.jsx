import React from "react";
import Room from "../assets/room.png";
import "../Styles/Details.css";
import phone_icon from "../assets/Phone_icon.png"
import InfoCard from "./InfoCard";
import Footer from "./Footer";
const Details = () => {
  return (
    <>
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
            <a className="details-links" href="#contacts-properties">Contact</a>
            <a className="details-links" href="#contacts-properties">Similar Propeties</a>
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
            <h3 className="link link-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ cursor: "pointer" }}>View more details -&gt;</h3>

            {/* Modal  starts*/}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">More details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="modal-details">
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Rent</p>
                        <p className="w-50 text-dark">Rs. 1200/month</p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Deposit</p>
                        <p className="w-50 text-dark">andkasdka</p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Address</p>
                        <p className="w-50 text-dark">sdhakjsdasdmlak,asdknaasakjlsdlna,scadih</p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Room Type</p>
                        <p className="w-50 text-dark">sdasjda  kshdk</p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">For</p>
                        <p className="w-50 text-dark">sdkkasdkjaks</p>
                      </div>
                    </div>
                    <hr className="active"></hr>
                    <div className="modal-details">
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Area</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Tiles</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Wall</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Floor</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                    </div>
                    <hr className="active"></hr>
                    <div className="modal-details">
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Electric Bill</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Parking</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Non Veg</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Bathroom</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Toilet</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Balcony</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Power cut</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                    </div>
                    <hr className="active"></hr>
                    <div className="modal-details">
                      <div className="row w-75 py-1">
                        <p className="w-50 text-secondary">Amenities</p>
                        <p className="w-50 text-dark"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal  ends*/}


          </div>
          <hr className="active" style={{ border: "10px solid grey" }}></hr>
          <div className="my-4" id="address">
            <h2>Address</h2>
            <h5 className="text-secondary">Plot no.9 Manav Nagar, Babupeth, behind Bengali mandir, Chandrapur</h5>
            <h5 className="text-secondary">Landmark: Behind Bangali Mandir.</h5>
            <h4 className="text-muted">Nearby from this property (section under development...)</h4>
          </div>
          <hr className="active" style={{ border: "10px solid grey" }}></hr>
          <div className="my-4 row" id="contacts-properties">
            <div className="w-50">
              <div className="card rounded-3" id="property-acivity">
                <div className="card-body">
                  <div className="row align-items-center px-3">
                    <h4 className="w-75">Activity On This Property</h4>
                    <div className="badge bg-danger  property-activity-card">
                      <i className="fa-regular fa-star"></i>
                      <p>Hurry Up!</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between my-4">
                    <div className="d-flex flex-column  align-items-center property-activity-info px-4">
                      <h5>25 views</h5>
                      <i className="fa-regular fa-eye"></i>
                    </div>
                    <div className="d-flex flex-column  align-items-center property-activity-info px-4">
                      <h5>10 Wishlists</h5>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="d-flex flex-column  align-items-center property-activity-info px-4">
                      <h5>3 Contacted</h5>
                      <i className="fa-solid fa-phone"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-50">
              <div className="card rounded-3" id="property-contact">
                <div className="card-body " >
                  <img src={Room}></img>
                  <div className="contact-details">
                    <div className="content">
                      <p>Name</p>
                      <p className="w-75">Prakash Kaka WCL</p>
                    </div>
                    <div className="content">
                      <p>Phone no.</p>
                      <p className="w-75 text-primary">&#9743; 6184131681</p>
                    </div>
                    <div className="content">
                      <p>Address</p>
                      <p className="w-75">Ballu Nagar,Babupeth,behind Bangali mandir, Chandrapur</p>
                    </div>
                  </div>
                  <span className="badge bg-success">Verified &ensp;<i className="fa-regular fa-circle-check"></i></span>

                </div>
              </div>
            </div>
          </div>
          <hr className="active" style={{ border: "10px solid grey" }}></hr>
          <div className="my-4">
            <h2 className="text-secondary">You May Also Like (Under development)</h2>
            <div className="more-properties w-100">

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Details;