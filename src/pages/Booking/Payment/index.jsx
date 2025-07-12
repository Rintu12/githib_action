import React, { useEffect } from "react";
import './payment.css'
import moneyAdd from '../../../assets/moneyadd.png'
import lockimg from '../../../assets/lock.png'

import { useNavigate } from "react-router-dom";
const PaymentBooking = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="gradient-div-payment ">
                <div className=" ">
                    {/* <p className="title-text text-center">Payment Now</p> */}

                    <div className="container ">


                        <div className="row  details-payment ">
                            <div className="col-12 col-md-12 col-lg-6 col-xl-6 ">


                                <div className="Booking-summery ">
                                    <div className="booking-wraper">
                                        <p>Booking Summary</p>


                                        <div className="d-flex row-container  align-items-center justify-content-between">
                                            <p>From:</p>
                                            <p>Heathrow Airport (LHR)</p>
                                        </div>
                                        <div className="d-flex row-container  align-items-center justify-content-between">
                                            <p>To::</p>
                                            <p>Central London  (SKW1AA)</p>
                                        </div>
                                        <div className="d-flex row-container  align-items-center justify-content-between">
                                            <p>Date & Time:</p>
                                            <p>15 Sep 2024, 14:35</p>
                                        </div>
                                        <div className="d-flex row-container  align-items-center justify-content-between">
                                            <p>Vehicle:</p>
                                            <p>Standard Saloon</p>
                                        </div>
                                        <div className="d-flex row-container  align-items-center justify-content-between">
                                            <p>Via Return :</p>
                                            <p>789 Pine St, Middletown</p>
                                        </div>
                                        <div className="d-flex row-container  align-items-center justify-content-between">
                                            <p> Luggage :</p>
                                            <p>2 Large Suitcases and 1 Carry-on Bag</p>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="d-flex row-container  align-items-center justify-content-between">
                                            <p>Total :</p>
                                            <p>£100</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-12  col-lg-6 col-xl-6 ">
                                <div className="Booking-summery   ">
                                    <div className="booking-wraper">
                                        <p>Payment Details</p>
                                        <div className="row">
                                            <div className="col-12 card-input">
                                                <label htmlFor="">Name on Card</label>
                                                <input type="text" name=""
                                                    placeholder="Enter Card Name"
                                                    id="" />
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-12 card-input">
                                                <label htmlFor="">Card Number</label>
                                                <input type="text" name="" id=""
                                                    placeholder="Enter Card Number"
                                                />
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-6 card-input">
                                                <label htmlFor="">Expiry Date</label>
                                                <input type="text" name="" id=""
                                                    placeholder="DD/MM/YY"
                                                />
                                            </div>
                                            <div className="col-6 card-input">
                                                <label htmlFor="">CVV</label>
                                                <input type="text" name="" id=""
                                                    placeholder="Enter CVV Number"
                                                />
                                            </div>


                                        </div>
                                        <div className="row add-money-btn">
                                            <button className="col-12" onClick={() => navigate('/booking-confirm')}>
                                                <div style={{
                                                    padding: 0,
                                                    margin: 0
                                                }}>
                                                    <img src={moneyAdd}
                                                        style={{
                                                            width: 30,
                                                            height: 30
                                                        }}
                                                        alt="" />
                                                </div>

                                                Pay £45
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6">
                                <div className="payment-bottom-text">
                                    <img
                                        style={{
                                            width: 30,
                                            height: 30
                                        }}
                                        src={lockimg} alt="" />
                                    <p>Your payment is secure and encrypted with industry-standard protection, ensuring privacy, peace of mind, and seamless transactions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PaymentBooking