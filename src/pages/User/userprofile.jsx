import React, { useEffect } from "react";
import './userprofile.css'
import profile from '../../assets/profile.png'
import TwofactorFrom from "../../component/shared/two-factorform";
const UserProfile = () => {
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            behavior: 'smooth'  // Smooth scroll
        });
    }, [])
    return (
        <>

            <div className="personal-information">
                <div className="personal-information-wraper">
                    <h6>Personal Information</h6>
                    <div className="form-pofifle">

                        <div className="profile-imaeg-div mobile-proifole">
                            <img src={profile}
                                style={{
                                    height: 100,
                                    width: 100,
                                    paddingTop: 20,
                                    objectFit: 'contain'
                                }}
                                alt="" />
                            <h5 className=" ml-2">John Doe</h5>
                        </div>
                        <div className="row">
                            <div className="col-10 edit-profille-fromn">
                                <div className="row mt-3">
                                    <div className="col-12 profile-input">

                                        <label htmlFor="">Name</label>

                                        <input type="text"
                                            placeholder="Full Name"
                                        />
                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 profile-input">
                                        <label htmlFor="">Email Address</label>

                                        <input type="text"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="col-6 profile-input">
                                        <label htmlFor="">Phone Number</label>

                                        <input type="text"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 profile-input">
                                        <label htmlFor=""> Complete Address</label>

                                        <input type="text"
                                            placeholder="Address"
                                        />
                                    </div>
                                </div>
                                <div className="pt-4 pb-4">
                                    <button className="edit-info-btn">Edit Your Info</button>
                                </div>

                            </div>
                            <div className="col-2 profile-div">
                                <div className="profile-imaeg-div">
                                    <img src={profile}
                                        style={{
                                            height: 100,
                                            width: 100,
                                            paddingTop: 20,
                                            objectFit: 'contain'
                                        }}
                                        alt="" />
                                    <h5 className="text-center mt-4 pl-2">John Doe</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal-information">
                <div className="personal-information-wraper">
                    <h6>Your Preferences</h6>


                    <div className="row pt-4 pb-4">
                        <div className="col-6 profile-input">
                            <label htmlFor="">Preferred Vehicle Type </label>
                            <select type="text" >
                                <option value="" selected>Standard Saloon </option>
                            </select>
                        </div>
                        <div className="col-6 profile-input">
                            <label htmlFor="">Preferred Language</label>
                            <input type="text" value='English' name="" id="" />
                        </div>

                    </div>
                    <div className="row prefered-lan pt-3 pb-3">
                        <div className="col-12 d-flex flex-row justify-content-between">
                            <div className="d-flex flex-row align-items-center
">
                                <input type="checkbox" name="email" id="" />
                                <p htmlFor="email" className="ml-3">Receive email notification</p>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <input type="checkbox" name="email" id="" />
                                <p htmlFor="email" className="ml-3">Receive SMS alerts</p>
                            </div>
                        </div>

                    </div>
                    <div className="pt-3 pb-4">
                        <button className="pre-btn-profile">Save Your Preferences</button>

                    </div>

                </div>
            </div>
            <div className="personal-information">
                <div className="personal-information-wraper">
                    <h6>Change Your Password</h6>
                    <div className="row pt-4 pb-2">
                        <div className="col-12 profile-input">
                            <label htmlFor="">Current Password</label>
                            <input type="text"
                                placeholder="Enter Your Password"
                                name="" id="" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-6 profile-input">
                            <label htmlFor="">New Password</label>
                            <input type="text"
                                placeholder="New Password"
                                name="" id="" />
                        </div>
                        <div className="col-6 profile-input">
                            <label htmlFor="">Confirm Password </label>
                            <input type="text"

                                placeholder="Confirm Password"
                                name="" id="" />
                        </div>

                    </div>
                    <div className="pt-4">
                        <button className="change-password">Change Password</button>

                    </div>
                    <div className="mt-4">
                        <h6>Enable Two-Factor Authentication</h6>
                        <p className="two-fac-text">Enhance your account security by enabling two-factor authentication.</p>

                        <div className="pt-3 pb-4">
                            <button className="two-fac-btn"
                                onClick={() => setOpen(!open)}
                            >Enable Two-Factor Authentication</button>

                        </div>

                    </div>
                </div>
            </div>
            <TwofactorFrom
                ismodelOpen={open}
                setmodelOpen={setOpen}
            />
        </>
    )
}

export default UserProfile