import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
   return (
    <>
      <div className=" bg-cover bg-center bg-no-repeat  object-contain z-4    -translate-y-18
    max-[1350px]:mt-[-5.5%]
    max-[1250px]:mt-[-6%]
    max-[1125px]:mt-[-6.5%]
    max-[1050px]:mt-[-7%]
    max-[950px]:mt-[-8%]
    max-[850px]:mt-[-9%]
    max-[750px]:mt-[-10.5%]
    max-[650px]:mt-[-11.5%]
    max-[576px]:mt-[-14%]
    max-[450px]:mt-[-20%]
    max-[330px]:mt-[-25%] overflow-hidden h-screen w-full fixed
    -mt-[5%] "
        style={{ backgroundImage: "url('/image_buuilding.jpg')", 
          backgroundSize:'cover'
        }}
        
      >
        <div className="h-full backdrop-blur-[3px]">
          <nav className="w-full bg-transparent py-1">
            <div className="px-4 py-2 flex justify-between items-center p-2 m-4">
              <h2 className="flex items-center  max-[768px]:text-[1rem]  max-[576px]:text-[1.5rem] px-4 fs-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-filter"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "30px" }}
                >
                  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                </svg>
                <span className="max-[576px]:hidden">
                  <img
                    src={logo}
                    alt="logo"
                    width="50"
                    height="50"
                    className="inline-block align-text-top pl-3  max-[768px]:w-[35px] max-[768px]:h-[35px] max-[576px]:w-[30px] max-[576px]:h-[30px]"
                  />
                  &ensp;RoomLo
                </span>
              </h2>
              <h3 className=" max-[768px]:text-sm max-[576px]:text-sm max-[576px]:px-3 max-[576px]:py-[0.4rem] px-4 py-2 bg-black fs-5 rounded-full  flex align-items-center justify-content-center">
                <Link
                  className="text-decoration-none !text-white px-2"
                  to={"/login"}
                >
                  Login
                </Link>
              </h3>
            </div>
          </nav>

          {/* Center section */}
          <div className=" max-[450px]:h-100vh"
          >
            <div className="max-[768px]:w-[90%] max-[768px]:max-w-[90%]">
              <h1 className="text-center !text-white  fw-bold text-6xl max-[768px]:text-[2.5rem]  max-[576px]:text-[2rem]"   id="Title">
                Get Rooms
              </h1>
              <h1 className="text-center text-light fw-bold" id="Title">
                Anywhere In India.
              </h1>

              <div className="max-[768px]:w-[90%] flex flex-col justify-center items-center ">
                <div className="flex flex-col items-center w-[30%] rounded-[14%] bg-black max-[1125px]:w-1/2 max-[1125px]:p-0  max-[1050px]:p-0 max-[1050px]:w-[40%] max-[850px]:w-1/2 max-[850px]:p-0   max-[750px]:p-0 max-[750px]:w-[60%]
               max-[330px]:w-full max-[330px]:p-0 max-[650px]:w-full max-[650px]:p-0 max-[450px]:mt-[5%] max-[450px]:mb-[5%] max-[450px]:w-full max-[576px]:mt-[10%] max-[576px]:w-[90%] max-[576px]:p-0 max-[768px]:p-0 max-[768px]:w-[60%] " >
                  <h3 className="text-white text-center pt-3 pb-1 fs-3">
                    Who Are You?
                  </h3>

                  {/* Owner button */}
                  <div className="pb-4 px-5 w-full">
                    <div className="p-2 py-2 border !bg-gray-100 text-center rounded-full">
                      <Link className="link" to="/ownerlogin">
                        <h4 className="text-center  !text-black fw-bold">Owner</h4>
                        <h5 className="text-center px-4 m-2 italic fw-lighter  !text-black">
                          (Rent Room)
                        </h5>
                      </Link>
                    </div>
                  </div>

                  {/* Tenants button */}
                  <div className=" pb-4 px-5 w-full">
                    <div className="p-2 border  !bg-gray-100 text-center rounded-full">
                      <Link className="link" to="/user">
                        <h4 className="text-center !text-black fw-bold">
                          Tenants
                        </h4>
                        <h5 className="text-center px-4 m-2 italic fw-lighter  !text-black">
                          (Want Room)
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Stats */}
            <div className="bottom-0 right-0 mb-5 mr-5 text-white absolute   max-[450px]:relative 
    max-[450px]:mt-[10%]">
              <div className="flex flex-col text-center">
                <div className="flex flex-row gap-x-20">
                  <div className="	flex-1">
                    <h4>
                      400+ <br /> Owner/Rooms
                    </h4>
                  </div>
                  <div className="	flex-1">
                    <h4>
                      1000+ <br /> Tenants/Want Room
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>



  );
}; 



export default Home;
