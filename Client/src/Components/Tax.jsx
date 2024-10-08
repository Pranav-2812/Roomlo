import React from 'react'

const Tax = () => {
  return (
      <>
      <div className="container text-center my-4">
         <h2>Tax</h2>
         <h3>Tax on Income from House Property</h3>
         <div className="row py-4 px-4">
           <div className="col-md-6 py-4 px-4">
             <h5>ZERO TAX</h5>
             <h6>*If the total rent of the year (GAV) is less than Rs 2.5 lakh, then zero tax on rental income.</h6>
             <div className="container text-center py-4">
               <div className="row row-cols-2 row-cols-md-2 border border-dark">
                 <div className="col border border-dark fw-bold">Parameter</div>
                 <div className="col border border-dark fw-bold">Calculation</div>
                 <div className="col border border-dark">
                   <li>Monthly Rent</li>
                   <li>Gross Annual Value (GAV)</li>
                 </div>
                 <div className="col border border-dark">
                   <li>Rs.12,000 per month</li>
                   <li>12 months = Rs.1,44,000</li>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-md-6 py-4">
             <h5>PAY TAX</h5>
             <h6>*If the total rent of the year (GAV) exceeds Rs 2.5 lakh, then tax is applicable on rental income.</h6>
             <div className="container text-center py-4">
               <div className="row row-cols-2 row-cols-md-2 border border-dark">
                 <div className="col border border-dark fw-bold">Parameter</div>
                 <div className="col border border-dark fw-bold">Calculation</div>
                 <div className="col border border-dark">
                   <li>Monthly Rent</li>
                   <li>Gross Annual Value (GAV)</li>
                 </div>
                 <div className="col border border-dark">
                   <li>Rs.25,000 per month</li>
                   <li>12 months = Rs.3,00,000</li>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </div>
      </>
  )
}

export default Tax;
