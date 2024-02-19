import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./index.css"

const Header = () => (
    <nav className="header-container">
        
        <div className="logo-container">
        <img src="https://res.cloudinary.com/ddmtwr8dy/image/upload/v1708324229/adaptimage_mecsrl.png" alt="" className="header-icon "/>
         <AiOutlineMenuFold className="menu-icon"/>
        </div>
        <div>
        <IoMoonOutline className="menu-icon"/>
        <IoIosNotificationsOutline className="menu-icon"/>
        </div>
    </nav>
)

export default Header