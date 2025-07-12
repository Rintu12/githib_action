import React, { useEffect } from "react";
import './contact.css';
import livecchat from '../../assets/live.png'
import emails from '../../assets/emails.png'
import phones from '../../assets/phonesupport.png'
import contactUs from '../../assets/contactus.png'

import { Accordion, Placeholder } from 'rsuite';
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="contan-us-main-wraper">
                <h6 className="contact-heading-text text-center">Get in touch with us through any of the options below</h6>
                <div className="row m-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 flex-wrap mt-4 pt-3 ">

                    <div className="col-md-4 ">
                        <div className="detail-wraper ">
                            <div>
                                <img src={phones}

                                    alt="" />

                            </div>

                            <p >Phone</p>
                            <p className="text-center">Call Us for immediate Support</p>

                            <button className="support-btn">+44 1234 567890 </button>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="detail-wraper ">
                            <div>
                                <img src={emails}

                                    alt="" />
                            </div>

                            <p >Email</p>
                            <p className="text-center">Send us an email anytime </p>

                            <button className="support-btn">support@ridenoww.com</button>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="detail-wraper ">
                            <div>
                                <img src={livecchat}

                                    alt="" />
                            </div>

                            <p >Live Chat </p>
                            <p className="text-center">Chat with our support team </p>

                            <button className="support-btn"
                                onClick={() => navigate('/blog-list')}
                            >Start  Chat  </button>
                        </div>
                    </div>
                </div>

                <div className="contact-us-form">
                    <div className="row p-2 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 flex-wrap">
                        <div className="col-md-6  column-contactus ">

                            <p className="contact-heading-text">Send Us a Message</p>
                            <div className="mt-4">
                                <div className="row ">
                                    <div className="col-12 send-message">
                                        <label htmlFor="">Name</label>
                                        <input type="text"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-2 ">
                                    <div className="col-6 col-md-6 col-lg-6 send-message">
                                        <label htmlFor="">Email Address</label>
                                        <input type="text"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-6 col-md-6 col-lg-6  send-message">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-12 send-message">
                                        <label htmlFor="">Subject</label>
                                        <input type="text"
                                            placeholder="Subject"
                                        />
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-12 send-message">
                                        <label htmlFor="">Message</label>
                                        <textarea type="text"
                                            placeholder="Message"
                                        />
                                    </div>
                                </div>
                                <button className="send-message-btn">Send Message</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p className="contact-heading-text">Visit Us</p>
                            <div className="cont-image">
                                <img src={contactUs} alt="" className="mt-4  "

                                />
                            </div>

                            <div className="contactus-field mt-3">
                                <p>RideNoww Ltd.</p>
                                <p className="conta-seb-text-heading"> 123 RideNoww Street, London, UK, SW1A 1AA</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="accordian-div">
                    <h6 className="fre-text-ask">Frequently Asked Questions</h6>
                    <Accordion style={{
                        // width: '100%'
                    }} defaultActiveKey={1} bordered>
                        <Accordion.Panel header="How do I book a ride with RideNoww ?" eventKey={1}
                            caretAs={() => (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>
                                </>
                            )}
                        >
                            <p>To book a ride with RideNoww, open the app or visit the website, enter your pick-up location and destination, select your preferred ride option, choose any additional services if needed, confirm your booking, make the payment, and then track your ride in real-time until your journey begins.</p>
                            {/* <Placeholder.Paragraph /> */}
                        </Accordion.Panel>
                        <Accordion.Panel header="Can i book a ride in advance" eventKey={2}
                            // caretAs={FaArrowAltCircleDown}
                            caretAs={() => (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>
                                </>
                            )}
                        >
                            <Placeholder.Paragraph />
                        </Accordion.Panel>
                        <Accordion.Panel header="What Payment method you accept"
                            eventKey={3}
                            caretAs={() => (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>
                                </>
                            )}
                        // caretAs={FaArrowDown}

                        >
                            <Placeholder.Paragraph />
                        </Accordion.Panel>
                    </Accordion>
                </div>

            </div>
        </>
    )
}

export default ContactUs