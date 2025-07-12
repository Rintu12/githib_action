import React from "react";
import './style.css'
// import helpfull from '../../assets/🚩Report.png'
const ReviewCom = () => {


    return (
        <>
            <div className="review-wraper">
                <div className="profile-div">
                    <p>John Jams</p>
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

                <p className="pub-date-time">Heathrow Airport to Central London - 20 Sep 2024 , 10:59 AM</p>
                <p className="review-details-text">The ride was smooth and comfortable. The driver was polite and punctual. I appreciated the clean interior and the overall service. Would definitely book again, though I wish there were more luxury options available.</p>
                <div style={{
                    marginTop: 20
                }}>
                    <i class="fa fa-thumbs-up" aria-hidden="true"><span className="helpfulltext">Helpful</span></i>
                    {/* <img src={helpfull} alt="" style={{
                        paddingLeft: 30
                    }} /> */}
                </div>
            </div>
        </>
    )
}

export default ReviewCom