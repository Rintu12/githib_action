import React from "react";

import { Sidenav, Nav, Toggle } from 'rsuite';
import GroupIcon from '@rsuite/icons/legacy/Group';
import { Outlet, useNavigate } from "react-router-dom";
import dashboard from '../../assets/admin/story.png';
import chart from '../../assets/admin/chart.png'
import people from '../../assets/admin/people.png'
import recipt from '../../assets/admin/receipt-2.png'
import task from '../../assets/admin/task.png'
import review from '../../assets/admin/magicstar.png'
import fleet from '../../assets/admin/car.png'
import earnings from '../../assets/admin/dollar-circle.png'
import cart from '../../assets/admin/shopping-cart.png'
import setting2 from '../../assets/admin/setting-2.png'
import FooterCom from "../../component/Footer";
import HeaderComponent from "../../component/Header";


const Sidebar = () => {
    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');
    const navigate = useNavigate()
    return (
        <div style={{
            // width: 250
        }}>
            <Sidenav
                style={{
                    position: 'relative',
                    backgroundColor: '#334155',
                  
                    // maxHeight:700,
                    // overflowY:'scroll'
                    // padding:7

                }}
                expanded={expanded} defaultOpenKeys={['3', '4']}>
                <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />

                <Sidenav.Body style={{
                    backgroundColor: '#334155',
                    display: 'flex',

                    flexDirection: 'column',
                    // alignItems:'flex-start',
                    justifyContent: 'flex-start',


                    // padding:7
                }}>
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item eventKey="1"

                            onClick={() => navigate('/operator/dashboard')}
                            icon={<img src={dashboard} className="rs-icon " />}

                        >
                            Overview
                        </Nav.Item>
                        <Nav.Item eventKey="2"
                            icon={<img src={task} className="rs-icon" />}
                            onClick={() => navigate('/operator/job-management')}
                        >
                            Job Management
                        </Nav.Item>
                        <Nav.Menu eventKey="3" 
                        onClick={() => navigate('/operator/driver-list')}
                        title="Driver Management" icon={<img src={people} className="rs-icon" />}>
                            <Nav.Item eventKey="14"
                                icon={<img src={earnings} className="rs-icon" />}
                                onClick={() => navigate('/operator/milesprice')}
                            >
                                Per Mile Price (PMP)
                            </Nav.Item>
                            <Nav.Item eventKey="15"
                                icon={<img src={earnings} className="rs-icon" />}
                                onClick={() => navigate('/operator/location-price')}
                            >
                                Location Prices (LPs)
                            </Nav.Item>
                            <Nav.Item eventKey="16"
                                icon={<img src={earnings} className="rs-icon" />}
                                onClick={() => navigate('/operator/postcode-price')}
                            >
                                Postcode Area Prices
                            </Nav.Item>
                        </Nav.Menu>
                        {/* <Nav.Item eventKey="3"
                            icon={<img src={people} className="rs-icon" />}
                            onClick={() => navigate('/operator/driver-management')}
                        >
                            Driver Management
                        </Nav.Item> */}
                        <Nav.Item eventKey="4"
                            icon={<img src={review} className="rs-icon" />}
                            onClick={() => navigate('/operator/ratings-review')}
                        >
                            Ratings and Reviews
                        </Nav.Item>
                        <Nav.Item eventKey="5"
                            icon={<img src={fleet} className="rs-icon" />}
                            onClick={() => navigate('/operator/manage-fleet')}
                        >
                            Manage Fleet
                        </Nav.Item>
                        <Nav.Item eventKey="6"
                            icon={<img src={fleet} className="rs-icon" />}
                            onClick={() => navigate('/operator/riderequest')}
                        >
                            Ride Request
                        </Nav.Item>
                        <Nav.Item eventKey="7"
                            icon={<img src={earnings} className="rs-icon" />}
                            onClick={() => navigate('/operator/earnings')}
                        >
                            Earnings
                        </Nav.Item>
                        {/* <Nav.Item eventKey="3"
                            icon={<img src={people} className="rs-icon" />}

                        >
                            Per Mile Price (PMP)
                        </Nav.Item>
                        <Nav.Item eventKey="4"
                            icon={<i class="fa fa-usd rs-icon" aria-hidden="true" />}

                        >
                            Location Prices (LPs)
                        </Nav.Item> */}
                        {/* <Nav.Item eventKey="5" icon={<GroupIcon />}>
                            Postcode Area Prices
                        </Nav.Item> */}
                        <Nav.Item eventKey="8"
                            icon={<img src={recipt} className="rs-icon" />}
                            onClick={() => navigate('/operator/invoice-history')}
                        >
                            Invoice History
                        </Nav.Item>
                        <Nav.Item eventKey="9"
                            icon={<img src={chart} className="rs-icon" />}
                            onClick={() => navigate('/operator/analytics')}

                        >
                            Analytics
                        </Nav.Item>
                        <Nav.Item eventKey="10"
                            icon={<img src={cart} className="rs-icon" />}
                            onClick={() => navigate('/operator/extra-income')}

                        >
                            Extra Items
                        </Nav.Item>
                        <Nav.Item eventKey="11"
                            icon={<img src={cart} className="rs-icon" />}
                            onClick={() => navigate('/operator/discount')}
                        >
                            Discount
                        </Nav.Item>
                        <Nav.Item eventKey="12"
                            icon={<img src={
                                setting2
                            } className="rs-icon" />}
                            onClick={() => navigate('/operator/settings')}

                        >
                            Setting
                        </Nav.Item>
                        <Nav.Item eventKey="13"
                            icon={<img src={chart} className="rs-icon" />}
                            onClick={() => navigate('/operator/support')}
                        >
                            Supports
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>

    );
};

const DashboardLayout = () => {
    return (
        <>
            {/* <div className="layout">
                <div className="header" style={{
                    position: 'fixed',
                    zIndex: 1000
                }}>
                    <HeaderComponent />
                </div> */}
                {/* <div className="content"> */}
                    <div className="operator-layout">
                        <Sidebar />

                        <div className="main-content">
                            <Outlet />
                        </div>
                    </div>
                {/* </div> */}
{/* 
                <div className="footer">
                    <FooterCom />
                </div> */}
            {/* </div> */}


        </>
    )
}

export default DashboardLayout;