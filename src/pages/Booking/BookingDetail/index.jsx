import React, { useEffect } from "react";
import './booking.css';
import img1 from '../../../assets/bodetails.png'
import ReviewDetails from "../../../component/shared/reviewBoxCon";
import { useNavigate, useNavigation } from "react-router-dom";
const BookingDetails = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="gardian-div-booking-details">
                <div className="content-wraper">
                    <h4 className="text-center title-text ">Booking Detail</h4>
                    <div className="ride-details">
                        <div className="d-flex ride-details-wrapper  ">
                            <div>
                            <img src={img1}

                               
alt="" />
                            </div>
                          
                            <div className="details-container">
                                <p className="ride-detail-text">Ride Details</p>
                                <div className="d-flex flex-row details-row justify-content-between detail-content">
                                    <div className="col-md-6"><p>Pick-up : <span>123 Main St, Cityville</span></p></div>
                                    <div className="col-md-6"><p>Drop-off: <span>456 Oak St, Townsville</span></p></div>
                                    
                                </div>
                                <div className="d-flex flex-row  details-row justify-content-between detail-content">
                                <div className="col-md-6"><p>Via:<span>789 Pine St, Middletown</span></p></div>
                                <div className="col-md-6"><p>Vehicle Type:<span>Premium Sedan</span></p></div>
                                </div>
                                <div className="d-flex flex-row details-row justify-content-between detail-content">
                                <div className="col-md-6"><p>Driver Name: <span>John Dasy</span></p></div>
                                <div className="col-md-6">   <p>Driver Contact: <span>(123) 456-7890</span></p></div>
                                </div>
                                <div className="d-flex flex-row details-row justify-content-between detail-content">
                                <div className="col-md-12"><p>Luggage: <span>2 Large Suitcases and 1 Carry-on Bag</span></p>
                                {/* <p>Driver Contact: <span>(123) 456-7890</span></p> */}</div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="price-brekdown">
                        <div className="price-brek-down-wrapper ">
                            <p className="ride-detail-text">Price Breakdown</p>
                            <div className="d-flex flex-row justify-content-between">
                                <p>Base Fare:</p>
                                <p>£50</p>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <p>
                                    Airport Pickup Fee:</p>
                                <p>£50</p>
                            </div>
                        </div>
                        <div className="d-flex total-box flex-row justify-content-between">
                            <p>
                                Total:</p>
                            <p>£50</p>
                        </div>
                    </div>
                    <div className="passenger-details">
                        <div className="passenger-wraper">
                            <p className="ride-detail-text">Passenger Detail</p>

                            <div className="row">
                                <div className="col-md-12 passebger-input col-lg-12">
                                    <label htmlFor="">Full Name</label>
                                    <input type="text"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="col-md-12 col-lg-12">
                                    <div className="row row-container">
                                        <div className="col-6 row-two">
                                            <label htmlFor=""> Email Address</label>
                                            <input type="text"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="col-6 row-two">
                                            <label htmlFor=""> Phone Number</label>
                                            <input type="number"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="confirm-btn">
                                <button onClick={() => navigate('/booking-payment')}>Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                    <div className="review-container">
                        <ReviewDetails />
                    </div>




                </div>
            </div>
        </>
    )
}

export default BookingDetails;