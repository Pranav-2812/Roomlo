import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import { db } from "../context/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      const userDoc = doc(db, "Users", user.uid); // Fetch user data using UID
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        setUserData((prev)=>prev=docSnap.data());
        console.log(userData, docSnap.data())
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error.message);
    }
  };

  return (
    <div className="container w-50 mt-5 p-3" style={{ backgroundColor: "#EFFAF9" }}>
      <h2 className="text-center mb-4">Profile</h2>
      <div className="card-body text-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
          alt="avatar"
          className="rounded-circle img-fluid"
          style={{ width: "150px" }}
        />
        <h5 className="my-4">
          <input type="text" style={{ border: "none", background: "transparent" }} placeholder="DEVANSHU KOTHE" />
        </h5>
      </div>
      <div className="card-body mt-3">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Full Name</p>
          </div>
          <div className="col-sm-9">
            {userData? <h3>{userData.name}</h3>:<input type="text" style={{ border: "none", background: "transparent" }}  />}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Email</p>
          </div>
          <div className="col-sm-9">
          {userData? <h3>{userData.email}</h3>:<input type="text" style={{ border: "none", background: "transparent" }} placeholder={userData.email || "N/A"} />}          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Phone</p>
          </div>
          <div className="col-sm-9">
          {userData? <h3>{userData.phone}</h3>:<input type="text" style={{ border: "none", background: "transparent" }} placeholder={userData.email || "N/A"} />}          </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Address</p>
          </div>
          <div className="col-sm-9">
          {userData? <h3>{userData.address}</h3>:<input type="text" style={{ border: "none", background: "transparent" }} placeholder={userData.address || "N/A"} />}          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Password</p>
          </div>
          <div className="col-sm-9">
            <input type="password" style={{ border: "none", background: "transparent" }} placeholder="••••••••" />
          </div>
        </div>
      </div>
    
  );
};

export default Profile;
