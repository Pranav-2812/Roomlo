import React from 'react'
import "../Styles/InfoCard.css"
import room from "../assets/room.png"
const InfoCard = () => {
    return (
        <div className='card-main'>
            <div id="carouselExampleIndicators" className="carousel slide" style={{ zIndex: "0" }}>
                <div className="carousel-indicators" >

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={room} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={room} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={room} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="card-content">
                <span>
                    <h3>RS.1200/month</h3>
                    <div className="icon-btns-secondary">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-solid fa-share"></i>
                        <i className="fa-solid fa-location-dot"></i>
                    </div></span>
                <h5>Double Sharing <p style={{ color: "grey", marginTop: '2px' }}>&ensp;<small>Bachlor</small></p></h5>
                <span className='info-subcontent'>

                    <p><h6 style={{ color: "grey" }}>220 sq.ft &ensp;</h6><big><i className="fa-solid fa-location-dot"></i>900m</big></p>
                    <p style={{ color: "grey" }}>Available from : 21/03/2024</p>
                    <button className='btn my-2  w-50 btn-danger'>Book</button>
                </span>
                <button className='btn my-2 w-50 btn-danger'>Book</button>
            </div>
            <div className="icon-btns">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-share"></i>
                <i className="fa-solid fa-location-dot"></i>
            </div>
        </div>
    )
}

export default InfoCard
