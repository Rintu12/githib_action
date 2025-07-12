import React, { useRef, useState } from "react";
import './style.css'
import { Modal, ButtonToolbar, Button, Placeholder } from 'rsuite';
import OtpInput from 'react-otp-input';

const TwofactorFrom = ({ ismodelOpen, setmodelOpen }) => {
    const [backdrop, setBackdrop] = React.useState('static');
    const handleClose = () => setmodelOpen(false);
    const [otp, setOtp] = useState('');

    // otp input filed....

    return (
        <>
            <Modal backdrop={backdrop}
                keyboard={false}
                open={ismodelOpen}
                onClose={handleClose}
            >
                <Modal.Header>
                    <Modal.Title>Two-Factor Authentication</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p className="tow-fac-heading">For your security, please choose how you’d like to receive your verification code</p>
                    {/* <Placeholder.Paragraph /> */}
                    <div className="two-factor-wraper" >
                        <div className="verify-phone">
                            <h6>Verify with Phone </h6>
                            <div className="twofactor-input">
                                <label htmlFor="">Enter Your Phone Number</label>
                                <input type="number"
                                    placeholder="xxxx-xxx-1234"
                                />

                                <button
                                    style={{
                                        backgroundColor: '#3AAE49'
                                    }}
                                >Send Code to Mobile Number</button>
                            </div>
                        </div>
                        <div className="verify-phone">
                            <h6>Verify with Email </h6>
                            <div className="twofactor-input">
                                <label htmlFor="">Enter Your Email Address</label>
                                <input type="text"
                                    placeholder="john***@gmail.com"
                                />

                                <button
                                    style={{
                                        border: '1px solid #3AAE49',
                                        color: '#3AAE49'
                                    }}
                                >Send Code to Email Address</button>
                            </div>
                        </div>


                    </div>
                    <p className="send-otp-text">Enter the 6-digit code sent to your mobile number: xxxx-xxx-1234</p>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span></span>}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            border:'1px solid #64748B',
                            height:50,
                            width:70,
                            borderRadius:2,
                            outline:'none'
                        }}
                        containerStyle={{
                            marginTop:15
                        }}
                    />
                     <p className="notrecive-text">Didn’t receive the code? <span className="resend-text">Resend</span>  (30s)</p>
                 
                  <button className="verify-otp-btn">Verify</button>
               
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={handleClose}
                        appearance="primary">
                        Ok
                    </Button>
                    <Button
                        onClick={handleClose}
                        appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TwofactorFrom;