import React, { useEffect } from "react";
import './style.css';
import image from '../../assets/image44.png'
import car1 from '../../assets/car/image45.png';
import car2 from '../../assets/car/image46.png'
import car3 from '../../assets/car/image47.png'
import car4 from '../../assets/car/image48.png'
import car from '../../assets/Frame1410088005.png'
import carr8 from '../../assets/image25.png'
import ReviewDetails from "../../component/shared/reviewBoxCon";
import { useNavigate } from "react-router-dom";
function RidePackageDetails() {

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="gradient-div-details">
                {/* <div className="div-two"></div> */}
                {/* <div className="content-wraper"> */}


                    {/* </div> */}
                    {/* <p className="title-text text-center">Ride Package Details</p> */}
                    <div className="image-container-top">
                        <div className="pkg-dl-image">
                            <img src={image} alt=""

                            />
                        </div>

                    </div>
                    <div className="ride-details">
                        <div className="container-details ">
                            <h6>Saloon - Sedan Package</h6>
                            <div className="price-details d-flex flex-row justify-content-between">
                                <p>Private Car Package Price</p>
                                <p>£85/Per Person</p>
                                <p>Estimated Journey Time</p>
                                <p>15 Minutes</p>
                            </div>
                            <div className="price-details d-flex flex-row justify-content-between">
                                <p>Passenger Price</p>
                                <p>For 1-3 PassengersPerson</p>
                                <p>Luggage</p>
                                <p>2 Suitcases AllowedMinutes</p>
                            </div>
                            <div
                                onClick={() => navigate('/booking-details')}
                                className="book-now text-center  d-flex text-center  flex-row align-items-center justify-content-center">
                                Book Now
                            </div>
                        </div>
                    </div>
                    <div className="feature-description">
                        <div className="container-details-feature">
                            <h6>Description and Features</h6>
                            <p>Experience the convenience and comfort of our Private Car Package. Ideal for solo travelers or small groups, our saloon sedans offer a smooth ride tailored to your needs
                            </p>
                            <p>Features List</p>

                            <div className="d-flex flex-row justify-content-between">
                                <div>
                                    <div className="d-flex flex-row  desc-text align-items-center">
                                        <div className="round-right"> <i style={{
                                            color: '#FFFFFF',
                                            fontSize: 20
                                        }} class="fa fa-check" aria-hidden="true"></i></div>
                                        <p className="">Spacious seating for up to 3 passengers</p>
                                    </div>
                                    <div className="d-flex desc-text flex-row align-items-center">
                                        <div className="round-right"> <i style={{
                                            color: '#FFFFFF',
                                            fontSize: 20
                                        }} class="fa fa-check" aria-hidden="true"></i></div>
                                        <p className="pl-3">Professional and friendly drivers</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="d-flex flex-row  desc-text align-items-center">
                                        <div className="round-right"> <i style={{
                                            color: '#FFFFFF',
                                            fontSize: 20
                                        }} class="fa fa-check" aria-hidden="true"></i></div>
                                        <p className="pl-3">Spacious seating for up to 3 passengers</p>
                                    </div>
                                    <div className="d-flex desc-text flex-row align-items-center">
                                        <div className="round-right"> <i style={{
                                            color: '#FFFFFF',
                                            fontSize: 20
                                        }} class="fa fa-check" aria-hidden="true"></i></div>
                                        <p className="pl-3">Professional and friendly drivers</p>
                                    </div>
                                </div>
                            </div>
                            <h6 className="mt-4">Explore the Package</h6>

                            <div className="cars-package  row">
                                <div className="col-lg-3 col-xl-3 col-md-3 ">
                                    <div className="package-car ">
                                        <div className="package-car-image ">
                                            <img src={car1} alt="" />
                                        </div>

                                        <p className="text-center">Sleek Exterior of Our
                                            Saloon Sedan</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3 ">
                                    <div className="package-car">
                                        <div>
                                            <img src={car2} alt="" />
                                        </div>

                                        <p className="text-center">Luxurious Interior for
                                            a Comfortable Ride</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3">
                                    <div className="package-car">
                                        <div>
                                            <img src={car3} alt="" />
                                        </div>

                                        <p className="text-center">Professional and
                                            Friendly Drivers</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3">
                                    <div className="package-car">
                                        <div>
                                            <img src={car4} alt="" />
                                        </div>

                                        <p className="text-center">Ample Space for
                                            Your Luggage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        margin:50
                    }}>
                    <ReviewDetails/>
                    </div>
                   
                     <div className="similar-package-container " data-id="element-0">
                        <h5 className="" data-id="element-1">
                            Explore Similar Packages
                        </h5>

                        <div className="cars-package row">
                           
                            {
                                Array.from({ length: 3 }, (_, index) => index + 1).map((item) => {
                                    return (
                                        <div className=" column-gap-3  col-md-4 col-xl-4 col-md-4 mb-4 ">
                                            <div className="vehicle-card-similar">



                                                <div className="d-flex flex-row justify-content-between align-items-center m-3 mt-3">
                                                    <p className="vehicle-card-hea">1x Private Car</p>
                                                    <div
                                                        className="discunt-percentage"
                                                    >
                                                        <p >Save 50%</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex flex-row justify-content-center mt-2 align-items-center"
                                                >
                                                    <div>
                                                        <img src={car}

                                                            alt="" />
                                                    </div>

                                                </div>
                                                <div className="d-flex flex-row align-items-center justify-content-center mt-3 ">
                                                    <p className="price-tag">£81.50 <span className="customer-text-no">/Per person</span></p>
                                                    <p className="discount-price ml-3">£81.50</p>
                                                </div>
                                                <div className="m-3">

                                                    <div className="d-flex pt-2 flex-row align-items-center justify-content-between ">
                                                        <p className="text-car">Estimate journey time</p>
                                                        <p className="text-car">14 mins</p>
                                                    </div>
                                                    <div className="d-flex pt-2 flex-row align-items-center justify-content-between ">
                                                        <p className="text-car">Number of passengers</p>
                                                        <p className="text-car">1-3</p>
                                                    </div>
                                                    <div className="d-flex pt-2 flex-row align-items-center justify-content-between ">
                                                        <p className="text-car">Luggage allowance</p>
                                                        <p className="text-car">2x suit case</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex m-3 pt-2 pb-3 flex-row align-items-center justify-content-between ">
                                                    <div className="d-flex text-center  flex-row align-items-center justify-content-center  leara-more-similar">
                                                        Learn More
                                                    </div>
                                                    <div
                                                        onClick={() => navigate('/ride-package-details')}

                                                        className=" d-flex text-center  flex-row align-items-center justify-content-center  booked-now-similar">
                                                        Book Now

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            

                        </div>
                        <div className="similar-bottom">

                            <div className="d-flex flex-row justify-content-between">

                                <div className="similar-details-bototm">
                                    <h6>Raday to Book Your Ride  </h6>
                                    <p>Book now and save 15% on your next private car ride</p>
                                    <button>
                                        Book Now
                                    </button>

                                </div>
                                <div className="ride-details-car-image">
                                    <img src={carr8}

                                        alt="" />
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <div className="review-box">
                        <ReviewDetails />

                    </div> */}

                   
                    {/* <div> */}
                {/* </div> */}

            </div>
            
        </>
    )
}

export default RidePackageDetails;