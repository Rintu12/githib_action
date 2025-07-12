import React, { useEffect } from "react";
import './ourservice.css'
import airport from '../../assets/ourservice/design2.png'
import img2 from '../../assets/ourservice/design1.png'
import img3 from '../../assets/ourservice/design.png'
import immg4 from '../../assets/ourservice/design3.png'
import img5 from '../../assets/ourservice/design4.png'
import img6 from '../../assets/ourservice/design5.png'
import img9 from '../../assets/image25.png'


const Ourservice = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="ourservice-wraper">
                <div className="list-data-service">
                    {/* <div class=""> */}
                    <h6 className="text-center">See Our Ride Options</h6>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 flex-wrap mt-4 justify-content-md-center">
                        <div className="col ">
                            <div className="detail-wraper ">
                                <div>
                                <img src={airport} alt="" />
                                </div>
                            
                                <p >Airport Transfers</p>
                                <p className="text-center">Reliable and punctual airport {'\n'} pickup
                                    and drop-off services for all major {'\n'}
                                    UK Airports</p>

                                <button className="learn-more-ourservice">Learn More</button>
                            </div>
                        </div>
                        <div className="col">

                            <div className="detail-wraper ">
                                <div>
                                <img src={img2} alt="" />
                                </div>
                             
                                <p >Business Travel</p>
                                <p className="text-center">Profession and discreet {'\n'}
                                    transportation services for corporate {'\n'}
                                    clients and executives</p>

                                <button className="learn-more-ourservice">Learn More</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="detail-wraper ">
                                <div className="">
                                <img src={img3} alt="" />
                                </div>
                               
                                <p >City Tours</p>
                                <p className="text-center">Customized sightseeing tours {'\n'}
                                    with knowledgeable drivers in major {'\n'}UK cities</p>

                                <button className="learn-more-ourservice">Learn More</button>
                            </div>
                        </div>



                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 flex-wrap mt-4 justify-content-md-center justify-content-lg-center">
                        <div className="col ">
                            <div className="detail-wraper ">
                                <div>
                                <img src={immg4} alt="" />
                                </div>
                               
                                <p >Eco-Friendly Ride</p>
                                <p className="text-center">Sustainable transportation options {'\n'} with our fleet of electric and hybrid {'\n'} vehicles</p>

                                <button className="learn-more-ourservice">Learn More</button>
                            </div>
                        </div>
                        <div className="col">

                            <div className="detail-wraper ">
                                <div>
                                <img src={img5} alt="" />
                                </div>
                             
                                <p >Group Transport</p>
                                <p className="text-center">Efficient and comfortable {'\n'} transportation solutions for large {'\n'} groups and events</p>

                                <button className="learn-more-ourservice">Learn More</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="detail-wraper ">
                                <div>
                                <img src={img6} alt="" />
                                </div>
                              
                                <p >Special Events</p>
                                <p className="text-center">Luxury transportation for weddings {'\n'}, proms, collage party, and other {'\n'}special occasions</p>

                                <button className="learn-more-ourservice">Learn More</button>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="book-your-ride">
                    <div className="book-your-ride-wraper" >

                        <div className="row">

                            <div className="col-7">
                                <h6>Raday to Book Your Ride  </h6>
                                <p>Experience the comfort and reliability of RideNoww services today   </p>

                                <button className="booknow-service"> Book Now</button>

                            </div>
                            <div className="col-5">
                                <div>
                                <img src={img9} class="img-fluid" alt="" />
                                </div>
                             
                            </div>
                        </div>

                    </div>
                </div>
                <div className="why-choose-ride">
                    <h6 className="text-center">Why choose RideNoww ?</h6>

                    <div className="why-choo-content">
                        <div>
                            <div className="d-flex flex-row pt-3 pb-2">
                                <div className="circle">
                                    <i class="fa fa-check" aria-hidden="true"></i>

                                </div>
                                <p className="text">Professional and courteous drivers</p>
                            </div>
                            <div className="d-flex flex-row pt-3 pb-2">
                                <div className="circle">
                                    <i class="fa fa-check" aria-hidden="true"></i>

                                </div>
                                <p className="text">Modern and well-maintained fleet </p>
                            </div>
                            <div className="d-flex flex-row pt-3 pb-2">
                                <div className="circle">
                                    <i class="fa fa-check" aria-hidden="true"></i>

                                </div>
                                <p className="text">24/7 Customer Support  </p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-row pt-3 pb-2">
                                <div className="circle">
                                    <i class="fa fa-check" aria-hidden="true"></i>

                                </div>
                                <p className="text">Competitive and transparent pricing  </p>
                            </div>
                            <div className="d-flex flex-row pt-3 pb-2">
                                <div className="circle">
                                    <i class="fa fa-check" aria-hidden="true"></i>

                                </div>
                                <p className="text">Essay online booking and management  </p>
                            </div>
                            <div className="d-flex flex-row pt-3 pb-2">
                                <div className="circle">
                                    <i class="fa fa-check" aria-hidden="true"></i>

                                </div>
                                <p className="text">Complete Knowledgeable Driver</p>
                            </div>
                        </div>

                    </div>

                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Ourservice;