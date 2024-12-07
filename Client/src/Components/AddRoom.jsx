import React, { useState } from "react";
import "../Styles/AddRoom.css";
import { db } from "../context/firebase";
import {  doc, getDoc, addDoc, collection } from "firebase/firestore"; 


const AddRoom = () => {
  const getDocument = async () => {
    try {
      // Use 'db' instead of 'Firestore' as the Firestore instance
      const ref = doc(db, "Properties", "37vuqsJufmSScypLQPUpBFBxYz32", "UserProperties", "Ramji Nivas");
      const snap = await getDoc(ref);

      if (snap.exists()) {
        console.log("Document data:", snap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error.message);
    }

  };

  const writeData = async () => {
    const result = await addDoc(collection(db, 'cities'), {
      name: "ngp",
      pinCode: 1234
    })
    console.log("result", result)
  }


  const writeData1 = async () => {
    const result = await addDoc(collection(db, 'Properties', ), {
      name: "ngp",
      pinCode: 1234
    })
    console.log("result", result)
  }
  return (
    <>
    <button onClick={writeData}>test</button>
      <h2 className="text-center m-4">Add Room</h2>
      <div className="container shadow">
        <div class="d-flex flex-nowrap justify-content-center pt-3">
          <div class="order-3 p-1">
            <h4 className="text-center px-5">Images</h4>
          </div>
          <div class="order-2 p-1">
            <h4 className="text-center px-5">Details</h4>
          </div>
          <div class="order-1 p-1">
            <h4 className="text-center px-5">Address</h4>
          </div>
        </div>
        <hr />
        <div className="container mx-5">
          <div class="form-group">
            <input
              type="email"
              class="form-control w-50 m-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="City "
              
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control w-50 m-2"
              id="exampleInputPassword1"
              placeholder="Locality"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control w-50 m-2"
              id="exampleInputPassword1"
              placeholder="Landmark / Street"
            />
          </div>
          <hr />
        </div>
        <div className="text-center">
          <h3>
            {" "}
            <i className="fa-solid fa-location-dot"></i> Mark your Property on
            Map
          </h3>
          <h7 className="text-center">
            Set property location by using search box and move the map
          </h7>
          <form class="d-flex justify-content-center align-items-center m-3">
            <input
              class="form-control rounded w-50 p-3"
              type="search"
              placeholder=" Search"
              aria-label="Search"
            />
          </form>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1672242259543!5m2!1spl!2spl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <button className="m-3 btn btn-primary rounded" onClick={getDocument}>Save & Continue</button>
        </div>
        <hr />
        <div className="p-5">
          <h6>
            House Type : <button className="m-3 rounded p-1">Independent House</button>{" "}
            <button className="m-3 rounded p-1">Apartment / Flat </button>
          </h6>
          <h6>
            Room Type: <button className="m-3 rounded p-1">Bachelor</button> <button className="
            m-3 rounded p-1">Family</button>
            <button className="
            m-3 rounded  p-1">Single Room</button> <button className="
             rounded p-1 mx-2">Double Sharing</button>
            <button className="
             rounded p-1 ">Tripple Sharing</button>
            <button className="
            m-3 rounded p-1">1 BHK</button>
          </h6>
          <h6>
            For<button className="m-3 rounded p-1">Both</button> <button>Only For Girls</button>{" "}
            <button className="
            m-3 rounded p-1">Only For Boys</button>
          </h6>
          <h6>
            Restrictions<button className="m-3 rounded p-1">Couple Friendly</button>{" "}
            <button className="
            m-3 rounded p-1">Girls not allowed</button> <button className="
            m-3 rounded p-1">Girls allowed</button>
          </h6>
          <hr />
          <h6>
            Tiles:<button className="m-3 rounded p-1">Yes</button> <button className="
            m-3 rounded p-1">No</button>
          </h6>
          <h6>
            Wall:<button className="m-3 rounded p-1">Putting</button> <button className="
            m-3 rounded p-1">Only Paint</button>
          </h6>
          <h6>
            Wall Paint: <input type="text" name="" id="" className="m-3 rounded p-1"/>
          </h6>
          <h6>
            Floor:<button className="
            m-3 rounded p-1">Ground</button> <input type="text" className="m-3 rounded p-1"/>
          </h6>
          <h6>
            Area: <input type="sq.ft" name="" id="" className="m-3 rounded p-1"/>
          </h6>

          <hr />

          <h6>
            Price: <input type="Rs." name="" id="" className="m-3 rounded"/>{" "}
            <input type="checkbox" name="" id="" className=" rounded"/>
            <h6>Rent Negotiable</h6>
            <input type="checkbox" name="" id="" /> <h6>Fix Rate</h6>
          </h6>
          <h6>
            Deposit:<button className="m-3 rounded p-1">1 Month rent </button>{" "}
            <button className="mx-3 rounded p-1">2 Month rent </button> <button className="mx-3 rounded p-1">Custom</button>
          </h6>
          <h6>
            Maintenance:<button className="m-3 rounded p-1">Include</button> <button className="
            m-3 rounded p-1">Custom</button>
          </h6>
          <hr />
          <h6>
          Electric Bill:<button className="m-3 rounded p-1">Include</button> <button className="
            m-3 rounded p-1">Seperate</button>
          </h6>
          <h6>
          Parking:<button className="m-3 rounded p-1">Bike</button> <button className="
            m-3 rounded p-1">Car</button> <button className="
            m-3 rounded p-1">Both</button>
          </h6>
          <h6>
          Non Veg:<button className="m-3 rounded p-1">Yes</button> <button className="
            m-3 rounded p-1">No</button>
          </h6>
          <h6>
          Bathroom: <input type="text" className="m-3 rounded p-1" />
          </h6>
          <h6>
          Toilet: <input type="text" className="m-3 rounded p-1"/>
          </h6>
          <h6>
          Balcony: <input type="text" className="m-3 rounded p-1"/>
          </h6>
          <h6>
          Wifi:<button className="m-3 rounded p-1">Yes</button> <button className="
            m-3 rounded p-1">No</button>
          </h6> 
          <hr />
          <h6>
          Amenities<button className="m-3 rounded p-1">Bed</button> <button className="
            m-3 rounded p-1">Fan</button> <button className="
            m-3 rounded p-1">Almahri</button> <button className="
            m-3 rounded p-1">Study Table</button> <button className="
            m-3 rounded p-1">Custom</button>
          </h6> 
          <hr />
          <h6>
          Advance booking<button className="m-3 rounded p-1">Allowed</button> <button className="
            m-3 rounded p-1">Not Allowed</button>
          </h6> 
          <div className="d-flex justify-content-center align-item-center">
          <button className="m-3 rounded p-2 btn btn-success"> Back </button>   <button className="m-3 rounded p-2 btn btn-primary">Save  & Continue</button>
          </div>

        </div>
        <hr className="m-5"/>


        <div>
          <h5>Photos:</h5>
          <h6>1 Outside, 4 inside room</h6>
          <hr className="m-5"/>
          <h5>Video:</h5>
          <div className="d-flex justify-content-center align-item-center">
          <button className="m-3 rounded p-2 btn btn-success"> Back </button>   <button className="m-3 rounded p-2 btn btn-primary">Save  & Continue</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default AddRoom;
