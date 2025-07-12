import React, { useEffect } from "react";
import './cussupport.css'
import livecchat from '../../assets/live.png'
import emails from '../../assets/emails.png'
import phones from '../../assets/phonesupport.png'
import faq from '../../assets/faq.png'
import conper from '../../assets/contactperson.png'
import { useNavigate } from "react-router-dom";

const CustomerSupport = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="cus-suppo-div">
                <h6 className="text-center">Search Our Knowledge Base</h6>
                <p className="text-center">Find quick answers to common questions in our comprehensive knowledge base</p>

                <div className="support-content">
                    <div className="row pt-5 pb-3">
                        <div className="col-10 col-sm-10 col-md-10 ">
                            <input className=" support-search blog-serach-box"
                                placeholder="Search for answers"
                            />
                        </div>
                        <div className="col-2 col-sm-10 col-md-10">
                            <button className="search-btn">Search 
                            <i class="fa fa-search " aria-hidden="true"></i>
                            </button>

                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 flex-wrap mt-4 ">

                        <div className="col ">
                            <div className="detail-wraper ">
                                <div>
                                    <img src={livecchat}

                                        alt="" />
                                </div>

                                <p >Live Chat Support</p>
                                <p className="text-center">Chat with our support team in real {'\n'}
                                    time for immediate assistance</p>

                                <button className="support-btn">Start Live Chat </button>
                            </div>
                        </div>

                        <div className="col ">
                            <div className="detail-wraper ">
                                <div>
                                    <img src={emails}

                                        alt="" />
                                </div>

                                <p >Email Support</p>
                                <p className="text-center">Send us an email and we’ll get back {'\n'} to you within 24 hours</p>

                                <button className="support-btn">Email Us</button>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="detail-wraper ">
                                <div>
                                    <img src={phones}

                                        alt="" />
                                </div>

                                <p >Phone Support</p>
                                <p className="text-center">Call us directly for urgent matters {'\n'}
                                    or complex issues.</p>

                                <button className="support-btn">Call Now </button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="ask-question-div">
                    <div className="d-flex flex-row justify-content-between">

                        <div className="frequenly-ask">
                            <h6>Frequently Asked Questions</h6>
                            <p>Browse our frequently asked questions for quick answers</p>

                            <button className="view-faq-btn"
                                onClick={() => navigate('/faq')}
                            >View FAQs</button>

                        </div>
                        <div className="faq-image-icon">
                            <img src={faq} alt="" />
                        </div>

                    </div>
                </div>
                <div className="contact-information">
                    <div className="contact-wraper">
                        <h6>Contact Information</h6>
                        <div className="d-flex flex-row justify-content-between">
                            <div>
                                <p>Phone Number : <span>+44 1234 567890</span></p>
                                <p>Our Email  : <span>support@ridenoww.com</span></p>
                                <p>Hours  : <span>24/7 for urgent matters, 9am-6pm GMT for general inquiries</span></p>
                                <p>Address : <span>123 RideNoww Street, London, United Kingdome, SW1A 1AA</span></p>

                            </div>
                            <div>
                                <img src={conper} class="img-fluid" alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="support-tickit">
                    <h6 className="m-3">Submit a Support Ticket</h6>
                    <div className="support-form">
                        <div className="row">
                            <div className="col-6 support-input">
                                <label htmlFor="" >Name</label>
                                <input type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="col-6 support-input">
                                <label htmlFor="">Email Address</label>
                                <input type="text"

                                    placeholder="Email Address"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 support-input">
                                <label htmlFor="">Subject</label>
                                <input type="text"
                                    placeholder="Subject"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 support-input">
                                <label htmlFor="">Message</label>
                                <textarea type="text"
                                    placeholder="Message"
                                />
                            </div>
                        </div>
                        <button className="submit-tickit-btn">Submit Ticket </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerSupport;