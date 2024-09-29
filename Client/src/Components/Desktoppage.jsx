import React from "react";
import logo from "../assets/Logo.png";
const Desktoppage = () => {
  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url("https://www.pixelstalk.net/wp-content/uploads/2016/10/Free-hd-building-wallpaper.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "911px",
        }}
      >
        <nav className="navbar navbar-light bg-transparent">
          {" "}
          {/* Set bg-transparent for transparency */}
          <div className="container-fluid p-2 m-3">
            <a className="navbar-brand px-4 fs-1" href="">
              <img
                src={logo}
                alt=""
                width="50"
                height="50"
                className="d-inline-block align-text-top"
              />
              RoomLo
            </a>
            <h3 className="btn btn-dark rounded-pill fs-5">Login</h3>
          </div>
        </nav>
        <div className="container position-absolute top-50 start-50 translate-middle">
          <h1 className="text-center fs-1">
          Get Rooms
          Anywhere In India.
          </h1>
        
        </div>
      </div>
    </>
  );
};

export default Desktoppage;
