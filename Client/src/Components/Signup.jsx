// src/components/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../context/firebase";

const Signup = () => {
  
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user information in Firestore
      await setDoc(doc(db, "Users", user.uid), {
        name: "",
        phone: phone,
        email: email,
        fullName: "",  // You can add more fields as needed
        address: "",
        // Add any other fields you need
      });

      console.log("Document written with ID: ", user.uid);
      navigate("/login");
    } catch (error) {
      console.error("Error signing up or adding document: ", error.message);
    }
  };

  return (
    <div>
      <section className=" gradient-custom p-4">
        <div className="container py-2 h-75">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <form onSubmit={onSubmit}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                      <h5 className="text-white-50 mb-5">Please Create your Account!</h5>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label d-flex justify-left" htmlFor="number">Mobile Number</label>
                        <input
                          type="text"
                          id="number"
                          className="form-control form-control-lg"
                          autoComplete="on"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label d-flex justify-left" htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          autoComplete="on"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label d-flex justify-left" htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          autoComplete="on"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button className="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>
                    </div>
                  </form>
                  <div className="my-3">
                    <h5>If already created account?  <Link to="/login" className="text-white-50 fw-bold"> Login</Link></h5>
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

export default Signup;
