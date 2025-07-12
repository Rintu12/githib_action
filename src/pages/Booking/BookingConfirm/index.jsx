import React, { useEffect } from "react";
import './bookingConfirm.css'
import car1 from '../../../assets/bodetails.png'
import qrcde from '../../../assets/Frame1410089189.png'
const BookingConfirm = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="gradient-booking-confirm ">

                <div className="confirm-booing-div">


                    <div className="booking-address">
                        <div className="addres-con-wrapper" >
                            <p className="title-confirm">Your Booking is Confirmed</p>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="address-confirm-comntaine">
                                    <div className="row row-address-con">
                                        <div className="col-6 ">
                                            <div>
                                                <label htmlFor="">From</label>
                                                <p>Heathrow Airport (Lahore Pakistan)</p>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <div>
                                                <label htmlFor="">To</label>
                                                <p>Central London  (SKW1AA)</p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row row-address-con">
                                        <div className="col-4 ">
                                            <div>
                                                <label htmlFor="">Date </label>
                                                <p>19 September 2024</p>
                                            </div>

                                        </div>
                                        <div className="col-4 ">
                                            <div>
                                                <label htmlFor="">Time </label>
                                                <p>9:45 AM</p>
                                            </div>

                                        </div>
                                        <div className="col-4">
                                            <div>
                                                <label htmlFor="">Vehicle</label>
                                                <p>Standard Saloon</p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row row-address-con">
                                        <div className="col-6 ">
                                            <div>
                                                <label htmlFor="">Via Return  </label>
                                                <p>321 Elm St, Oldtown</p>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <div>
                                                <label htmlFor="">Items</label>
                                                <p> Standard Saloon</p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row row-address-con">
                                        <div className="col-6 ">
                                            <div>
                                                <label htmlFor="">Luggage  </label>
                                                <p>2 Large Suitcases and 1 Carry-on Bag</p>
                                            </div>

                                        </div>



                                    </div>
                                    {/* <div className="bg-primary"> */}
                                    {/* <div>
                                        <label htmlFor="">From</label>
                                        <p>Heathrow Airport (Lahore Pakistan)</p>
                                    </div>
                                    <div>
                                        <label htmlFor="">To</label>
                                        <p>Central London  (SKW1AA)</p>
                                    </div> */}
                                    {/* </div> */}

                                </div>
                                <div className="img-box">
                                    <div className="qrcode-box">
                                        <div></div>
                                        <div className="qr-code-image">
                                            <img src={qrcde}

                                                alt="" />
                                        </div>

                                    </div>
                                    <div className="grcode-box-image">
                                        <img

                                            src={car1}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="information-passsenger">
                        <div className="infor-wraper">
                            <div className="row row-address-con">
                                <div className="col-6 passe-info-row ">

                                    <label htmlFor="">Passenger Info</label>
                                    <p htmlFor="">Name: <span> John Doe</span></p>
                                    
                                    <p htmlFor="">Contact: <span> (123) 456-7890</span></p>


                                </div>
                                <div className="col-6 passe-info-row">
                                    <label htmlFor="">Payment </label>
                                    <p htmlFor="">Total Fare: <span> £65.00</span></p>
                                    <p htmlFor="">Email: <span> example.x@gmail.com</span></p>
                                </div>


                            </div>
                        </div>
                        <div className="modify-div">
                            <div className="modify-div-wraper">
                                <p>Your Driver will meet you at the designated pickup point. Please Look for a vehicle with the license plate AB12 CDE  </p>
                                <div className="btn-group-confirm">
                                    <button className="mody-request-btn">Modify Booking Request</button>
                                    <button className="download-tickket">Download  Ticket</button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="modyfy-booing-request">
                        <div className="modify-request-wrapper-form">
                            <p>Modify Booking Request</p>
                            <div className="row row-input-modify">
                                <div className="col-6 form-modufy-input">
                                    <label htmlFor="">Booking ID</label>
                                    <input type="text"
                                        placeholder="Enter Booking ID"
                                    />
                                </div>
                                <div className="col-6 form-modufy-input">
                                    <label htmlFor="">New Pickup Time</label>
                                    <input type="date" />
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
                                    <input type="text" />
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
                                        placeholder="Enter Destination Location"
                                    />
                                </div>


                            </div>
                            <div className="row row-input-modify">
                                <div className="col-12 form-modufy-input">
                                    <label htmlFor="">Add Special Request</label>
                                    <textarea type="text"
                                        placeholder="Add Special Instruction..."
                                    />
                                </div>


                            </div>

                            <div className=" submit-modify-btn">
                                <button>Submit Modification Request</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingConfirm;