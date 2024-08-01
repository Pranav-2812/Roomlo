import React from 'react'
import "../Styles/InfoCard.css"
import room from "../assets/room.png"
const InfoCard = () => {
    return (
        <div className='card-main'>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
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
                <h3>RS.1200/month</h3>
                <h5>Double Sharing <h6 style={{ color: "grey", marginTop: '2px' }}>Bachlor</h6></h5>
                <p style={{ color: "grey" }}>220 sq.ft</p><p><i class="fa-solid fa-location-dot"></i>900m</p>
                <p style={{ color: "grey" }}>Available from : 21 March 2024</p>
                <button className='btn my-2 w-50 btn-danger'>Book</button>
            </div>
            <div className="icon-btns">
                <i className="fa-regular fa-heart"></i>
                <i class="fa-solid fa-share"></i>
                <i class="fa-solid fa-location-dot"></i>
            </div>
        </div>
    )
}

export default InfoCard
