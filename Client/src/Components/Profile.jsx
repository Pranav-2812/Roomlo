import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import { db } from "../context/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import pro from "../assets/profile.png";

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
        setUserData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error.message);
    }
  };

  return (
    <div
      className="container mt-5 p-3 rounded"
      style={{
        backgroundColor: "#EFFAF9",
        width: "100%"          // Set default width to 100% for mobile
                // Restrict max-width to 45% on larger screens
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-center w-100">Profile</h2>
        <button className="btn btn-dark rounded-pill">Edit</button> {/* Edit button */}
      </div>
      <div className="card-body text-center position-relative">
        {/* Profile Image with Edit Icon */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={pro}
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: "150px" }}git branch

          />
          {/* Edit icon/button overlay on the image */}
          <button
            className="btn btn-sm btn-light position-absolute"
            style={{ bottom: "10px", right: "-10px", borderRadius: "20%" }}
          >
            📷
          </button>
        </div>
        <h5 className="my-4">
          <input
            type="text"
            style={{ border: "none", background: "transparent" }}
            placeholder={userData.name || "DEVANSHU KOTHE"}
          />
        </h5>
      </div>

      <div className="card-body mt-3">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Full Name</p>
          </div>
          <div className="">
            <input
              type="text"
              className="fs-5"
              style={{ border: "none", background: "transparent" }}
              placeholder={userData.name || "Enter full name"}
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-9 d-flex justify-content-between">
            <div className="col-sm-6">
              <p className="mb-0">Phone</p>
            </div>
            <div className="col-sm-6 text-end">
              <p className="mb-0">WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 d-flex justify-content-between">
          <input
            type="text"
            className="fs-5"
            style={{ border: "none", background: "transparent" }}
            placeholder={userData.phone || "Enter phone number"}
          />
          <input
            type="text"
            className="fs-5"
            style={{ border: "none", background: "transparent" }}
            placeholder={userData.whatsapp || "Enter WhatsApp number"}
          />
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Email</p>
          </div>
          <div className="">
            <input
              type="text"
              className="fs-5"
              style={{ border: "none", background: "transparent" }}
              placeholder={userData.email || "Enter email address"}
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-6 d-flex justify-content-between">
            <div>
              <p className="mb-0">Password</p>
            </div>
            <div>
              <a href="/">Change Password</a>
            </div>
          </div>
        </div>

        <div className="col-sm-9">
          <input
            type="password"
            style={{ border: "none", background: "transparent" }}
            placeholder="••••••••"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
