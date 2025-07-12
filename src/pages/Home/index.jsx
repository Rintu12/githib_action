import React, { useState } from "react"
import { useRef, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
// import { Navigation } from 'swiper';
import mapicon from '../../assets/map2.png'
import lense from '../../assets/camera.png'
import briefcase from '../../assets/briefcase.png'
import cars1 from '../../assets/cars1.png'
import cars2 from '../../assets/cars2.png'
import cars3 from '../../assets/cars3.png'
import cars4 from '../../assets/cars4.png'
import cars5 from '../../assets/cars5.png'

import arrow1 from '../../assets/Vector2(1).png';
import arrow2 from '../../assets/Vector3.png';
import ReviewDetails from "../../component/shared/reviewBoxCon";
import { useNavigate } from "react-router-dom";


function HomepageUser() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const navigate = useNavigate()
    const [screenwidth, setsereenwidth] = useState(0)
    const [imagenumber, setimagenumber] = useState(window.innerWidth >= 1001 ? 5 : 1)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            console.log('resreere', window.innerWidth)
            if (window.innerWidth >= 600 && window.innerWidth <= 1000) {
                setimagenumber(3)
            } else if (window.innerWidth <= 479 || window.innerWidth <= 599) {
                setimagenumber(2)
            }

            else {
                setimagenumber(4)
            }
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window.innerWidth])

    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])


    const carsArray = [
        {
            id: 1,
            image: cars1,
            heading: 'Saloon',
            desc: 'Toyota Prius, VW Passat or similar'
        },
        {
            id: 2,
            image: cars2,
            heading: 'Estate',
            desc: 'VW Passat, Hyundai or similar'
        },
        {
            id: 3,
            image: cars3,
            heading: '7 Seater',
            desc: 'Ford Galaxy, VW Sharan or similar'
        },
        {
            id: 4,
            image: cars4,
            heading: 'Executive',
            desc: 'E class Mercedes, BMW 5 series or similar'
        },
        {
            id: 5,
            image: cars5,
            heading: '9 Seater',
            desc: 'Mercedes Viano, Renault Traffic or similar'
        }
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return (
            <button className="coursol-arrow" onClick={() => onClick()} />

        )

    };
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
            onMove,
            carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button className="coursol-arrow" onClick={() => onClick()} />;
    };

    function openDate() {
        document.getElementById('dateIcon').addEventListener('click', function () {
            document.getElementById('dateInput').showPicker();
        });
    }
    function selectTime() {
        document.getElementById('timeicon').addEventListener('click', function () {
            document.getElementById('timeinput').showPicker();
        });
    }

    useEffect(() => {
        const menu = document.getElementById('menu-fixed');
        const offset = menu.offsetHeight;

        const handleScroll = () => {
            if (window.scrollY > offset - 10) {
                // console.log('scolll./.')
                menu.classList.add("sticky");
            } else if (window.scrollY < offset - 20) {
                menu.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [window.scroll()]);


    return (
        <>

            <div className="gradient-div">
                <div className="information-details">
                    <div>
                        <div className="home-heading-text" >
                            <p>Compare Quotes from nationwide cab operators</p>

                            <p>   in more than <strong>500</strong> town and cites in UK. </p>
                        </div>
                       
                        <div className="pre-book">
                        
                        <div className="address-container">
                        <div className="pre-book-textbox"><h5>
                            Pre-Book Taxis Online - Cheap Ridenoww Quotes
                            </h5>  </div>
                            <div className="address-wraper">
                                <div className="top-buttongroup">
                                    <div className="onway" >

                                        <p>On Way</p>
                                    </div>
                                    <div className="return">
                                        <p>Return</p>
                                    </div>
                                    <div className="return">
                                        <p>Rent a Car</p>
                                    </div>
                                </div>
                                <div className=" d-flex flex-row addrsspicker-container ">
                                    <div className="address-div-attach  col-9">
                                        <div className=" fromdateselect-box">
                                            <div className="fromdates-wraper">
                                                <div className=" text-contain">
                                                    <p>Blue Area</p>
                                                    <p>G7-2, street 9, islamabad</p>

                                                </div>

                                                <img src={mapicon} alt="" />
                                            </div>

                                        </div>
                                        <div className="connector-container">
                                            <div className="connetor">
                                                <img src={arrow2} alt="" />
                                                <img src={arrow1} alt="" />


                                            </div>
                                        </div>

                                        <div className=" fromdateselect-box">
                                            <div className="fromdates-wraper">
                                                <div className=" text-contain">
                                                    <p>PWD</p>
                                                    <p>Jiannah Garden street 108, Islamabad</p>

                                                </div>

                                                <img src={mapicon} alt="" />
                                            </div>

                                        </div>
                                    </div>


                                    <div className="dateboxcontainer  col-3">
                                        <div className="date-wraper col-5 ">

                                            <label htmlFor="">Date</label>
                                            <div className="date-box">
                                                <input type="date"
                                                    id='dateInput'
                                                    className="date-input"

                                                    style={{
                                                        border: 'none',
                                                        outline: 'none'
                                                    }}

                                                />
                                                <i
                                                    id="dateIcon"
                                                    onClick={() => openDate()}
                                                    className="fa fa-calendar "></i>

                                            </div>

                                        </div>
                                        <div className="date-wraper col-5  ">
                                            <label htmlFor="">Time</label>
                                            <div className="date-box">
                                                <input type="time"
                                                    id='timeinput'
                                                    className="date-input"

                                                    style={{
                                                        border: 'none',
                                                        outline: 'none'
                                                    }}

                                                />
                                                <i

                                                    onClick={() => selectTime()} id="timeicon"
                                                    className="fa fa-clock-o  "></i>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="addresssectwo">
                                    <div>
                                        <div className="addresssectwo-container">
                                            <div className="viacontainer">

                                                <p>Via</p>
                                                <div className="viabox ml-2"> <i className="fa fa-plus  " aria-hidden="true"></i></div>

                                            </div>

                                            <div className="viacontainer ml-2">
                                                <p>Passengers</p>
                                                <div className="viacontainer ml-2" >
                                                    <div className="viabox"><i className="fa fa-plus "></i> </div>
                                                    <div className="countpassenger">
                                                        <p>0</p>
                                                    </div>
                                                    <div className="viabox"> <i className="fa fa-minus "></i></div>
                                                </div>
                                            </div>

                                            <select name="" id="" className="dropdown-items ml-2">
                                                <option value="" selected>Items</option>

                                            </select>
                                        </div>
                                        <div className="via-details-box">
                                            <p>if selected Via London Airport</p>

                                        </div>
                                    </div>

                                    <div className="getuetoffer-btn"
                                        onClick={() => navigate('/user-search-car')}
                                    >
                                        <p>Get Quotes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="cars-section">

                            <div className="details-section">
                                <div>
                                    <div className=" row section">
                                        <p className="heading ">Why book ride with <span>Ride</span> now?</p>
                                    </div>
                                    <div className=" row  mobile-car-des ">

                                        <div className="col-md-3 col-sm-6 col-6  col-back">
                                            <p>Start</p>
                                            <div className="icon-circle">
                                                <img src={mapicon} alt="" className="icon" />

                                            </div>
                                            <p className="icon-text text-center">Add pickup and drop off details</p>

                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 col-back">
                                            <p>Add Info</p>
                                            <div className="icon-circle">
                                                <div className="inner-circle">
                                                    <i className="fa fa-info "></i>
                                                </div>

                                            </div>
                                            <p className="icon-text text-center">Choose the day, time,<br /> passengers, other items </p>

                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 col-back">
                                            <p>Compare Quotes</p>
                                            <div className="icon-circle">

                                                <img src={lense} alt="" className="icon" />

                                            </div>
                                            <p className="icon-text text-center">Chose by vehicle type, rating,<br /> and fare price</p>


                                        </div>
                                        <div className="col-md-3 col-sm-6 col-6 col-back">
                                            <p>Book</p>
                                            <div className="icon-circle">
                                                <img src={briefcase} alt="" className="icon" />

                                            </div>
                                            <p className="icon-text text-center">Booking confirmation sent via <br /> text, email, App</p>


                                        </div>


                                    </div>
                                </div>


                            </div>
                            <div className="typeofcar" >
                                <div className=" heading-cars">
                                    <p className="heading-p">Cars <span className="heading">Types Available</span></p>
                                    <div className="cars-container">
                                        <div className="left-div">
                                            <button ref={prevRef} className="custom-prev-btn">
                                                <i className="fa fa-arrow-left "></i>
                                            </button>
                                        </div>

                                        <div className="container">
                                            <Swiper
                                                spaceBetween={0}
                                                slidesPerView={imagenumber}
                                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                                loop={true}
                                                cssMode={true}
                                                navigation={{
                                                    prevEl: prevRef.current,
                                                    nextEl: nextRef.current,
                                                }}
                                                onSwiper={(swiper) => {
                                                    // Enable the refs once Swiper is initialized
                                                    swiper.params.navigation.prevEl = prevRef.current;
                                                    swiper.params.navigation.nextEl = nextRef.current;
                                                    swiper?.navigation?.update();
                                                }}
                                                modules={[Autoplay]}
                                            >
                                                {
                                                    carsArray?.map((car) => {
                                                        return <SwiperSlide 
                                                        style={{
                                                            display:'flex',
                                                           justifyContent:'center'
                                                        }}
                                                        >
                                                            <div className="card cars-container">
                                                                <div className="carimage-back">
                                                                    <img
                                                                        className="cars-image"
                                                                        src={car.image} />
                                                                    <div className="cars-details">
                                                                        <h6>{car.heading}</h6>
                                                                        <p className="text-center">{car.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    })
                                                }

                                            </Swiper>


                                        </div>
                                        <div className="left-div">
                                            <button ref={nextRef} className="custom-prev-btn">
                                                <i className="fa fa-arrow-right "></i>
                                            </button>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                        <ReviewDetails />
                    </div>
                </div>
            </div>

        </>


    )
}

export default HomepageUser