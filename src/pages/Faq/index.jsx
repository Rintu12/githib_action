import React, { useEffect } from "react";
import './stylefaq.css';
import { Accordion, Placeholder } from 'rsuite';
import { useNavigate } from "react-router-dom";

const FaqPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="faq-wraper">
                <h6 className="faq-heading text-center">Search for answers</h6>
                <div className="faq-search-box row">
                    <input type="text"
                        className="col-10"
                        name="" id=""
                        placeholder="Search FAQs............"
                    />
                    <button className="col-2">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>

                <div className="content-faq-heding">
                    Booking and Reservations
                </div>
                <div className="faq-accordian">
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
                        <Accordion.Panel header="Can i book a ride in advance" eventKey={1}
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
                    </Accordion>
                </div>
                <div className="content-faq-heding">
                    Pricing and Payment
                </div>
                <div className="faq-accordian">
                    <Accordion style={{
                        // width: '100%'
                    }} bordered>
                        <Accordion.Panel header="How is Fare calculated" eventKey={1}
                            caretAs={() => (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>
                                </>
                            )}
                        >
                            {/* <p>To book a ride with RideNoww, open the app or visit the website, enter your pick-up location and destination, select your preferred ride option, choose any additional services if needed, confirm your booking, make the payment, and then track your ride in real-time until your journey begins.</p> */}
                            <Placeholder.Paragraph />
                        </Accordion.Panel>
                        <Accordion.Panel header="What Payment method you accept" eventKey={1}
                            caretAs={() => (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>
                                </>
                            )}
                        >
                            {/* <p>To book a ride with RideNoww, open the app or visit the website, enter your pick-up location and destination, select your preferred ride option, choose any additional services if needed, confirm your booking, make the payment, and then track your ride in real-time until your journey begins.</p> */}
                            <Placeholder.Paragraph />
                        </Accordion.Panel>
                    </Accordion>
                </div>
                <div className="content-faq-heding">
                    During Your Ride
                </div>
                <div className="faq-accordian">
                    <Accordion style={{
                        // width: '100%'
                    }} bordered>
                        <Accordion.Panel header="What if my flight delayed ?" eventKey={1}
                            caretAs={() => (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>
                                </>
                            )}
                        >
                            {/* <p>To book a ride with RideNoww, open the app or visit the website, enter your pick-up location and destination, select your preferred ride option, choose any additional services if needed, confirm your booking, make the payment, and then track your ride in real-time until your journey begins.</p> */}
                            <Placeholder.Paragraph />
                        </Accordion.Panel>
                        <Accordion.Panel header="Can i bring luggage with me" eventKey={1}
                            caretAs={() => (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>
                                </>
                            )}
                        >
                            {/* <p>To book a ride with RideNoww, open the app or visit the website, enter your pick-up location and destination, select your preferred ride option, choose any additional services if needed, confirm your booking, make the payment, and then track your ride in real-time until your journey begins.</p> */}
                            <Placeholder.Paragraph />
                        </Accordion.Panel>
                    </Accordion>
                </div>

                <div className="d-flex flex-row mt-5 align-items-center">
                    <p className="cannot-text-answer">Cant Find the Answer you're  looking for ?</p>
                    <button
                        onClick={() => navigate('/customer-support')}
                        className="contactsuppt-btn">Contact Support</button>
                </div>
            </div>
        </>
    )
}

export default FaqPage;