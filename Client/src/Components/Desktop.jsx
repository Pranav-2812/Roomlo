import React from "react";
import "../Styles/Deskstop.css";
import InfoCard from "./InfoCard";


const Desktop = () => {
 
  return (
    <>
    
      <div className="container">
        <div className="row my-4 justify-content-center align-items-center" id="filter_search">
          <div className="col-12 col-md-8 mb-2">
            <input
              type="search"
              className="form-control form-control-lg shadow bg-white rounded-pill"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              id="searchbar"
            />
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end" id="mainFil">
            <button
              type="button"
              className="btn btn-outline-secondary btn-md mx-2 shadow bg-white rounded-pill"
              id="filter"
            >
              <i className="fa-solid fa-arrow-down-wide-short mx-2"></i>Filter
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-md mx-2 shadow bg-white rounded-pill"
              id="filter"
            >
              <i className="fa-solid fa-arrow-down-wide-short mx-2"></i>Rent
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-md mx-2 shadow bg-white rounded-pill"
              id="filter"
            >
              <i className="fa-solid fa-arrow-down-wide-short mx-2"></i>Rent
            </button>
          </div>
        </div>
      </div>






      <div className="container-fluid p-4 ">
        <div className="desktop-main">
           <div className="desktop-first">
                <h3><span className="badge bg-secondary text-light">Total Rooms</span></h3>
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>

            </div>
            <div className="map">
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1672242259543!5m2!1spl!2spl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Desktop;
