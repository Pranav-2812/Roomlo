import React from 'react'
import "../Styles/Footer.css"
export default function Footer() {
    return (
        <div style={{background:"#212121"}}>
            <div className="container footer-content px-2 ">
                <div className='py-5'>
                    <h1 className='text-light'>India's #1</h1>
                    <h1 className='text-light'>Shelter Company</h1>
                </div>
                <div className="row pb-5">
                    <div className="w-50 part-1">
                        <h5 className='text-warning '>Get 10% instant Cashback on your 1st rent.</h5>
                        <h5 className='text-warning '>Last Month FREE RENT (Deposit).</h5>
                        <h5 className='text-warning '>Know EVERY room in EVERY area.</h5>
                        <h5 className='text-warning '>Get Brokerage FREE room.</h5>
                        <h5 className='text-warning '>Get All room of India in only one app.</h5>
                    </div>
                    <div className="w-50 part-2">
                        <h5 className='text-warning '>
                            <p>1000+</p>
                            <p>Tenants/Buyers</p>
                        </h5>
                        <h5 className='text-warning'>
                            <p>400+</p>
                            <p>Owner/Sellers</p>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="socials bg-light">
                <div className="container py-4">
                    <div className="socials-1">
                        <span>
                            <i className="fa-brands fa-instagram"></i>
                            <p>room21</p>
                        </span>
                        <span>
                            <i className="fa-brands fa-square-facebook"></i>
                            <p>room21</p>
                        </span>
                        <span>
                            <i className="fa-regular fa-envelope"></i>
                            <p>room21@gmail.com</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
