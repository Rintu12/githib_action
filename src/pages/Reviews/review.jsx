import React, { useEffect } from "react";
import './review.css'
import ReviewCom from "../../component/shared/ratingcom";
const CustomerReview = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="review-wraper">
                <div className="review-header">
                    <h6>Rate Your Recent Ride</h6>
                </div>

                <div className="submit-review-container">
                    <label htmlFor="" className="heading-customer-review">Select Ride</label>
                    <select name="" id="">

                        <option value="">Heathrow Airport to Central London - 20 Sep 2024 , 10:59 AM</option>
                    </select>
                    <div className="d-flex flex-column">
                        <label htmlFor="Overall Rating" className="heading-customer-review">Overall Rating</label>
                        <div className="star-rating">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span
                                    key={index}
                                    className={`star ${index < 4 ? 'filled' : ''}`}
                                //   onClick={() => handleClick(index + 1)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="" className="heading-customer-review">Your Review</label>

                        <textarea name="" id=""
                            className="customer-review-text"
                            placeholder="Tell us about your experience......."
                        ></textarea>
                    </div>
                    <button
                        onClick={() => navigate('/customer-review')}
                        className="post-review-btn">Submit Review</button>
                </div>
                <div className="review-header">
                    <h6>See Recent Reviews</h6>

                </div>
                <div className="submit-review-container">
                    <ReviewCom />
                    <ReviewCom />
                    <button
                        onClick={() => navigate('/customer-review')}
                        className="post-review-btn">view More Review</button>
                </div>

                <div className="review-header row">
                    <div className="col-6">
                        <h6>Rating Snapshot</h6>

                    </div>
                    <div className="col-6">
                        <h6>Average Rating</h6>
                    </div>


                </div>
                <div className="row reviw-show-container ">
                    <div className="col-6">
                        <div className="review-bar-rating">
                            <p className="pr-2">5</p>
                            <span

                                className={`star ${4 ? 'filled' : ''}`}

                            //   onClick={() => handleClick(index + 1)}
                            >
                                ★
                            </span>
                            <div className="bar-riviewrating ">
                                <div className="progres-bar-container"
                                style={{
                                    width:'70%'
                                }}
                                ></div>
                            </div>
                            <p className="pl-2">34544</p>
                        </div>
                        <div className="review-bar-rating">
                            <p className="pr-2">4</p>
                            <span

                                className={`star ${4 ? 'filled' : ''}`}

                            //   onClick={() => handleClick(index + 1)}
                            >
                                ★
                            </span>
                            <div className="bar-riviewrating ">
                            <div className="progres-bar-container"
                                style={{
                                    width:'50%'
                                }}
                                ></div>
                            </div>
                            <p className="pl-2">2544</p>
                        </div>
                        <div className="review-bar-rating">
                            <p className="pr-2">3</p>
                            <span

                                className={`star ${4 ? 'filled' : ''}`}

                            //   onClick={() => handleClick(index + 1)}
                            >
                                ★
                            </span>
                            <div className="bar-riviewrating ">
                            <div className="progres-bar-container"
                                style={{
                                    width:'30%'
                                }}
                                ></div>
                            </div>
                            <p className="pl-2">1544</p>
                        </div>
                        <div className="review-bar-rating">
                            <p className="pr-2">2</p>
                            <span

                                className={`star ${4 ? 'filled' : ''}`}

                            //   onClick={() => handleClick(index + 1)}
                            >
                                ★
                            </span>
                            <div className="bar-riviewrating ">
                            <div className="progres-bar-container"
                                style={{
                                    width:'20%'
                                }}
                                ></div>
                            </div>
                            <p className="pl-2">354</p>
                        </div>
                        <div className="review-bar-rating">
                            <p className="pr-2">1</p>
                            <span

                                className={`star ${4 ? 'filled' : ''}`}

                            //   onClick={() => handleClick(index + 1)}
                            >
                                ★
                            </span>
                            <div className="bar-riviewrating ">
                            <div className="progres-bar-container"
                                style={{
                                    width:'10%'
                                }}
                                ></div>
                            </div>
                            <p className="pl-2">54</p>
                        </div>
                    </div>

                    <div className="col-6 d-flex flex-row align-items-center overall-col">
                        <p className="overalltext">Over All Rating</p>
                        <div className="star-rating pl-3">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span
                                key={index}
                                className={`star ${index < 4 ? 'filled' : ''}`}
                            //   onClick={() => handleClick(index + 1)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CustomerReview