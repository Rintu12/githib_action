import React from "react";
import './invoice.css';
import img9 from '../../../../assets/image51.png'
import img11 from '../../../../assets/Frame1410088124.png'

const Invoicehistory = () =>{
    return(
        <>

            <section className="invoice-page">

                <div className="container">
                    <div  className="row">
                    <div className="heading">     <h2>Invoice Summary</h2>
                    </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-9 bd-bottom">
                            <div className="row">
                            <div className="col-md-5">
                            
                            <div className="txt-width">
                                <div  className="invoice-txt">
                                    <div className="id" >Invoice ID:</div>
                                    <div className="num" >  INV-12345678</div>
                                </div>
                                <div  className="invoice-txt">
                                    <div className="id" > Customer Name: </div>
                                    <div className="num" > John Doe</div>
                                </div>
                                </div>
                            </div>

                            <div className="col-md-7">
                            <div className="txt-width">
                                <div  className="invoice-txt">
                                    <div className="id" >Ride Date & Time:</div>
                                    <div className="num" > September 23, 2024 - 10:30 AM</div>
                                </div>
                                <div  className="invoice-txt">
                                    <div className="id" >Booking ID: </div>
                                    <div className="num" > INV-12345678</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="image-box">
                        <img src={img11} class="img-fluid" alt="" />
                  
                        </div>
                        </div>
                        
                    </div>
                </div>
                    <br></br>
                <div className="container">
                <div  className="row">
                    
                    <div className="col-md-9">
                        
                       
                        <div className="row">
                            <div className="col-md-12">
                                <div  className="heading">               <h2>Ride Details</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                        <div className="col-md-12 bd-bottom">
                            <div className="row">
                            <div className="col-md-5">
                            
                            <div className="txt-width">
                                <div  className="invoice-txt">
                                    <div className="id" >Pick-up Location:</div>
                                    <div className="num" >  123 Main St, Cityville</div>
                                </div>
                                <div  className="invoice-txt">
                                    <div className="id" > Driver Name: </div>
                                    <div className="num" > Alex Smith</div>
                                </div>
                                </div>
                            </div>

                            <div className="col-md-7">
                            <div className="txt-width">
                                <div  className="invoice-txt">
                                    <div className="id" >Drop-off Location:</div>
                                    <div className="num" > 456 Oak St, Townsville</div>
                                </div>
                                <div  className="invoice-txt">
                                    <div className="id" >Contact: </div>
                                    <div className="num" > (555) 123-4567</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>


                      
                        
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-md-12">
                                <div  className="heading">               <h2>Fare Breakdown</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                        <div className="col-md-12 bd-bottom">
                            <div className="row">
                            <div className="col-md-5">
                            
                            <div className="txt-width">
                                <div  className="invoice-txt">
                                    <div className="id" >Base Fare:</div>
                                    <div className="num" >  £20.00</div>
                                </div>
                                <div  className="invoice-txt">
                                    <div className="id" > Tolls: </div>
                                    <div className="num" > £2.50</div>
                                </div>
                                <div  className="invoice-txt">
                                    <div className="id" >Discount: </div>
                                    <div className="num" > £5.00 (Promo Code: RIDE5)</div>
                                </div>
                                </div>
                            </div>

                            <div className="col-md-7">
                            <div className="txt-width">
                                <div  className="invoice-txt">
                                    <div className="id" >Distance Charge:</div>
                                    <div className="num" >£10.00 (5 miles at £2/mile)</div>
                                </div>
                                <div  className="invoice-txt">
                                    <div className="id" >Service Fee: </div>
                                    <div className="num" > £3.00</div>
                                </div>
                               
                                </div>
                            </div>
                            </div>
                        </div>


                      
                        
                        </div>
                        <div className="row ">
                        <div className="col-md-12 bd-bottom">
                            <div className="row">
                            <div className="col-md-12">
                            
                            <div className="txt-width">
                                <div  className="invoice-txt">
                                    <div className="id" >Total Fare:</div>
                                    <div className="num" >  £30.50</div>
                                </div>
                               
                              
                            </div>
                            


                            </div>

                           
                            </div>
                        </div>


                      
                        
                        </div>
                        <div className="row ">
                            <div className="col-md-12">
                                <h4>Thank You for Riding with RaideNoww</h4>
                            </div>
                            
                        </div>
                        <a className="btn btn-primary dw-btn">Download  Ticket</a>

                    </div>
                    <div className="col-md-3">
                    <div className="banner">
                    <img src={img9} class="img-fluid" alt="" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="gray-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                        <div className="content-box">
                            <h4>Need Help ?</h4>
                            <p>If you have any questions about this invoice or need assistance, please contact our support team at <span>support@ridenoww.com</span> or call (555) 123-7890</p>
                            </div>
                            <div className="content-box">
                            <h4>Terms & Conditions</h4>
                            <p>For information regarding refunds or cancellations, please refer to our [Refund and Cancellation Policy].</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                
                </section>

        </>
    )
}

export default Invoicehistory;