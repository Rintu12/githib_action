import React, { useEffect } from "react";
import '../resister/resister.css'
import resisterimg from '../../../assets/resister.png'
import google from '../../../assets/google.png'
import faceboook from '../../../assets/facebook.png'
import { useNavigate } from "react-router-dom";
import { Input, InputGroup } from 'rsuite';
import UnvisibleIcon from '@rsuite/icons/Unvisible';
import VisibleIcon from '@rsuite/icons/Visible';
const UserLogin = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = React.useState(false);

    const handleChange = () => {
      setVisible(!visible);
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>
            <div className="resister-div">
                <div className="resister-wraper">


                    <div className="content-wraper-resiter">

                        {/* <div style={{
                            width: '100%'
                        }}> */}
                        <div className="form-resister-wraper">
                            <p>Login</p>
                            <div className="res-form-container">
                                <div className="row ">
                                    <div className="col-12  resister-from-input">
                                        <label htmlFor=""> Email Address</label>
                                        <input type="text"
                                            placeholder="Enter Your Email"
                                        />
                                    </div>

                                </div>
                                <div className="row ">
                                    <div className="col-12 resister-from-input-pass  ">
                                        <label htmlFor=""> Password</label>
                                        <InputGroup inside
                                        style={{
                                            border: '1px solid #94A3B8',
                                            height:58,
                                            padding:10,
                                         
                                        }}
                                        >
                                            <Input type={visible ? 'text' : 'password'} 
                                            className="pass"
                                            value={''}
                                            style={{
                                                backgroundColor:'#ffffff'
                                            }}
                                            />
                                            <InputGroup.Button onClick={handleChange}>
                                                {visible ? <VisibleIcon /> : <UnvisibleIcon />}
                                            </InputGroup.Button>
                                        </InputGroup>
                                    </div>

                                </div>

                                <div className="row mt-2">
                                    <div className="col-12 terms-condi-checkbox">
                                        <input type="checkbox" name='terms&condi' />
                                        <label htmlFor="terms&condi">I agree to the <span onClick={() => {
                                            navigate('/terms&condition')
                                        }}>Terms and Conditions</span> </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 resiter-btn">
                                        <button onClick={() => navigate('/user/user-dashboard')}>Login</button>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-around align-items-center mt-4">
                                    <div className="line-throw mr-2" ></div>
                                    <p className="or-text" >or</p>
                                    <div className="line-throw ml-2"></div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12 google-rester-btn">
                                        <button>
                                            <img src={google} alt=""
                                                style={{
                                                    marginRight: 10
                                                }}
                                            />
                                            Continue with Google</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 google-rester-btn">
                                        <button>
                                            <img src={faceboook} alt=""
                                                style={{
                                                    marginRight: 10
                                                }}
                                            />
                                            Continue with Facebook</button>
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-12 alredy-text">
                                        <p className="text-center"> Yuo have no account?  <span
                                            onClick={() => navigate('/auth/user-resister')}
                                        >Resister</span>  </p>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                        <div>
                            <img

                                src={resisterimg} alt=""
                                className="login-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin;