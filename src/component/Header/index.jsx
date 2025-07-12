import { useEffect, useState } from 'react'
import './header.css'
import logo from '../../assets/headerback.png'
import brandlogo from '../../assets/logo.png'
import brandlogoscroll from '../../assets/footerlogo.png'
import settingimg from '../../assets/settings1.png'
import carmenu from '../../assets/Vector.png'
import business from '../../assets/business1.png'
import business_partner from '../../assets/business-partner1.png'
import destination from '../../assets/map1.png'
import Vector from '../../assets/vector.png'
import call from '../../assets/call.png'
import support from '../../assets/message.png'
import { useNavigate } from 'react-router-dom'

import haderback from '../../assets/headerback.png'
function HeaderComponent() {
    const navigate = useNavigate()
    const [backHeight, setbackHeight] = useState(0);
    const [isuserlogin, setisloginUser] = useState(false);
    const [hadertext, setheaderText] = useState('');
    const [hasScrolled40, setHasScrolled40] = useState(false);
    const [settingnav, setsettingnav] = useState(false);
    const [subtext, setsubtext] = useState('')
    const [sidenavsetting, setsiddebarsetting] = useState(window.innerWidth)

    useEffect(() => {
        switch (window.location.pathname) {
            case '/user-search-car':
                setheaderText('Search Results')
                setsubtext('')
                setisloginUser(false)
                setbackHeight(385)
                break;
            case '/ride-package-details':
                setheaderText('Ride Package Detail')
                setsubtext('')
                setisloginUser(true)
                setbackHeight(221)
                break;
            case '/booking-details':
                setheaderText('')
                setsubtext('')

                setisloginUser(false)
                setbackHeight(250)
                break;
            case '/booking-payment':
                setheaderText('Payment Now')
                setsubtext('')

                setisloginUser(false)
                setbackHeight(250)
                break;
            case '/booking-confirm':
                setheaderText('Airport Taxi Booking')
                setsubtext('')

                setisloginUser(false)
                setbackHeight(250)
                break;
            case '/auth/user-resister':
                setheaderText('User Registration')
                setsubtext('')

                setisloginUser(false)
                setbackHeight(250)
                break;
            case '/auth/userlogin':
                setheaderText('User Login')
                setsubtext('')

                setisloginUser(false)
                setbackHeight(250)
                break;
            case '/user/user-dashboard':
                setheaderText('')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(100)
                break;
            case '/user/managebooking':
                setheaderText('Manage Your Booking')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(250)
                break;
            case '/user/userprofile':
                setheaderText('')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(100)
                break;
            case '/ourservice':
                setheaderText('Our Services')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/customer-support':
                setheaderText('Help and Customer Support')
                setsubtext('We ‘re Here to assist you with any Questions or Concerns')
                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/contact-us':
                setheaderText('Contact Us')
                setsubtext('We ‘re Here to help Get in touch with us')
                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/blog-list':
                setheaderText('News and Updates')
                setsubtext('Stay Informed about RideNoww and the latest in transportation')
                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/blog-details':
                setheaderText('RideNoww Blog')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/customer-review':
                setheaderText('Customer Ratings and Reviews')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/':
                setheaderText('')
                setsubtext('')

                setisloginUser(false)
                setbackHeight(777)
                break;
            case '/faq':
                setheaderText('Frequently Asked Questions')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/terms&condition':
                setheaderText('Terms and Conditions')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/privacy&policy':
                setheaderText('Privacy and Policy')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/cookies&policy':
                setheaderText('Cookies Policy')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(300)
                break;
            case '/cancellation-policy':
                setheaderText('Cancellation Policy')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(250)
                break;
            case '/operator/dashboard':
                setheaderText('')
                setsubtext('')

                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/supplier-signup':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/job-management':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/supplier-signup':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/analytics':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/discount':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/driver-management':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/earnings':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/extra-income':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/invoice-history':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
           
            case '/operator/manage-fleet':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/ratings-review':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/riderequest':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/settings':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/support':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/milesprice':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/location-price':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/postcode-price':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/driver-list':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/invoice-details':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
            case '/operator/driver-profile':
                setsubtext('')

                setheaderText('')
                setisloginUser(true)
                setbackHeight(150)
                break;
        

            default:
                setheaderText('')
                setsubtext('')

                setisloginUser(false)
                setbackHeight(777)
                break;
        }
    }, [window.location.pathname])

    useEffect(() => {

        const handleResize = () => {
            setsiddebarsetting(window.innerWidth)
            console.log(window.innerWidth, 'widthh')
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window.innerWidth])

    const handleScroll = () => {
        console.log('scrolll')
        const scrollTop = window.scrollY; // Pixels scrolled from the top
        const windowHeight = window.innerHeight; // Height of the visible part of the page
        const docHeight = document.body.scrollHeight; // Total height of the page

        const scrollPercentage = (scrollTop / (docHeight - windowHeight)) * 100;

        // const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        console.log(scrollPercentage, 'percefa')
        if (scrollPercentage >= 10) {
            console.log('loggg ennr')
            setHasScrolled40(true);

            // You can trigger other actions here
        } else {
            setHasScrolled40(false)
        }
    };

    function closesidebar() {
        let navLinks = document.querySelector(".nav-links");
        navLinks.style.left = "-100%";

    }
    useEffect(() => {
        console.log('scrolll..')
        window.addEventListener('scroll', handleScroll, true);
        return () => {
            window.removeEventListener("scroll", handleScroll, true); // Cleanup on unmount
        };
    }, []);

    // function stickymenu(){
    useEffect(() => {
        const menu = document.getElementById('menu-fixed');
        const offset = menu.offsetHeight;

        const handleScroll = () => {
            if (window.scrollY > offset - 10) {
                // console.log('scolll./.')
                menu.classList.add("sticky");
            } else if (window.scrollY < offset - 20) {
                menu.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth <= 1020) {
                setisloginUser(false)

            } else {
                // setisloginUser(true)
                setsettingnav(false)
            }

        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    // }


    function opnesidemenu() {

        // sidebar open close js code
        let navLinks = document.querySelector(".nav-links");
        let menuOpenBtn = document.querySelector(".navbar .bx-menu");
        let menuCloseBtn = document.querySelector(".nav-links .bx-x");

        // mobile 
        let navLinksm = document.querySelector(".nav-links-mobile");
        let menuOpenBtnm = document.querySelector(".navbar .bx-menu");
        let menuCloseBtnm = document.querySelector(".nav-links-mobile .bx-x");
        menuOpenBtn.onclick = function () {

            navLinks.style.left = "0";
        }
        menuCloseBtn.onclick = function () {

            navLinks.style.left = "-100%";

        }



        let htmlcssArrow = document.querySelector(".htmlcss-arrow");
        htmlcssArrow.onclick = function () {

            navLinks.classList.toggle("show1");
        }
        let moreArrow = document.querySelector(".more-arrow");
        moreArrow.onclick = function () {

            navLinks.classList.toggle("show2");
        }
        let jsArrow = document.querySelector(".js-arrow");
        jsArrow.onclick = function () {

            navLinks.classList.toggle("show3");
        }
    }

    return (
        <>

            <div className='header-wraper'>
                <div class="image-container "
                    style={{
                        backgroundImage: `url(${haderback})`,
                        backgroundSize: 'cover',

                        /* position: relative; Required for absolute positioning of the overlay */
                        height: backHeight,
                        // display: 'flex',
                        width: '100%',
                        //    height:'100%',
                        position: 'relative',
                        backgroundRepeat: 'no-repeat',

                        objectFit: 'cover'

                        // objectFit:
                        // backgroundColor:'red'

                    }}
                >


                    {/* <div className='header-title-wraper'> */}
                        <p className='header-text text-center'>{hadertext}</p>

                        <p className='header-text-sub text-center'>{subtext}</p>
                    {/* </div> */}


                    {/* <img src={logo} alt="Description of image" /> */}

                </div>

                <nav id="menu-fixed" >
                    <div class="navbar">

                        <i class='bx bx-menu'
                            onClick={() => opnesidemenu()}
                        >

                        </i>
                        {
                            hasScrolled40 ?
                                <div className="logo"><a onClick={() => navigate('/')}><img src={brandlogoscroll} alt="" /></a></div>

                                :

                                <div className="logo"><a onClick={() => navigate('/')}><img src={brandlogo} alt="" /></a></div>

                        }

                        <div className="nav-links">

                            <div className="sidebar-logo">
                                <span class="logo-name"><img src={brandlogo} alt="" /></span>
                                <i class='bx bx-x' ></i>
                            </div>
                            <ul className="links outer">
                                <li><a
                                    onClick={() => {
                                        closesidebar()
                                        navigate('/')
                                    }}
                                    className="navbar__link"><img src={Vector} alt="" /><span>Home</span></a></li>
                                <li><a
                                    onClick={() => {
                                        closesidebar()
                                        navigate("/blog-list")
                                    }}
                                    className="navbar__link"><img src={business} alt="" /><span>About Us</span></a></li>
                                <li><a
                                    onClick={() => {
                                        closesidebar()
                                        navigate('/supplier-signup')
                                    }}



                                    className="navbar__link"><img src={business_partner} alt="" /><span>Operator signup</span></a></li>
                                <li><a className="navbar__link"><img src={destination} alt="" /><span>Destination</span></a></li>
                                <li><a
                                    onClick={() => {
                                        closesidebar()
                                        navigate("/contact-us")
                                    }}
                                    class="navbar__link"><img src={call} alt="" /><span>Contact Us</span></a></li>
                                <li><a className="navbar__link" onClick={() => navigate('/customer-support')}><img src={support} alt="" /><span>Help</span></a></li>
                                {/* {
                                    sidenavsetting <= 1000 ?
                                        <li><a

                                            className="navbar__link"
                                            onClick={() => {
                                                closesidebar()
                                                navigate('/user/userprofile')
                                            }}


                                        ><img src={settingimg} alt="" /><span>Settings</span></a></li>
                                        : null
                                } */}

                            </ul>

                        </div>

                        <div className="btn-wrapper">

                            {
                                isuserlogin ?
                                    <a class="btn btn-primary logout"
                                        onClick={() => navigate('/auth/userlogin')}

                                    ><i class="fa fa-sign-in" aria-hidden="true"></i> Logout

                                    </a>
                                    // <div class="btn-container"

                                    // >
                                    //     {/* <i class="fa fa-sign-out" aria-hidden="true"></i> */}
                                    //     <a class="btn btn-primary logout"
                                    //         onClick={() => navigate('/auth/userlogin')}
                                    //     >

                                    //         {/* <i class="fa fa-sign-out" aria-hidden="true"></i> */}

                                    //         </a>
                                    // </div>
                                    :




                                    <a class="btn btn-primary login"
                                        onClick={() => navigate('/auth/userlogin')}
                                    > <i class="fa fa-user-o" aria-hidden="true"></i> Login</a>


                            }

                            {
                              
                                    
                                    isuserlogin   ?


                                    <a class="btn btn-primary settings"
                                        onClick={() => navigate('/user/userprofile')}
                                    ><i class="fa fa-cog" aria-hidden="true"></i> Settings</a>

                                    : null

                            }
                            
                        </div>

                    </div>
                </nav>







            </div >



















        </>
    )
}

export default HeaderComponent;

