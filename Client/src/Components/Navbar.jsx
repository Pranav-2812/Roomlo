import React, { useState } from 'react'
import "../Styles/Navbar.css"
import logo from "../assets/Logo.png"
const Navbar = () => {
    const [open, setOpen] = useState(false) //to check if side bar is open
    const openSideBar = () => {
        if (!open) {
            document.querySelector(".side_bar").style.display = "block";
            document.querySelector(".side_bar_btn").classList.toggle("side_bar_btn_after");
            setOpen((open) => open = true);
        }
        else {
            closeSideBar();
        }
    }
    const closeSideBar = () => {
        document.querySelector(".side_bar").style.display = "none";
        document.querySelector(".side_bar_btn").classList.remove("side_bar_btn_after");
        setOpen((open) => open = false);
    }
    window.onclick = (e) => {
        if (e.target === document.querySelector(".side_bar")) {
            closeSideBar();
        }
    }
    return (
        <>
            <div className='navbar_main'>
                <div className="first_half">
                    <span className='side_bar_btn' onClick={openSideBar}>
                        <hr />
                        <hr />
                        <hr />
                    </span>
                    <span className='logo_name'>
                        <img src={logo} />
                        <h2>Roomlo</h2>
                    </span>
                </div>
                <div className="second_half">
                    <span className='accounts'>
                        <h3>Owner/</h3>
                        <h3>User</h3>
                    </span>
                    <span className='icons'>
                        <i className="fa-regular fa-heart"></i>
                        <p>Wishlist</p>
                    </span>
                    <span className='icons'>
                        <i class="fa-regular fa-user"></i>
                        <p>Sign in</p>
                    </span>
                </div>
            </div>
            <div className="side_bar">
                <div className="side_bar_contents">
                    <ul className='list'>
                        <li>
                            <i class="fa-solid fa-house"></i>
                            <h3>Home</h3>
                        </li>
                        <li>
                            <i class="fa-solid fa-map"></i>
                            <h3>Map</h3>
                        </li>
                        <li>
                            <i class="fa-solid fa-wallet"></i> 
                            <h3>Pay Rent</h3>  
                        </li>
                        <li>
                            <i class="fa-solid fa-clock-rotate-left"></i>
                            <h3>History</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
