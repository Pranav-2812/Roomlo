import React from "react";
import "../Styles/NavDetails.css"; // Import the CSS file

const Nav_details = () => {
  return (
    <>
      <div className="container  p-3">
        <h2 className="text-center my-4 py-2">Details</h2>
        <div className="card w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto card-custom">
          <div className="card-body rounded  p-4" style={{ backgroundColor: "#fffdd0" }}>
            <h4 className="card-title text-center fw-bold text-base sm:text-lg md:text-xl">1000+</h4>
            <h4 className="card-subtitle text-center pb-2 fw-bold text-base sm:text-lg md:text-xl">Tenants/Want Room</h4>

            <ul className="text-sm sm:text-base md:text-lg font-semibold">
              <li>
                <span className="d-flex flex-row align-items-baseline w-100">
                  <p className="fs-6 me-2">20%</p>
                  <span>Rooms</span>
                </span>
              </li>
              <li>Roomlo will take 20% of 1 month rent only.</li>
              <li>Deposit money for Roomlo will be only one month rent.</li>
              <li>Tenants' Deposit (One Month) will be with us. Deposit money will be used in the last month.</li>
              <li>1000+ people who want rooms.</li>
              <li>400+ Owners who have rooms.</li>
              <li>Get everyone to know your room in your area.</li>
              <li>Free marketing and advertisement of your room.</li>
              <li>Get your room fast-listed.</li>
              <li>Fastest room filling ability.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav_details;
