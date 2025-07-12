import React from "react";
import './operator.css';
import form_img from '../../../../assets/image35.png';
import { useNavigate } from "react-router-dom";

const OperatorLogin = () =>{
    const navigate = useNavigate()
    return(
        <>
        <section className="sgnup-from">
        
        <div className="container">
        <h2 className="" >Sing Up From</h2>
            <div className="row">
                <div className="col-md-7">
                    <form className="form-signup" role="form">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Company Name</label>
                                <input type="text" className="form-control" id="" placeholder="Company Name"></input>
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Contact Name</label>
                                <input type="text" className="form-control" id="" placeholder="Contact Name"></input>
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email Address</label>
                                <input type="text" className="form-control" id="" placeholder="Email Address"></input>
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="" placeholder="Phone Number"></input>
                            </div>
                            <div className="col-md-6"> 
                                <label for="inputEmail4" className="form-label">Fleet Size </label>
                                <select id="inputState" class="form-select">
                                    <option selected>Select Fleet Size...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Vehicle Type</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Select a Vehicle</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-12">

                            <label for="exampleFormControlTextarea1" class="form-label">Additional Comment</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Additional Comment</textarea>
                            </div>


                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                                    <label className="form-check-label" for="gridCheck">I agree to the <span>Terms and Conditions</span> </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" 
                                onClick={() =>{
navigate('/operator/dashboard')
                                }}
                                class="btn btn-primary">Submit Application</button>
                            </div>





                        </div>
                    </form>
                </div>
            <div className="col-md-5">
                <div className="form-image">
                    <img className="img-fluid" src={form_img} alt="" / >
                </div>
            </div>
        </div>
        </div>
        </section>
        <section className="ridenow-feature">
            <div className="container">
            <h2 className="" >Why Partner with RideNoww ?</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul>
                            <li><i className="fa fa-check" aria-hidden="true"></i>
                            Expanded customer reach and visibility
                            </li>
                            <li><i className="fa fa-check" aria-hidden="true"></i>
                            Seamless transportation solutions for guests
                            </li>
                            <li><i className="fa fa-check" aria-hidden="true"></i>
                            Joint marketing opportunities for promotion.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                                <li><i className="fa fa-check" aria-hidden="true"></i>
                                Commitment to sustainability initiatives
                                </li>
                                <li><i className="fa fa-check" aria-hidden="true"></i>
                                Personalized support and collaboration
                                </li>
                                <li><i className="fa fa-check" aria-hidden="true"></i>
                                Access to exclusive promotions and discounts
                                </li>
                        </ul> 
                    </div>
                </div>
            </div>        
        </section>
        
        <section className="Frequentlq-question">
          
          <div className="container">
            <h2 className="" > Frequently Asked Questions?</h2>
            <div className="row">
                <div className="col-md-12">
                <div className="accordion" id="accordionExample-2">
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How do I book a ride with RideNoww ?
      </button>
    </h3>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>To book a ride with RideNoww, open the app or visit the website, enter your pick-up location and destination, select your preferred ride option, choose any additional services if needed, confirm your booking, make the payment, and then track your ride in real-time until your journey begins.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Can i book a ride in advance
      </button>
    </h3>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>To book a ride with RideNoww, open the app or visit the website, enter your pick-up location and destination, select your preferred ride option, choose any additional services if needed, confirm your booking, make the payment, and then track your ride in real-time until your journey begins.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What Payment method you accept
      </button>
    </h3>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>To book a ride with RideNoww, open the app or visit the website, enter your pick-up location and destination, select your preferred ride option, choose any additional services if needed, confirm your booking, make the payment, and then track your ride in real-time until your journey begins.</p>
        
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            </div>
        </section>





       
        
        </>
    )
}

export default OperatorLogin;