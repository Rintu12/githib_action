import { Outlet } from "react-router-dom"
import HeaderComponent from "../Header"
import FooterCom from "../Footer"
import './layout.css'
function LayoutCom() {
    return (
        <>
            <div className="layout">
                <div className="header">
                    <HeaderComponent />
                </div>
                <div className="content">
                    <Outlet />
                </div>
                <div className="footer">
                    <FooterCom />
                </div>
            </div>


        </>
    )
}

export default LayoutCom