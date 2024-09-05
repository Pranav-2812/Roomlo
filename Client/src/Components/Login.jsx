import React, {useState} from 'react';
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "../context/firebase";
import { auth } from "../context/firebase";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem("token", user.accessToken); 
          navigate("/desktop")
          console.log(user);
          
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
     
  }
  return (
    <div>
      <section className=" gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" >
                <div className="card-body p-5 text-center">

                  <form>
                    <div className="mb-md-5 mt-md-4 pb-5">

                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <h5 className="text-white-50 mb-5 ">Please enter your login and password!</h5>

                      <div data-mdb-input-init className="form-outline form-white mb-4">
                      <label className="form-label d-flex justify-left" htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control form-control-lg" autoComplete='on' onChange={(e)=>setEmail(e.target.value)} />
                        
                      </div>

                      <div data-mdb-input-init className="form-outline form-white mb-4">
                      <label className="form-label d-flex justify-left" htmlFor="password">Password</label>
                        <input type="password" id="password" autoComplete='on' className="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)} />
                        
                      </div>

                     

                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" id='Loginbtn' type="submit"  onClick={onLogin}   > Login</button>


                    </div>
                  </form>

                  <div className=' py-3'>
                    <h5 className="mb-0 ">Don't have an account?  <Link to="/signup" className="text-white-50 fw-bold w-50">Sign Up</Link>
                    </h5>
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

export default Login; 
