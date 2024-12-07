// src/components/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../context/firebase";


const OwnerSignup = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential)
      const owner = userCredential.user;
      console.log(owner)
      // Save additional user information in Firestore using user.uid
      await setDoc(doc(db, "Owners", owner.uid), {  // Use owner.uid for better data management
        name: "",
        mobilenumber:phone,
        email: email,
        fullName: "",  // You can add more fields as needed
        password:password
      });

      console.log("Document written with ID: ", owner.uid);
      navigate("/ownerlogin");
    } catch (error) {
      console.error("Error signing up or adding document: ", error.message);
    }
  };

  return (
    <div>
      <section className="gradient-custom">
        <div className="container my-4 my-md-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-3 text-center">
                  <form onSubmit={onSubmit}>
                    <div className="mb-4">
                      <h2 className="fw-bold mb-4 text-uppercase">Signup</h2>
                      <div className="form-outline form-white mb-3">
                        <label className="form-label text-start w-100 ps-2" htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          autoComplete="on"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline form-white mb-3">
                        <label className="form-label text-start w-100 ps-2" htmlFor="number">Mobile Number</label>
                        <input
                          type="text"
                          id="number"
                          className="form-control form-control-lg"
                          autoComplete="on"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-outline form-white mb-3">
                        <label className="form-label text-start w-100 ps-2" htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          autoComplete="on"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button 
                        className="btn btn-outline-light btn-lg px-4 py-2 w-50" 
                        type="submit"
                        id="#signupbtn"
                      >
                        Signup
                      </button>
                    </div>
                  </form>
                  <div className="mt-2 pb-5 " id="signbtn">
                    <h5 className="fs-5">If already created account? <Link to="/ownerlogin" className="text-white-50 fw-bold"> Login</Link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OwnerSignup;
