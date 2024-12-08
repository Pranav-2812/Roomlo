import React, { useState } from "react";
import "../Styles/AddRoom.css";
import { db } from "../context/firebase";
import { addDoc, collection } from "firebase/firestore";

const AddRoom = () => {
  const [formData, setFormData] = useState({
    city: "",
    locality: "",
    landmark: "",
    housetype: "",
    roomtype: "",
    availableFor: "",
    Restrictions:"",
    price: "",
    bathroom: "",
    toilet: "",
    wifi: false,
    tiles: "",
    wall: "",
    wallPaint: "",
    floor: "",
    area: "",
    deposit: "",
    maintenance: "",
    electricBill: "",
    parking: "",
    nonVeg: "",
    balcony: "",
    amenities: [],
    advanceBooking: "",
    photos: [],
    video: "",
  });

  const [currentSection, setCurrentSection] = useState("address");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (key, value) => {
    setFormData((prev) => {
      const currentArray = prev[key];
      return {
        ...prev,
        [key]: currentArray.includes(value)
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addDoc(collection(db, "Properties", "UsersProperties"), {
        ...formData,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", result.id);
      alert("Room added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error.message);
      alert("Failed to add room. Please try again.");
    }
  };

  return (
    <>
      <h2 className="text-center m-4">Add Room</h2>
      <div className="container shadow">
        <div className="d-flex flex-nowrap justify-content-center pt-3">
          <button
            className={`order-1 p-1 ${
              currentSection === "address" ? "active" : ""
            }`}
            onClick={() => setCurrentSection("address")}
          >
            <h4 className="text-center px-5">Address</h4>
          </button>
          <button
            className={`order-2 p-1 ${
              currentSection === "details" ? "active" : ""
            }`}
            onClick={() => setCurrentSection("details")}
          >
            <h4 className="text-center px-5">Details</h4>
          </button>
          <button
            className={`order-3 p-1 ${
              currentSection === "images" ? "active" : ""
            }`}
            onClick={() => setCurrentSection("images")}
          >
            <h4 className="text-center px-5">Images</h4>
          </button>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          {currentSection === "address" && (
            <div className="container mx-5">
              <div className="form-group">
                <input
                  type="text"
                  name="city"
                  className="form-control w-50 m-2"
                  placeholder="City"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="locality"
                  className="form-control w-50 m-2"
                  placeholder="Locality"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="landmark"
                  className="form-control w-50 m-2"
                  placeholder="Landmark / Street"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <hr />
              <div>
              <hr />
        </div>
        <div className="text-center">
          <h3>
            {" "}
            <i className="fa-solid fa-location-dot"></i> Mark your Property on
            Map
          </h3>
          <h7 className="text-center">
            Set property location by using search box and move the map
          </h7>
          <form class="d-flex justify-content-center align-items-center m-3">
            <input
              class="form-control rounded w-50 p-3"
              type="search"
              placeholder=" Search"
              aria-label="Search"
            />
          </form>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1672242259543!5m2!1spl!2spl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCurrentSection("details")}
                >
                  Save & Continue
                </button>
              </div>
            </div>
          )}
          {currentSection === "details" && (
            <div className="p-5">
              <h6>
                House Type:
                <button
                  type="button"
                  className="m-3 rounded p-1"
                  onClick={() => setFormData({ ...formData, housetype: "Independent House" })}
                >
                  Independent House
                </button>
                <button
                  type="button"
                  className="m-3 rounded p-1"
                  onClick={() => setFormData({ ...formData, housetype: "Apartment / Flat" })}
                >
                  Apartment / Flat
                </button>
              </h6>
              <h6>
            Room Type: <button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, roomtype: "Bachelor" })}>Bachelor</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, roomtype: "Family" })}>Family</button>
            <button className="
            m-3 rounded  p-1" onClick={() => setFormData({ ...formData, roomtype: "Single Room" })}>Single Room</button> <button className="
             rounded p-1 mx-2" onClick={() => setFormData({ ...formData, roomtype: "Double Sharing" })}>Double Sharing</button>
            <button className="
             rounded p-1 " onClick={() => setFormData({ ...formData, roomtype: "Tripple Sharing" })}>Tripple Sharing</button>
            <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, roomtype: "1 BHK" })}>1 BHK</button>
          </h6>
          <h6>
          availableFor <button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, availableFor: "Both" })}>Both</button> <button onClick={() => setFormData({ ...formData, availableFor: "Only For Girls" })}>Only For Girls</button>{" "}
            <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, availableFor: "Only For Boys" })}>Only For Boys</button>
          </h6>
          <h6>
            Restrictions<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, Restrictions: "Couple Friendly" })}>Couple Friendly</button>{" "}
            <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, Restrictions: "Girls not allowed" })}>Girls not allowed</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, Restrictions: "Girls allowed" })}>Girls allowed</button>
          </h6>
          <hr />
          <h6>
            Tiles:<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, Tiles: "Yes" })}>Yes</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, Tiles: "No" })}>No</button>
          </h6>
          <h6>
            Wall:<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, Wall: "Putting" })}>Putting</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, Wall: "Only Paint" })}>Only Paint</button>
          </h6>
          <h6>
            Wall Paint: <input type="text" name="" id="" className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, wallPaint: Text })}/>
          </h6>
          <h6>
            Floor:<button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData,Floor: "Ground" })}>Ground</button> <input type="text" className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, Floor: Text })}/>
          </h6>
          <h6>
            Area: <input type="sq.ft" name="" id="" className="m-3 rounded p-1" onClick={() => setFormData({ ...formData,  Area:Text })}/>
          </h6>
          <hr />
          <h6>
            Price: <input type="Rs." name="" id="" className="m-3 rounded" onClick={() => setFormData({ ...formData, Price: Text })}/>{" "}
            <input type="checkbox" name="" id="" className=" rounded" onClick={() => setFormData({ ...formData, Price:"Rent Negotiable" })}/>
            <h6>Rent Negotiable</h6>
            <input type="checkbox" name="" id="" onClick={() => setFormData({ ...formData, Price: "Fix Rate" })}/> <h6>Fix Rate</h6>
          </h6>
          <h6>
            Deposit:<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, Deposit:"1 Month rent" })}>1 Month rent </button>{" "}
            <button className="mx-3 rounded p-1" onClick={() => setFormData({ ...formData, Deposit:"2 Month rent" })}>2 Month rent </button> <button className="mx-3 rounded p-1" onClick={() => setFormData({ ...formData, Deposit:"Custom" })}>Custom</button>
          </h6>
          <h6>
            Maintenance:<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, Maintenance:"Include" })}>Include</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, Maintenance:"Custom" })}>Custom</button>
          </h6>
          <hr />
          <h6>
          Electric Bill:<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, electricBill: "Include" })}>Include</button> <button className="
            m-3 rounded p-1"> onClick={() => setFormData({ ...formData, electricBill: "Seperate" })}Seperate</button>
          </h6>
          <h6>
          Parking:<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData,Floor: "Bike" })}>Bike</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, Parking:"Car" })}>Car</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, Parking:"Both" })}>Both</button>
          </h6>
          <h6>
          Non Veg:<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, nonVeg: true})}>Yes</button> <button className="
            m-3 rounded p-1 " onClick={() => setFormData({ ...formData, nonVeg: false })}>No</button>
          </h6>
          <h6>
          Bathroom: <input type="text" className="m-3 rounded p-1" onClick={() => setFormData({ ...formData,  Bathroom: Text })}/>
          </h6>
          <h6>
          Toilet: <input type="text" className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, Toilet: Text })}/>
          </h6>
          <h6>
          Balcony: <input type="text" className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, Balcony: Text})}/>
          </h6>
          
              <h6>
                Wifi:
                <button
                  type="button"
                  className="m-3 rounded p-1"
                  onClick={() => setFormData({ ...formData, wifi: true })}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="m-3 rounded p-1"
                  onClick={() => setFormData({ ...formData, wifi: false })}
                >
                  No
                </button>
              </h6>
              <hr />
              <h6>
          Amenities<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, wifi: true })}>Bed</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, amenities: "Fan" })}>Fan</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, amenities: "Almahri" })}>Almahri</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, amenities: "Study Table" })}>Study Table</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, amenities: "Custom" })}>Custom</button>
          </h6> 
          <hr />
          <h6>
          Advance booking<button className="m-3 rounded p-1" onClick={() => setFormData({ ...formData, advanceBooking: "Allowed" })}>Allowed</button> <button className="
            m-3 rounded p-1" onClick={() => setFormData({ ...formData, advanceBooking: "Not Allowed" })}>Not Allowed</button>
          </h6> 
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCurrentSection("images")}
                >
                  Save & Continue
                </button>
              </div>
            </div>
          )}
          {currentSection === "images" && (
            <div>
              <h5>Photos:</h5>
              <input
                type="file"
                multiple
                onChange={(e) =>
                  setFormData({ ...formData, photos: [...e.target.files] })
                }
              />
              <h5>Video:</h5>
              <input
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, video: e.target.files[0] })
                }
              />
              <div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default AddRoom;
