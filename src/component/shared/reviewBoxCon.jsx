import totalsuit from '../../assets/g1.png.png'
import google from '../../assets/g2.png.png'

import drop from '../../assets/g3.png.png'


const ReviewDetails = () => {

    return (
        <>
            <div className="review-details-contaainer">
                <div className="d-flex     justify-content-start flex-column review-box-container">

                    <p className="ridenow">Who is <br /> RideNoww</p>



                    <p className="desc-ridenow">Excepteur sint occaecat cupidatat non<br />
                        proident, sunt in culpa qui officia deserunt<br />
                        mollit anim id es</p>



                </div>
                <div className="other-review-box col-3 col-sm-3">

                    <div>
                        <p className="text-center greate-text">Great</p>
                        <div className="start-container">
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                        </div>

                        <p className="review-text text-center">Based on 5,801 Reviews</p>
                        <div className='reviewimage'>
                            <img src={totalsuit}

                                alt="" />
                        </div>

                    </div>
                </div>
                <div className="other-review-box col-3 col-sm-3">
                    <div>
                        <p className="text-center greate-text">Great</p>
                        <div className="start-container">
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                        </div>
                        <p className="review-text text-center">Based on 5,801 Reviews</p>
                        <div className='reviewimage'>
                            <img src={google}

                                alt="" />
                        </div>
                    </div>
                </div>

                <div className="other-review-box col-3 col-sm-3 ">
                    <div>
                        <p className="text-center greate-text">Great</p>
                        <div className="start-container">
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                            <div className="review-start-box">
                                <span className="star-icon">&#9734;</span>
                            </div>
                        </div>
                        <p className="review-text text-center">Based on 5,801 Reviews</p>
                        <div className='reviewimage'>
                            <img src={drop}

                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ReviewDetails;