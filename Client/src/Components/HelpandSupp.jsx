import React from 'react'

const HelpandSupp = () => {
  return (
      <>
      <div className="container text-center my-4 py-3">
         <h2>Help & Support</h2>
         <h5 className="py-4">1) Please watch our YouTube videos for any issues. <i class="fa-brands fa-youtube fa-lg" style={{color: "#f40b23"}}></i>
         </h5>
         <h5 className="px-4">2) If not resolved:</h5>
         <ul className="list-unstyled px-4 ">
           <li>Chat on WhatsApp: <span className='text-primary'>132687459</span> <i class="fa-brands fa-whatsapp fa-xl" style={{color: "#27aa36"}}></i></li>
           <li>Call Phone number: <span className='text-primary'>123456789</span>  <i class="fa-solid fa-phone fa-lg" style={{color: "#0d5be3"}}></i></li>
         </ul>
      </div>
      </>
  )
}

export default HelpandSupp;

