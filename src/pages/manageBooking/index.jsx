import React, { useEffect } from "react";
import './manage.css';
import carimg from '../../assets/bookicarde.png'
import printer from '../../assets/printer.png'
import { Link, useNavigate } from "react-router-dom";
const ManageBooking = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="mane-main-wraper">
                <div className="booking-detail">
                    <div className="booking-details-wraper">
                        <h6>Booking Details</h6>
                        <p className="booking-id">Booking ID <span className="bookin-id-text">RN12345</span></p>
                        <div className=" row ">
                            <div className=" col-md-6 ">
                                <div className="row">
                                <div className="col-6 location-detaoil ">


                                    <label htmlFor="" className="mt-3">From</label>
                                    <p>Heathrow Airport (Lahore Pakistan)</p>
                                    <div className="d-flex flex-row justify-content-between mt-3">
                                        <div>
                                            <label htmlFor="Date" >Date</label>
                                            <p>19 September 2024</p>
                                        </div>
                                        <div className="time-zone">
                                            <label htmlFor="Date">Time</label>
                                            <p>9:45 AM</p>
                                        </div>

                                    </div>
                                    <div className="d-flex flex-row mt-5">
                                        <h6 className="status-text">Status:</h6>
                                        <button className="confirm-statua-btn ml-4">Confirmed</button>
                                    </div>
                                </div>
                                <div className="col-6 location-detaoil">
                                    <div className="ml-4">
                                        <label htmlFor="" className="mt-3">To</label>
                                        <p>Heathrow Airport (Lahore Pakistan)</p>
                                        <label htmlFor="" className="mt-3">Vehicle</label>
                                        <p>Standard Saloon</p>
                                    </div>

                                </div>
                                </div>
                            </div>

                            <div className="col-md-6  image-container-manebook">
                                <img
                                    style={{
                                        objectFit:'contain',
                                        height:'100%',

                                    width:'100%'
                                 
                                    }}
                                    src={carimg} alt="" />
                            </div>
                        </div>
                        <div className="row moboile-btn-group">
                            <div className="col-4 col-md-4 mody-request-btnm-div  col-sm-4 col-lg-4 ">
                                <button className="mody-request-btnm" >Modify Booking Request</button>
                            </div>
                            <div className="col-4 col-md-4 mody-request-btnm-div   col-sm-4 col-lg-4 ">
                                <button className="cancel-request-btn" >
                                    <i class="fa fa-times" aria-hidden="true"></i>

                                    Cancel Booking</button>

                            </div>

                            <div className="col-4 col-md-4  mody-request-btnm-div  col-sm-4 col-lg-4 ">
                                <button className="doenload-request-btn" > 
                                    <img src={printer} alt="" />Download Ticket</button>

                            </div>


                        </div>
                        <div className="cancel-div" >
                            <h6>Cancellation Policy</h6>
                            <p>Free cancellation up to 24 hours before the scheduled pickup time. Cancellations made within 24 hours of the pickup time may be subjected to a fee. </p>
                            <button className="cancil-policy-btn">Cancellation Policy</button>

                        </div>
                    </div>

                </div>
                <div className="modyfy-booing-request-m">
                    <div className="modify-request-wrapper-form">
                        <p>Modify Booking Request</p>
                        <div className="row row-input-modify">
                            <div className="col-6 form-modufy-input">
                                <label htmlFor="">Booking ID</label>
                                <input type="text"
                                    placeholder="Booking ID"
                                />
                            </div>
                            <div className="col-6 form-modufy-input">
                                <label htmlFor="">New Pickup Time</label>
                                <input type="date"
                                    placeholder="New Pickup Time "
                                />
                            </div>

                        </div>
                        <div className="row row-input-modify">
                            <div className="col-6 form-modufy-input">
                                <label htmlFor="">Flight Number</label>
                                <input type="text"
                                    placeholder="Enter Flight Number"
                                />
                            </div>
                            <div className="col-6 form-modufy-input">
                                <label htmlFor="">Number of Passengers</label>
                                <input type="number"
                                    placeholder="Enter Number Of Passenger"
                                />
                            </div>

                        </div>
                        <div className="row row-input-modify">
                            <div className="col-6 form-modufy-input">
                                <label htmlFor="">Airport Pickup</label>
                                <input type="text"
                                    placeholder="Select Airport Pickup"
                                />
                            </div>
                            <div className="col-6 form-modufy-input">
                                <label htmlFor="">Number of Luggage Items</label>
                                <input type="number"
                                    placeholder="Enter Number Of Luggage"
                                />
                            </div>

                        </div>
                        <div className="row row-input-modify">
                            <div className="col-12 form-modufy-input">
                                <label htmlFor="">Destination</label>
                                <input type="text"
                                    placeholder="Enter Destination Address"
                                />
                            </div>


                        </div>
                        <div className="row row-input-modify">
                            <div className="col-12 form-modufy-input">
                                <label htmlFor="">Add Special Request</label>
                                <textarea type="text"
                                    placeholder='Add Special Note'
                                />
                            </div>


                        </div>

                        <div className=" submit-modify-btn">
                            <button
                                // onClick={() => navigate('/user/userprofile')}
                            >
                                {/* <Link
                                    to='/user/userprofile'
                                /> */}
                                Submit Modification Request</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageBooking;
