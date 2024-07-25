import React, { useState } from 'react'
import "../Styles/Navbar.css"
import logo from "../assets/Logo.png"
import whatsappLogo from "../assets/Whatsapp.png"
import MoneyLogo from "../assets/Money.png"
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
                    <span className='icons'>
                        <img src={whatsappLogo}></img>
                        <p>Whatsapp</p>
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
                            <p>Home</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-map"></i>
                            <p>Map</p>
                        </li>
                        <li>
                            <i class="fa-regular fa-heart"></i> 
                            <p>Wishlist</p>  
                        </li>
                        <li>
                            <i class="fa-solid fa-door-open"></i>
                            <p>My Rooms</p>
                        </li>
                        <hr style={{border:"1px solid grey"}}/>
                        <li>
                            <i class="fa-regular fa-user"></i>
                            <p>Profile</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-sack-dollar"></i>
                            <p>Payments</p>
                        </li>
                        <li>
                            <img  src={MoneyLogo}/>
                            <p>Tax</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-clock-rotate-left"></i>
                            <p>History</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-gear"></i>
                            <p>Setting</p>
                        </li>
                        <li>
                            <i class="fa-solid fa-circle-question"></i>
                            <p>Help and Support</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
