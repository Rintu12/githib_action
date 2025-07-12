import React, { Profiler, useEffect } from "react";
import './blogDetails.css';
import accpng from '../../../assets/profile.png'
import blogdetails from '../../../assets/blogdetails.png'
import social1 from '../../../assets/social/Socialicon(2).png'
import social2 from '../../../assets/social/Socialicon(3).png'
import social3 from '../../../assets/social/Sociallicon(4).png'
import social4 from '../../../assets/social/Socialicon(5).png'

import img1 from '../../../assets/blogdetails/image11.png'
import img2 from '../../../assets/blogdetails/image12.png'
import img3 from '../../../assets/blogdetails/image13.png'
import ReviewCom from "../../../component/shared/ratingcom";
import "../../../component/Header/header.css";
import { useNavigate } from "react-router-dom";


const BlogDetailsPage = () => {

    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="blog-details-wraper">
                <div className="blogdetails-container">
                    <h6>Exploring London:  Top 10 Hidden Gems</h6>
                    <div className="blogacc-publish ">
                        <img src={accpng}
                           
                            alt="" />
                        <div className="accdetails">
                            <p>John Doe</p>
                            <p>Published on September 21 ,2024</p>
                        </div>
                    </div>

                    <div className="blg-image">
                        <img src={blogdetails} className="img-responsive"
                            
                            alt="" />

                        <p className="blog-desc-text">London is a city brimming with history and culture, often known for its iconic landmarks and bustling attractions. However, hidden within its vibrant neighborhoods are charming spots that offer a unique perspective on the city's character. From quaint bookshops to serene gardens, these lesser-known locations invite exploration and discovery. Delve into London’s hidden gems to uncover delightful experiences that go beyond the typical tourist trail</p>
                    </div>

                    <label htmlFor="" className="blog-label-ul">1. Daunt Books</label>
                    <p className="blog-desc-text">A beautiful Edwardian bookshop in Marylebone, Daunt Books specializes in travel literature and features stunning oak galleries, making it a must-visit for book lovers.</p>
                    <label htmlFor="" className="blog-label-ul">2. Postman’s Park</label>
                    <p className="blog-desc-text">Nestled in the heart of the city, Postman’s Park is a peaceful oasis that honors heroic self-sacrifice with a poignant memorial dedicated to those who lost their lives saving others.</p>

                    <label htmlFor="" className="blog-label-ul">Share Now This Post</label>
                    <div className="social-icon-blogdetails">
                        <img src={social1} alt=""
                           
                        />
                        <img src={social2} alt=""
                           
                        />
                        <img src={social3} alt=""
                            
                        />
                        <img src={social4} alt=""
                           
                        />
                    </div>


                    <label htmlFor="" className="blog-label-ul">Related Post</label>
                    <div className="blog-list-item">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 flex-wrap mt-4 ">
                            <div className="col ">
                                <div className="relaetd-blog">
                                    <div className="relaetd-blog-image">
                                    <img src={img1}
                                        
                                        alt="" />
                                    </div>
                                 
                                    <p>5 Visit Attractions in London</p>
                                    <p>Date& Time: 19 Sep,2024, 12:20AM</p>

                                    <button className="view-post-btn">View Post</button>

                                </div>
                            </div>
                            <div className="col">
                             <div className="relaetd-blog">
                                <div className="relaetd-blog-image" >
                                    <img src={img2}
                                        
                                        alt="" />
                                    </div>
                                  
                                    <p>We Introduces E-Vehicle Fleet</p>
                                    <p>Date& Time: 19 Sep,2024, 12:20AM</p>

                                    <button className="view-post-btn">View Post</button>

                                </div>
                            </div>
                            <div className="col">
                                <div className="relaetd-blog">
                                    <div className="relaetd-blog-image" >
                                    <img src={img2}
                                       
                                       alt="" />
                                    </div>
                                   
                                    <p>London’s Public Bus System</p>
                                    <p>Date& Time: 19 Sep,2024, 12:20AM</p>

                                    <button className="view-post-btn">View Post</button>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="line-divider"></div>

                    <p className="blog-label-ul">Comments</p>

                    <ReviewCom />
                    <ReviewCom />

                    <p className="blog-label-ul">Leave A Comment</p>

                    <div>
                        <div className="row ">
                            <div className="col-12 postcomment-row">
                                <div className="row postcomment-row">
                                    <div className="col-6 postcomment-col">
                                        <label htmlFor="">Name</label>
                                        <input type="text"
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                    <div className="col-6 postcomment-col">
                                        <label htmlFor="">Email Address</label>
                                        <input type="text"
                                            placeholder="Enter Email Address"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 postcomment-col">
                                <label htmlFor="">Comment</label>
                                <textarea type="text"
                                    placeholder="Tell us about your thought.."
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/customer-review')}
                            className="post-review-btn">Post Comment</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogDetailsPage;