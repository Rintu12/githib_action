import React, { useEffect } from "react";
import { Accordion, Placeholder } from 'rsuite';

const CookisPolicy = () => {
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
                                    > <a href="#wahtcookies">What Are Cookies? </a> </li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    > <a href="#howusedcookies">How We Use Cookies</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#typescookies">Types of Cookies We Use</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#thiredcookies">Third-Party Cookies</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#managecookies">Managing Cookies</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#consent">Consent</a></li>
                                    <li
                                        className="list-items-ul pt-4 pb-3"
                                    ><a href="#change-cookipolicy">Changes to the Cookie Policy</a></li>
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
                        <p className="temrs-list-desc">Briefly explain what cookies are and the purpose of your cookie policy.</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="wahtcookies"> 2 What Are Cookies?</p>
                        <p className="temrs-list-desc">Provide a simple explanation of cookies (small files placed on the user's device to enhance the user experience).</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="howusedcookies"> 3 How We Use Cookies</p>
                        <p className="temrs-list-desc">Explain how your website uses cookies, such as for improving website functionality, remembering user preferences, or for analytics and marketing purposes.</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="typescookies"> 4 Types of Cookies We Use</p>
                        <p className="temrs-list-desc">Break down the different types of cookies your site uses, such as:</p>
                    </div>
                    <div class="table-responsive">
                        <table className="table mt-4">
                            <thead>
                                <tr>
                                    <th className="w-25 table-heading">Types Of Cookies</th>
                                    <th className=" table-heading">What it does</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-dec">Essential Cookies</td>
                                    <td className="td-dec">for website functionality</td>
                                </tr>
                                <tr>
                                    <td className="td-dec">Performance Cookies</td>
                                    <td className="td-dec"> to analyze website usage</td>
                                </tr>
                                <tr>
                                    <td className="td-dec">Functional Cookies</td>
                                    <td className="td-dec">to remember user preferences</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="thiredcookies"> 5 Third-Party Cookies</p>
                        <p className="temrs-list-desc">Explain any third-party cookies used on your site, such as for social media integrations or analytics services like Google Analytics.</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="managecookies"> 6 Managing Cookies</p>
                        <p className="temrs-list-desc">Provide instructions for users to manage their cookie preferences, including how they can enable, disable, or delete cookies in their browser settings.</p>
                    </div>
                    <div>
                        <p className="terms-list-heding" id="consent"> 7 Consent</p>
                        <p className="temrs-list-desc">Clarify that by continuing to use the website, users consent to the use of cookies.</p>
                    </div>
                    <button
                        onClick={() => navigate('/cookies&policy')}
                        className="read-more-term-btn">Read More</button>
                </div>
            </div>
        </>
    )
}

export default CookisPolicy;
