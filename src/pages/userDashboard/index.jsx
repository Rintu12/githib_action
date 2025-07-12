import React, { useEffect } from "react";
import './dashboard.css'
import { useNavigate } from "react-router-dom";
const UserDashBoard = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div>
                <div className="row sm-mobile-screen main-wraper-dashboard">
                    <div className="col-6 col-lg-3 quick-action-mobile col-sm-6 col-xl-3 quick-link-user mt-3 ">

                        <div className="m-2">
                            <h5>Quick Actions</h5>
                            <button className="bookride-btn mt-3">
                                <i class="fa fa-car" aria-hidden="true"></i>

                                <p>Book A Ride</p>
                            </button>
                            <button className="ridehistory-btn mt-3 ">
                                <i class="fa fa-history" aria-hidden="true"></i>

                                <p>View Ride History</p>
                            </button>
                            <button className="manage-payment-btn mt-3 ">
                                <i class="fa fa-credit-card-alt" aria-hidden="true"></i>

                                <p>Manage Payment Methods</p>
                            </button>


                            <div className="recent-rides">
                                <p>Recent Rides</p>

                                <div className="recents-rides-div">
                                    <p>Gatwick Airport to Kensington</p>
                                    <div className="d-flex flex-row justify-content-between details">
                                        <p>Date :19 Sep,2024</p>
                                        <p>Amount: 99£</p>

                                    </div>
                                    <div className="pt-2">
                                        <button
                                            onClick={() => navigate('/user/managebooking')}
                                            className="recent-view-btn">
                                            View Detail
                                        </button>
                                    </div>

                                </div>
                                <div className="recents-rides-div">
                                    <p>Gatwick Airport to Kensington</p>
                                    <div className="d-flex flex-row justify-content-between details">
                                        <p>Date :19 Sep,2024</p>
                                        <p>Amount: 99£</p>

                                    </div>
                                    <div className="pt-2">
                                        <button className="recent-view-btn">
                                            View Detail
                                        </button>
                                    </div>

                                </div>
                                <p className="text-right text-decoration-underline mt-3">View All Rides</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4 col-sm-6 upcoming-mobile-screen col-xl-4 ">
                        {/* <div className="col-3 "> */}
                        {/* <div> */}
                        <div className="upcoming-rides">
                            <div className="upcoming-rides-wraper">
                                <h6>Upcoming Ride</h6>
                                <p>Heathrow Airport  to Central London</p>

                                <p>Date : 19 September 2024</p>
                                <p>Time : 10:30 AM</p>
                                <p>Vehicle : Standard Saloon</p>
                            </div>

                        </div>
                        <button className="up-view-detail-btn">View Detail</button>
                        {/* </div> */}
                        {/* <div> */}
                        <div className="upcoming-rides">
                            <div className="upcoming-rides-wraper">
                                <h6>Upcoming Ride</h6>
                                <p>Heathrow Airport  to Central London</p>

                                <p>Date : 19 September 2024</p>
                                <p>Time : 10:30 AM</p>
                                <p>Vehicle : Standard Saloon</p>
                            </div>
                        </div>
                        <button className="up-view-detail-btn">View Detail</button>


                        {/* </div> */}
                        {/* <div> */}
                        <div className="upcoming-rides">
                            <div className="upcoming-rides-wraper">
                                <h6>Upcoming Ride</h6>
                                <p>Heathrow Airport  to Central London</p>

                                <p>Date : 19 September 2024</p>
                                <p>Time : 10:30 AM</p>
                                <p>Vehicle : Standard Saloon</p>
                            </div>
                        </div>
                        <button className="up-view-detail-btn">View Detail</button>

                        {/* </div> */}

                        {/* </div> */}
                    </div>
                    <div className="col-6 mt-4   notification-mobile-screen  col-xl-5">
                        <div className="account-container">
                            <p className="acc-overview-text">Account Overview</p>
                            <p>Total Rides : <span>15</span></p>
                            <p>Favorite Destination: : <span>Heathrow Airport</span></p>


                            <div className="notification-div mt-4">
                                <h6>Notification</h6>

                                <button className="noti-btn-one">
                                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                                    Notification design 1
                                </button>
                                <button className="noti-btn-two">
                                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                                    Notification design 2
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default UserDashBoard;
