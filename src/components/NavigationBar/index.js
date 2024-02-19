import { RiDashboard3Line } from "react-icons/ri";
import { LiaTagSolid } from "react-icons/lia";
import { TbBorderStyle2 } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiShare2 } from "react-icons/ci";
import "./index.css"

const NavigationBar = () => (
    <div className="sidebar-container">
        <div className="sidebar-item-container">
        <RiDashboard3Line className="sidebar-icon"/>
        <h1 className="sidebar-item">Dashboard</h1>
        </div>
        <div className="sidebar-item-container">
        <LiaTagSolid className="sidebar-icon"/>
        <h1 className="sidebar-item">Inventory</h1>
        </div>
        <div className="sidebar-item-container navigation-active-tab">
        <TbBorderStyle2 className="sidebar-icon"/>
        <h1 className="sidebar-item">Orders</h1>
        </div>
        <div className="sidebar-item-container">
        <LiaShippingFastSolid className="sidebar-icon"/>
        <h1 className="sidebar-item">Shipping</h1>
        </div>
        <div className="sidebar-item-container">
        <CiShare2 className="sidebar-icon"/>
        <h1 className="sidebar-item">Channel</h1>
        </div>
    </div>
)

export default NavigationBar