import React, { useEffect } from "react"
import './search.css'
import location from '../../assets/maplocation.png'
import filter from '../../assets/Filter.png'

import car from '../../assets/Frame1410088005.png'
import { useNavigate } from "react-router-dom"
import FilterOption from "../../component/shared/filtersearch"
const SearchList = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (

        <>
            <div className="gradient-div-search">
                <div className="content-wraper">
                    {/* filter option for mobile */}
                    <div

                        className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">Filters</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <FilterOption />
                        </div>
                    </div>
                    {/* <p className="text-center">Search Result</p> */}
                    <div className="ridedetails-container">

                        <div className="inner-wraper">
                            <div className="ridede-item p-0 m-0">
                                <div>
                                    <img src={location} alt="" className="location-pin" />
                                </div>

                                <div className="text-section ml-3">
                                    <p>From: </p>
                                    <p>Heathrow Airport (LHR)</p>
                                </div>

                            </div>
                            <div className="ridede-item p-0 m-0">
                                <div>
                                    <img src={location} alt="" className="location-pin" />
                                </div>

                                <div className="text-section ml-3">
                                    <p>To: </p>
                                    <p>Central London (SW1A 1AA)</p>
                                </div>

                            </div>
                            <div className="ridede-item p-0 m-0">


                                <div className="text-section ml-3">
                                    <p>Date: </p>
                                    <p>15 Sep 2024</p>
                                </div>

                            </div>
                            <div className="ridede-item p-0 m-0">


                                <div className="text-section ml-3">
                                    <p>Time: </p>
                                    <p>06:35pm</p>
                                </div>

                            </div>
                            <div className="ridede-item p-0 m-0">


                                <div className="text-section ml-3">
                                    <p>Passengers: </p>
                                    <p>2 Adults</p>
                                </div>

                            </div>
                            <div className="ridede-item p-0 m-0">


                                <div className="text-section ml-3">
                                    <p>Car Seat: </p>
                                    <p>4 Seater</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="search-container">
                        <div className=" inner-container ">
                            <div className="row  mt-4">

                                {/* <!-- Filters Section --> */}
                                <div className="col-lg-3 sm-filter-div col-xl-3 col-xxl-3  mb-4">
                                    <h5 className="filter-text">Filters</h5>

                                    {/* <button
                                    className="fa-filter"
                                        type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                    > */}
                                    <div style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 20

                                    }}

                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                    >
                                        <img
                                            src={filter}
                                            className="fa-filter"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>

                                    {/* </button> */}

                                    <div className=" filter-section-sm   p-3 border rounded">
                                        <FilterOption />

                                        {/* mobile view */}


                                    </div>

                                </div>

                                {/* <!-- Available Suppliers Section --> */}
                                <div className="col-lg-9
 col-xl-9 col-xxl-9 car-section w-full   overflow-scroll ">

                                    <h5 className="mb-3 filter-text ">Available Suppliers</h5>


                                    <div className="row">
                                        {/* <!-- Card for Each Vehicle Option --> */}
                                        {
                                            Array.from({ length: 5 }, (_, index) => index + 1).map((item) => {
                                                return (
                                                    <div className=" column-gap-3  col-md-6 col-xl-6 mb-4 ">
                                                        <div className="vehicle-card">



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

                                                            <div className="d-flex m-3 pt-2 pb-2 flex-row align-items-center justify-content-between ">
                                                                <div
                                                                    onClick={() => navigate('/ourservice')}
                                                                    className="d-flex text-center  flex-row align-items-center justify-content-center  leara-more">
                                                                    Learn More
                                                                </div>
                                                                <div
                                                                    onClick={() => navigate('/ride-package-details')}

                                                                    className=" d-flex text-center  flex-row align-items-center justify-content-center  booked-now">
                                                                    Book Now

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                        {/* <!-- Repeat the above card structure for each vehicle option as needed --> */}
                                    </div>
                                    <div className="text-center mt-2">
                                        <button className="btn view-more-btn">View More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchList;