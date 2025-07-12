import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion, Placeholder } from 'rsuite';

const PrivacyPolicyCom = () => {
 const navigate = useNavigate()
    useEffect(() => {
        document.querySelectorAll(".rs-panel-title").forEach((element) => {
            element.classList.add("heading-title_acc");
        });
    }, [])
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

                                    ><a href="#introduction">Introduction</a>    </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#info-collecct">Information We Collect  </a>  </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#how-used-info">How We Use Your Information </a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#sharing-info">Sharing Your Information</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#data-secuirity">Data Security</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3 "
                                    ><a href="#your-rights">Your Rights</a> </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#tracing-tech">Cookies and Tracking Technologies</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#change-policy">Changes to this Privacy Policy</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#contact-us">Contact Us</a></li>


                                </ul>
                            </div>
                            {/* <Placeholder.Paragraph /> */}
                        </Accordion.Panel>
                    </Accordion>

                    <div>
                        <p className="terms-list-heding" id="introduction" > 1 Introduction</p>
                        <p className="temrs-list-desc">At RideNoww, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="info-collecct">2 Information We Collect</p>
                        <ul>
                            <li className="temrs-list-desc">Personal Data: Name, contact information, payment details, and ride history.</li>
                            <li className="temrs-list-desc">Location Data: Real-time location during rides for accurate pick-up and drop-off.</li>
                            <li className="temrs-list-desc">Device Information: IP address, browser type, and operating system for service optimization.</li>
                            <li className="temrs-list-desc">Payment Information: Details for processing payments securely.</li>
                        </ul>
                    </div>

                    <div>
                        <p className="terms-list-heding" id="how-used-info">3 How We Use Your Information</p>
                        <ul>

                            <li className="temrs-list-desc">To process and manage your bookings.</li>
                            <li className="temrs-list-desc">To provide you with personalized ride experiences.</li>
                            <li className="temrs-list-desc">For payment processing and fraud prevention.</li>
                            <li className="temrs-list-desc">To improve our services through data analytics.</li>
                            <li className="temrs-list-desc">To communicate promotions, updates, or important service information</li>
                        </ul>
                    </div>


                    <div>
                        <p className="terms-list-heding" id="sharing-info">4 Sharing Your Information</p>
                        <ul>

                            <li className="temrs-list-desc">With Drivers: Basic details like your name and location are shared with drivers to fulfill your ride.</li>
                            <li className="temrs-list-desc">Service Providers: We may share information with third parties who help us operate the platform (e.g., payment processors).</li>
                            <li className="temrs-list-desc">Legal Requirements: We may disclose information to comply with legal obligations or protect the rights and safety of our users.</li>

                        </ul>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="data-secuirity">5 Data Security</p>
                        <p className="temrs-list-desc">We use advanced security measures, including encryption and secure servers, to protect your personal data.</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="your-rights">6 Your Rights</p>
                        <ul>
                            <li className="temrs-list-desc">Access and Correction: You can review and update your personal information through your account.</li>
                            <li className="temrs-list-desc">Data Deletion: Request deletion of your personal data if no longer necessary for the services.</li>
                            <li className="temrs-list-desc">Marketing Preferences: You can opt-out of receiving promotional communications at any time.</li>
                        </ul>
                    </div>
                    <button 
                    onClick={() => navigate('/cookies&policy')}
                    className="read-more-term-btn">Read More</button>
                </div>
 
            </div>
        </>
    )
}


export default PrivacyPolicyCom;