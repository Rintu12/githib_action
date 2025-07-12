import React, { useEffect } from "react";
import './bloglist.css';
import blogcar1 from '../../assets/blogcar1.png'
import blogcar2 from '../../assets/blog2.png';
import blogcar3 from '../../assets/blog3.png'
import social1 from '../../assets/social/Socialicon(2).png'
import social2 from '../../assets/social/Socialicon(3).png'
import social3 from '../../assets/social/Sociallicon(4).png'
import social4 from '../../assets/social/Socialicon(5).png'

import newsletter from '../../assets/image32.png'
import { Link } from "react-router-dom";

const BlogListPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="blog-main-wraper">
                <div className="blog-list">
                    <div className="blog-header d-flex flex-row justify-content-between align-items-center">
                        <h6>Our Latest News</h6>
                        <div className="submit-email">
                                    <div className="row">
                                        <div className="col-9 col-sm-9 col-md-9">
                                            <input className="blog-serach-box"
                                                placeholder="Search Blog"
                                            />
                                        </div>
                                        <div className="col-3 col-sm-3 col-md-3">
                                            <button className="search-btn">
                                                Search
                                                <i class="fa fa-search " aria-hidden="true"></i>
                                                </button>

                                        </div>
                                    </div>

                                </div>

                    </div>
                    <div className="blog-list-item">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 flex-wrap mt-4 ">

                            <div className="col ">
                                <div className="bolg-item">
                                <div className="news-image">
                                    <img src={blogcar1}
                                       
                                       alt="" />
                                    </div>
                                    
                                    <div className="blog-content">
                                        <p>RideNoww Introduces Electric {'\n'}
                                            Vehicle Fleet  </p>
                                        <p  >
                                            We are excited to announce that RideNoww is {'\n'} introducing a brand-new electric vehicle (EV) fleet {'\n'} to our services! As part of our
                                            <Link to='/blog-details'> Read More</Link>
                                        </p>
                                    </div>

                                    <div className="extra-content-bottom">
                                        {/* <div className="d-flex flex-row justify-content-evenly"> */}
                                            <p className="">Published On 20 Sep,2024</p>
                                            {/* <div className="d-flex  bg-primary flex-row pl-1"> */}
                                                
                                                <img
                                                style={{
                                                    width:24,
                                                    height:24,
                                                }}
                                                src={social1}
                                                   
                                                    alt="" />
                                                <img 
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social2}
                                                   
                                                    alt="" />
                                                <img
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social3}
                                                   
                                                    alt="" />
                                                <img 
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social4}
                                                   
                                                    alt="" />
                                            {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="bolg-item">
                                <div className="news-image">
                                    <img src={blogcar2}
                                       
                                       alt="" />
                                    </div>
                                  
                                    <div className="blog-content">
                                        <p>New Features in Our Mobile {'\n'}
                                            Application   </p>
                                        <p  >
                                            We are thrilled to introduce new features in the RideNoww mobile app, designed to enhance your overall experience! With our
                                            <Link to='/blog-details'> Read More</Link>
                                        </p>
                                    </div>

                                    <div className="extra-content-bottom">
                                        {/* <div className="d-flex flex-row"> */}
                                            <p>Published On 20 Sep,2024</p>
                                            {/* <div className="d-flex flex-row pl-1"> */}
                                                <img
                                                style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social1}
                                                   
                                                    alt="" />
                                                <img 
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social2}
                                                   
                                                    alt="" />
                                                <img
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social3}
                                                   
                                                    alt="" />
                                                <img 
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social4}
                                                   
                                                    alt="" />
                                            {/* </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="bolg-item">
                                <div className="news-image">
                                    <img src={blogcar3}
                                       
                                       alt="" />
                                    </div>
                                   
                                    <div className="blog-content">
                                        <p>RideNoww Partners with local {'\n'}
                                            Hotels  </p>
                                        <p  >
                                            We are excited to announce that RideNoww has {'\n'} partnered with a selection of local hotels to {'\n'} provide guests with seamless an   <Link to='/blog-details'> Read More</Link>
                                        </p>
                                    </div>

                                    <div className="extra-content-bottom">
                                        {/* <div className="d-flex flex-row"> */}
                                            <p>Published On 20 Sep,2024</p>
                                            {/* <div className="d-flex flex-row pl-1"> */}
                                                <img
                                                style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social1}
                                                   
                                                    alt="" />
                                                <img 
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social2}
                                                   
                                                    alt="" />
                                                <img
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social3}
                                                   
                                                    alt="" />
                                                <img 
                                                 style={{
                                                    width:24,
                                                    height:24
                                                }}
                                                src={social4}
                                                   
                                                    alt="" />
                                            {/* </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="pagination-blog-wraper">
                            <div className="pagination-container">
                                <button className="previous-btn">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                    </svg>

                                    Previous
                                </button>
                                <div className="pagination-box">
                                    <button>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                </div>
                                <button className="next-pagiantion-btn">



                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-letter-section">
                    <div className="news-letter-wraper">
                        <h6>Subscribe To Our Newsletter</h6>
                        <div className="d-flex flex-row justify-content-between p-3">
                            <div>
                                <p className="news-leter-text">Stay UpToDate with the latest news , updates, and offers from RideNoww</p>

                                <div className="submit-email">
                                    <div className="row">
                                        <div className="col-8">
                                            <input className="blog-serach-box"
                                                placeholder="Enter your Email"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <button className="search-btn">Subscribe</button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="newsletter-car-image">
                            <img src={newsletter}
                                
                                alt="" />
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="follow-us-div">
                    <h6 className="">Follow Us On</h6>

                    <button className="social-btn">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        <p className="ml-2">Facebook</p>
                    </button>
                    <button className="social-btn">
                        <i class="fa fa-instagram" aria-hidden="true"></i>

                        <p className="ml-2">Instagram</p>
                    </button>
                    <button className="social-btn">
                        <i class="fa fa-twitter" aria-hidden="true"></i>

                        <p className="ml-2">X(Twitter)</p>
                    </button>
                    <button className="social-btn">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>


                        <p className="ml-2">LinkedIn</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BlogListPage;