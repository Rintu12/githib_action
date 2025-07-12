import { Link, Outlet, useNavigate } from "react-router-dom"
import './footer.css'
import logo from '../../assets/footerlogo.png';
import carlogo from '../../assets/carfoorter.png'
import playstoreicon from '../../assets/playstoreicon.png'
import applestore from '../../assets/applestore.png'

function FooterCom() {
    const navigate = useNavigate()
    return (
        <>
            <div className="footer">
                <footer className="">

                    <div className="footer-wraper">
                        <div className='row '>

                            <div className="col-md-12 ">
                                <div className='row'>
                                    <div className='d-flex  col-md-4 firstrcol '>

                                        <img
                                            src={logo}
                                            className="logo_footer"
                                        />

                                        <p >Our vision is to provide convenience and<br />help increase your sales business.</p>

                                        {/* <div className="contact_us"> */}




                                        {/* </div> */}
                                        <div>
                                            <div className="contact_us">
                                                <p >Connect <span>With Us</span> </p>
                                                {/* <p>With Us</p> */}
                                            </div>
                                            <div className="social-icons">
                                                <i className="fa fa-facebook"></i>
                                                <i className="fa fa-twitter "></i>

                                                <i className="fa fa-instagram"></i>
                                                <i className="fa fa-linkedin "></i>



                                            </div>

                                        </div>

                                        <div className="boxdetailsContainer col-12">
                                            <div className="box_details">
                                                <img src={applestore} alt="" />
                                                <span className="divider-line"></span>
                                                <p>Download on the <br /> Apple Store</p>
                                            </div>
                                            <div className="box_details">
                                                <img src={playstoreicon} alt="" />
                                                <span className="divider-line"></span>
                                                <p>Download on the <br />  Google Play</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='menulist  col-md-2'>
                                        <h4 className="heading">Company</h4>
                                        <menu>
                                            <li>
                                                <Link to="">About us</Link>
                                            </li>
                                            <li>
                                                <Link to="">Blog</Link>

                                            </li>
                                            <li>
                                                <Link to="">Services</Link>

                                            </li>
                                            <li>

                                                <Link to="">FAQs</Link>

                                            </li>
                                            <li>
                                                <Link to="/terms&condition">Terms</Link>
                                            </li>
                                            <li>
                                                <Link to="">Contact Us</Link>



                                            </li>
                                            <li> <Link to='/cookies&policy'>Cookies Policy</Link></li>
                                            <li> <Link to='/cancellation-policy'>Cancellation Policy</Link></li>
                                        </menu>
                                    </div>
                                    {/* our bransds */}
                                    <div className='menulist  col-md-2'>
                                        <h4 className="heading">Quick Links</h4>
                                        <menu>
                                            <li>
                                                <Link to="">Get in Touch</Link>
                                            </li>
                                            <li>
                                                <Link to="">Help center</Link>

                                            </li>
                                            <li>
                                                <Link to="">Live chat</Link>

                                            </li>
                                            <li>

                                                <Link to="">How it works</Link>

                                            </li>

                                        </menu>
                                    </div>
                                    {/* quick linkjs */}
                                    <div className='menulist  col-md-2'>
                                        <h4 className="heading">Our Brands</h4>
                                        <menu>
                                            <li>
                                                <Link to="">Toyota</Link>
                                            </li>
                                            <li>
                                                <Link to="">Porsche</Link>

                                            </li>
                                            <li>
                                                <Link to="">Audi</Link>

                                            </li>
                                            <li>

                                                <Link to="">BMW</Link>

                                            </li>
                                            <li>

                                                <Link to="">Ford</Link>

                                            </li>
                                            <li>

                                                <Link to="">Nissan</Link>

                                            </li>
                                            <li>

                                                <Link to="">Peugeot</Link>

                                            </li>
                                            <li>

                                                <Link to="">Volkswagen</Link>

                                            </li>

                                        </menu>
                                    </div>
                                    {/* Vehicle types */}
                                    <div className='menulist  col-md-2'>
                                        <h4 className="heading">Vehicles Type</h4>
                                        <menu>
                                            <li>
                                                <Link to="">Sedan</Link>
                                            </li>
                                            <li>
                                                <Link to="">Hatchback</Link>

                                            </li>
                                            <li>
                                                <Link to="">SUV</Link>

                                            </li>
                                            <li>

                                                <Link to="">Hybrid</Link>

                                            </li>
                                            <li>

                                                <Link to="">Electric</Link>

                                            </li>
                                            <li>

                                                <Link to="">Coupe</Link>

                                            </li>
                                            <li>

                                                <Link to="">Truck</Link>

                                            </li>
                                            <li>
                                                <Link to="">Convertible</Link>

                                            </li>

                                        </menu>
                                    </div>
                                </div>
                                <div>

                                </div>

                            </div>
                        </div>
                        <div className='row endfooter'>

                            <div className="col-md-1">
                                <img
                                    src={carlogo}
                                />
                            </div>
                            <div
                                className="col-md-11 footerendbar"
                            >


                            </div>
                        </div>
                        <div className="row">
                            <div className="footerendContent">
                                {/* <div className='col-8'> */}
                                <p>©2024 RideNoww. All rights reserved</p>
                                {/* </div> */}

                                <div className="d-flex footer-container-cms flex-row  align-items-center justify-content-between">
                                    <p className="footer-privacy" onClick={() => {
                                        navigate('/privacy&policy')
                                    }}>Privacy & Policy</p>

                                    <p className="footer-privacy-terms" onClick={() => {
                                        navigate('/terms&condition')
                                    }}>Terms & condition</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </footer>

            </div>
        </>
    )
}
export default FooterCom