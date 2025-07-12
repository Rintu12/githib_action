import React, { useEffect } from "react";
import './style.css'
import { Accordion, Placeholder } from 'rsuite';

const TermsCondition = () => {

useEffect(() =>{
    document.querySelectorAll(".rs-panel-title").forEach((element) => {
        element.classList.add("heading-title_acc");
    });
},[])
useEffect(() => {
    window.scrollTo({
        top: 0,    // Scroll to the top of the page
        behavior: 'smooth'  // Smooth scroll
    });
}, [])
    return (
        <>
            <div className="wrapeer-cms">
                <div className="faq-accordian">
                    <Accordion style={{
                        // width: '100%'
                    }} defaultActiveKey={1} bordered>
                        <Accordion.Panel
                            // header={() => {
                            //     return (
                            //         <p style={{
                            //             fontSize: 30,
                            //             fontFamily: 'Outfit',
                            //             fontWeight: 600,
                            //             color: '#35AD0A',
                            //             marginLeft: 10
                            //         }}>Table Of Content</p>
                            //     )
                            // }}
                            header='Table Of Content'
                            eventKey={1}
                            caretAs={() => (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>
                                </>
                            )}
                        >
                            <div>
                                <ul
                                    // className="list-items-ul"
                                    style={{
                                        listStyle: 'number'
                                    }}
                                >
                                    <li className="list-items-ul pt-4 pb-3"

                                    > <a href="#introductton">Introduction</a>    </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#Eligibility">Eligibility</a>    </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#booking">Booking & Ride Service Terms    </a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#paymentsrefund">Payments & Refunds  </a>  </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#userconduct">User Conduct </a>   </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#libilityu">Liability</a>    </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#personalinfo">Account & Personal Information</a>    </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#theservice">Modifications to the Service  </a>  </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#termsservice">Termination of Service  </a>  </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#resolution">Dispute Resolution </a>   </li>

                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#law">Governing Law </a> </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#coninfo">Contact Information</a> </li>


                                </ul>
                            </div>
                            {/* <Placeholder.Paragraph /> */}
                        </Accordion.Panel>
                    </Accordion>

                    <div>
                        <div>
                            <p className="terms-list-heding" id="introductton"> 1 Introduction</p>
                            <p className="temrs-list-desc">Briefly introduce the company, RideNoww, and the purpose of the Terms and Conditions.</p>
                        </div>
                        <div>
                            <p className="terms-list-heding" id="Eligibility"> 2 Eligibility</p>
                            <p className="temrs-list-desc">Define who is eligible to use your services (age restrictions, account registration requirements, etc.).</p>
                        </div>
                        <div>
                            <p className="terms-list-heding" id="booking"> 3 Booking & Ride Service Terms</p>
                            <p className="temrs-list-desc">Explain the process for booking a ride, including responsibilities for both the rider and the driver.</p>
                        </div>
                        <div>
                            <p className="terms-list-heding" id="paymentsrefund"> 4 Payments & Refunds</p>
                            <p className="temrs-list-desc">Outline payment methods, refund policies, and how disputes regarding payments will be handled.</p>
                        </div>
                        <div>
                            <p className="terms-list-heding" id="userconduct"> 5 User Conduct</p>
                            <p className="temrs-list-desc">Set expectations for acceptable behavior for both passengers and drivers, including safety guidelines and prohibited activities (e.g., inappropriate behavior, property damage)</p>
                        </div>
                        <div>
                            <p className="terms-list-heding" id="libilityu"> 6 Liability</p>
                            <p className="temrs-list-desc">Limit your liability for any issues that may arise during rides, such as accidents, delays, or service disruptions. Mention third-party liability.</p>
                        </div>
                        <div>
                            <p className="terms-list-heding" id="personalinfo"> 7 Modifications to the Service</p>
                            <p className="temrs-list-desc">State that RideNoww reserves the right to modify or discontinue services at any time.</p>
                        </div>

                        <button className="read-more-term-btn">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsCondition;