import React from "react";
import './discount.css';
import img9 from '../../../../assets/image25.png'

const Discount = () =>{
    return(
        <>
        <section className="discount-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Exclusive Discounts & Offers</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="offer-txt-box">
                            <p>Unlock exclusive savings on your next ride with our special discounts! Enjoy great deals designed to enhance your experience with RideNoww</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="container premium-rides">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel">
                                <h3>20% Off on All Premium Rides</h3>
                            </div>
                        
                        </div>
                    </div>
                <div className="row">
                    <div className="col-md-6">
                    <div class="card">
  <h5 class="card-header">Premium Rides Discount</h5>
  <div class="card-body">
    <h5 class="card-title">20%  OFF</h5>
    <p class="card-text">Book any premium ride and save 20% instantly. Enjoy luxurious rides with RideNoww and make the most of your journey</p>
    <a href="#" class="btn btn-primary">Claim Discount Now</a>
  </div>
</div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="valid-image">
                    <img src={img9} class="img-fluid" alt="" />
                    </div>
                    <div className="valid-txt">
                            <p>Valid on weekdays only</p>
                        </div>
                    </div>
                        
                 
                       
                    </div>
                   
            </div>
            <div className="container premium-rides">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel">
                                <h3>10% Off Your First Ride</h3>
                            </div>
                        
                        </div>
                    </div>
                <div className="row">
                    <div className="col-md-6">
                    <div class="card">
  <h5 class="card-header">First Rides Discount</h5>
  <div class="card-body">
    <h5 class="card-title">10%  OFF</h5>
    <p class="card-text">New to RideNoww? Get 10% off your first ride and experience our seamless service</p>
    <a href="#" class="btn btn-primary">Available to new customers only</a>
  </div>
</div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="valid-image">
                    <img src={img9} class="img-fluid" alt="" />
                    </div>
                    <div className="valid-txt">
                            <p>Valid on weekdays only</p>
                        </div>
                    </div>
                        
                 
                       
                    </div>
                   
            </div>
            <div className="container premium-rides">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel">
                                <h3>15% Off for Returning Customers</h3>
                            </div>
                        
                        </div>
                    </div>
                <div className="row">
                    <div className="col-md-6">
                    <div class="card">
  <h5 class="card-header"> Returning Customer Discount</h5>
  <div class="card-body">
    <h5 class="card-title">15%  OFF</h5>
    <p class="card-text">Returning customers get special treatment! Enjoy 15% off on your second booking with us</p>
    <a href="#" class="btn btn-primary">Available to new customers only</a>
  </div>
</div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="valid-image">
                    <img src={img9} class="img-fluid" alt="" />
                    </div>
                    <div className="valid-txt">
                            <p>Valid for second bookings only</p>
                        </div>
                    </div>
                        
                 
                       
                    </div>
                   
            </div>

           
        </section>
        </>
    )
}

export default Discount;