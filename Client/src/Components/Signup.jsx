import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "../context/firebase";
import { auth } from "../context/firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <div>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">
                    <form>
                      <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                        <p className="text-white-50 mb-5">
                          Please Create your Account!
                        </p>

                        <div
                          data-mdb-input-init
                          className="form-outline form-white mb-4"
                        >
                          <label className="form-label d-flex justify-left" htmlFor="mobnumber">
                            Mobile number
                          </label>
                          <input
                            type="mobilenumber"
                            id="mobilenumber"
                            className="form-control form-control-lg"
                            autoComplete="on"
                          />
                        </div>
                        <div
                          data-mdb-input-init
                          className="form-outline form-white mb-4"
                        >
                          <label className="form-label d-flex justify-left" htmlFor="email"
                          autoComplete="on">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            autoComplete="on"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div
                          data-mdb-input-init
                          className="form-outline form-white mb-4 "
                        >
                          <label className="form-label d-flex justify-left" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            autoComplete="on"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-outline-light btn-lg px-5"
                          id="Loginbtn"
                          type="submit"
                          onClick={onSubmit}
                        >
                          Signup
                        </button>
                      </div>
                    </form>

                    <div className="my-3">
                      <Link to="/login" className="text-white-50 fw-bold ">
                         Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
