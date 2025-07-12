import React, { useEffect } from "react";
import { Accordion, Placeholder } from 'rsuite';

const CancialationPolicy = () => {
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

                                    > <a href="#introduction">Introduction</a>    </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    > <a href="#cantimeandfee">Cancellation by the user Timeframes and Fees </a> </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    > <a href="#cancellatoinbydriver">Cancellation by the Driver</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#noshowpolicy">No-Show Policy</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#refunds">Refunds</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#changebooking">Changes to the Booking</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#circumtanse">Exceptional Circumstances</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#howcancell">How to Cancel</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#contact-infor">Contact Information</a></li>


                                </ul>
                            </div>
                            {/* <Placeholder.Paragraph /> */}
                        </Accordion.Panel>
                    </Accordion>

                    <div>
                        <p className="terms-list-heding  " id="introduction" > 1 Introduction</p>
                        <p className="temrs-list-desc">Briefly introduce the purpose of the Cancellation Policy and how it applies to users of the service.</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="cantimeandfee"> 2 Cancellation by the user Timeframes and Fees</p>
                       
                        <p className="temrs-list-desc">Clarify if there are any fees for late cancellations (e.g., if the user cancels within a short window before the ride starts</p>

                        <div class="table-responsive">
                        <table className="table mt-4">
                            <thead>
                                <tr>
                                    <th className="w-75 table-heading">Time of Cancellation</th>
                                    <th className=" table-heading">Cancellation Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-dec">More than 24 hours before  pickup</td>
                                    <td className="td-dec">No Fee</td>
                                </tr>
                                <tr>
                                    <td className="td-dec">12-24 hours before  pickup</td>
                                    <td className="td-dec"> 25% of the fee</td>
                                </tr>
                                <tr>
                                    <td className="td-dec">2-12 hours before  pickup</td>
                                    <td className="td-dec">50% of the fee</td>
                                </tr>
                                <tr>
                                    <td className="td-dec">Less than 2 hours before  pickup</td>
                                    <td className="td-dec">100% of the fee</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    </div>
                    <div>
                        <p className="terms-list-heding" id="cancellatoinbydriver"> 3 Cancellation by the Driver</p>
                        <p className="temrs-list-desc">Explain the circumstances under which a driver may cancel a booking, such as vehicle issues or unavailability.</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="noshowpolicy"> 4 No-Show Policy</p>
                        <p className="temrs-list-desc">Define what constitutes a "no-show" and what penalties or fees may apply if the rider fails to show up.</p>
                    </div>
                  
                    <div>
                        <p className="terms-list-heding" id="refunds"> 5 Refunds</p>
                        <p className="temrs-list-desc">Outline when and how refunds will be issued for canceled rides, including the time frame for receiving refunds.</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="changebooking"> 6 Changes to the Booking</p>
                        <p className="temrs-list-desc">Explain whether users can modify an existing booking and under what conditions (e.g., change of time or destination).</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="circumtanse"> 7 Exceptional Circumstances</p>
                        <p className="temrs-list-desc">Specify any situations where cancellation fees may be waived (e.g., emergencies, natural disasters).</p>
                    </div>
                    <button
                        onClick={() => navigate('/cookies&policy')}
                        className="read-more-term-btn">Read More</button>
                </div>
            </div>
        </>
    )
}

export default CancialationPolicy;
