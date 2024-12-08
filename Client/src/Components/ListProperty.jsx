import React from "react";
import { Link } from "react-router-dom";
import { db } from "../context/firebase";
import {  doc, getDoc, addDoc, collection } from "firebase/firestore"; 
export const ListProperty = () => {
  const get = async () => {
  const docRef = doc(db, "Properties", "Properties");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
  }
  get();
  const writeData = async () => {
    
    const result = await addDoc(collection(db, 'Properties',"29FF7MdKa36iGQzGUdQI", "UserProperties"), {
    
   address: "",
   city: "",
   locality: "",
   landmark: "",
   floor: "",
   createdAt:  "",
   updatedAt:  "",
   housetype:  "",
   roomtype:  "",
   availablefor:  "",
   deposit:  "",
   maintenance:  "",
   electricbill:  "",
   parking:  "",
   nonveg:  "",
   balcony:  "",
   bathroom: "",
   toilet: "",
     wifi:"",
     amenities: ""
    })
    console.log("result", result)
    
  }
  return (
    <div className="container text-center m-4 p-4">
      <button onClick={writeData}>test</button>
      <h2>List Property</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="text-start">1. Address:</h5>
          <p className="card-text">
            Plot no.9 Manav Nagar, Babupeth, behind Bengali mandir, Chandrapur.
          </p>
          <div className="d-flex justify-content-center align-item-center m-1">
          <a href="#" className="">
            {" "}
            <span className="badge rounded-pill shadow text-dark m-2 p-2 px-3">2 Rooms</span>
          </a>
          <a href="#" className="">
            {" "}
            <span className="badge rounded-pill shadow text-dark m-2 p-2 px-3">5 Rooms</span>
          </a>
          <Link to="/addroom" className="">
            {" "}
            <span className="badge rounded-pill text-bg-danger shadow p-2 px-3 m-2">Add Rooms</span>
          </Link>
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid grey" }} />

      <div className="card-body">
        <h5 className="text-start">
          2. <Link to="/addroom">
          <span className="btn btn-primary">Add New Address</span></Link>
        </h5>
      </div>
    </div>
  );
};
