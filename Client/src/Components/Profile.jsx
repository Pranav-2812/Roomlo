import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { db, storage } from "../context/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import pro from "../assets/profile.png";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.uid);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const fetchUserData = async (uid) => {
    try {
      const userDoc = doc(db, "Users", uid);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
        setEditData(data);
        setImageUrl(data.profileImage || "");
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error.message);
    } finally {
      setLoading(false);
    }
  };

 
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    if (!image) return;

    const storageRef = ref(storage, `profilePictures/${auth.currentUser.uid}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    setUploading(true);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading image: ", error.message);
        setUploading(false);
        setError("Failed to upload image.");
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageUrl(downloadURL);
          setEditData({ ...editData, profileImage: downloadURL });
        } catch (error) {
          console.error("Error getting download URL: ", error.message);
          setError("Failed to get image URL.");
        } finally {
          setUploading(false);
        }
      }
    );
  };

  const saveProfileData = async () => {
    if (!editData.fullName || !editData.email || !editData.phone) {
      setError("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const userDoc = doc(db, "Users", auth.currentUser.uid);
      await updateDoc(userDoc, editData);
      setUserData(editData);
      setImageUrl(editData.profileImage || "");
    } catch (error) {
      console.error("Error updating document: ", error.message);
      setError("Failed to save changes.");
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    await saveProfileData();
    setIsEditing(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container mt-5 p-3 rounded"
      style={{
        backgroundColor: "#EFFAF9",
        width: "100%",
        maxWidth: "65%",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-center w-100">Profile</h2>
        <button className="btn btn-dark rounded-pill" onClick={toggleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="card-body text-center position-relative">
        <div style={{ position: "relative", display: "inline-block" }}>
          <img
            src={imageUrl || pro}
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: "150px" }}
          />
          {isEditing && (
            <>
              <input
                type="file"
                className="form-control"
                style={{ display: "none" }}
                id="profileImageUpload"
                onChange={handleImageChange}
              />
              <label
                htmlFor="profileImageUpload"
                className="btn btn-sm btn-light position-absolute"
                style={{ bottom: "10px", right: "-10px", borderRadius: "20%" }}
              >
                📷
              </label>
            </>
          )}
        </div>

        {isEditing && (
          <div className="mt-2">
            <button
              className="btn btn-info btn-sm"
              onClick={handleImageUpload}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
          </div>
        )}
        <h5 className="my-4">
          <input
            type="text"
            name="name"
            disabled={!isEditing}
            style={{
              border: "none",
              background: isEditing ? "#f0f0f0" : "transparent",
            }}
            value={editData.name || ""}
            onChange={handleInputChange}
          />
        </h5>
      </div>

      <div className="card-body mt-3">
        <div className="row">
          <div className="col-sm-3 fs-5">
            <p className="mb-0">Full Name</p>
          </div>
          <div className="fs-5">
            <input
              type="text"
              name="fullName"
              disabled={!isEditing}
              style={{
                border: "none",
                background: isEditing ? "#f0f0f0" : "transparent",
              }}
              value={editData.fullName || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-6 fs-5">
            <p className="mb-0">Phone</p>
            <input
              type="text"
              name="phone"
              disabled={!isEditing}
              style={{
                border: "none",
                background: isEditing ? "#f0f0f0" : "transparent",
              }}
              value={editData.phone || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-6 fs-5">
            <p className="mb-0">WhatsApp</p>
            <input
              type="text"
              name="whatsapp"
              disabled={!isEditing}
              style={{
                border: "none",
                background: isEditing ? "#f0f0f0" : "transparent",
              }}
              value={editData.whatsapp || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3 fs-5">
            <p className="mb-0 ">Email</p>
          </div>
          <div className="fs-5">
            <input
              type="text"
              name="email"
              disabled={!isEditing}
              style={{
                border: "none",
                background: isEditing ? "#f0f0f0" : "transparent",
              }}
              
              value={editData.email || ""}
              onChange={handleInputChange}
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

      {isEditing && (
        <div className="text-center mt-4">
          <button className="btn btn-success" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      )}

     
    </div>
  );
};

export default Profile;  