import React from "react";
import './extraitem.css';
const Extraincome = () =>{
    return(
        <>
        <section className="extra-sec">
         <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Extra Items & Charges</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="offer-txt-box">
                            <span><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                        
                            <p>Your Pricing Changes will be reviewed by RideNoww before becoming active. This Process usually takes 1-2 business days</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="extra-table">
                            <div class="table-responsive">
                                <table class="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">Service Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Add to Booking</th>
                </tr>
            </thead>
            <tbody>
                <tr>
            
                <td>Child Car Seat</td>
                <td>Ensure the safety and comfort of your little ones with our child car seats</td>
                <td>£15 per car seat</td>
                <td><a href="#" className="btn btn-primary">Add Car Seat</a></td>
                </tr>
                <tr>
                <td>In-Ride Wi-Fi Access</td>
                <td>Stay connected on the go with high-speed Wi-Fi during your ride</td>
                <td>£5 for unlimited Wifi</td>
                <td><a href="#" className="btn btn-primary">Add Wi-Fi</a></td>
                </tr>
                <tr>
                <td>Extra Luggage Space</td>
                <td>Add extra space for your suitcases or bulky items to ensure a comfortable ride</td>
                <td>£10 per  suitcase</td>
                <td><a href="#" className="btn btn-primary">Add  Luggage</a></td>
                </tr>
                <tr>
                <td>Pet-Friendly Ride</td>
                <td>Choose our pet-friendly option to bring your pets along for the ride</td>
                <td>£10 charge for pets</td>
                <td><a href="#" className="btn btn-primary">Add Pet Option</a></td>
                </tr>
                <tr>
                <td>In-Ride Wi-Fi Access</td>
                <td>Stay connected on the go with high-speed Wi-Fi during your ride</td>
                <td>£5 for unlimited Wifi</td>
                <td><a href="#" className="btn btn-primary">Add Wi-Fi</a></td>
                </tr>
                <tr>
                <td>Child Car Seat</td>
                <td>Ensure the safety and comfort of your little ones with our child car seats</td>
                <td>£15 per car seat</td>
                <td><a href="#" className="btn btn-primary">Add Car Seat</a></td>
                </tr>
            </tbody>
                                </table>
                            </div>
                            <div class="pagination justify-content-center">
  <a href="#"> &laquo; Previous</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">Next &raquo; </a>
</div>
                        </div>
                        
                    </div>
                </div>
            </div>










            </section>

        </>
    )
}

export default Extraincome;