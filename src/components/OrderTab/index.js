import {Component} from "react"
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { RiContractUpDownFill } from "react-icons/ri";
import { MdFilterListAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import Header from "../Header"
import OrderItems from "../OrderItems";
import NavigationBar from "../NavigationBar"
import Tab from "../ActiveTab"

import "./index.css"

const tabs = [
    {
    id : 1,
    tab : "Pending",
},
{
    id : 2,
    tab : "Accepted"
},
{
    id : 3,
    tab : "AWB Created"
},
{
    id : 4,
    tab : "Ready to Ship"
},
{
    id : 5,
    tab : "Completed"
},
{
    id : 6,
    tab : "Cancelled"
}
  
]

const orderDetails = [
    {
        id : 1,
        channel : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxUit5BJLTSLqj8524EjQSzyaahkTOd9pvw&usqp=CAU",
        orderNo : "#TKN20203754",
        orderDate : "2024-02-15",
        city : "Hyderabad",
        customerName : "Vamshi",
        orderValue : "5679.00",
        status : "Pending"
    },
    {
        id : 2,
        channel : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxUit5BJLTSLqj8524EjQSzyaahkTOd9pvw&usqp=CAU",
        orderNo : "#TKN20203754",
        orderDate : "2024-02-15",
        city : "Hyderabad",
        customerName : "Krishna",
        orderValue : "5679.00",
        status : "Pending"
    },
    {
        id : 3,
        channel : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxUit5BJLTSLqj8524EjQSzyaahkTOd9pvw&usqp=CAU",
        orderNo : "#TKN20203754",
        orderDate : "2024-02-15",
        city : "Hyderabad",
        customerName : "Anudeep",
        orderValue : "5679.00",
        status : "Accepted"
    },
    {
        id : 4,
        channel : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxUit5BJLTSLqj8524EjQSzyaahkTOd9pvw&usqp=CAU",
        orderNo : "#TKN20203754",
        orderDate : "2024-02-15",
        city : "Hyderabad",
        customerName : "Saaranga",
        orderValue : "5679.00",
        status : "Completed"
    },
    {
        id : 5,
        channel : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxUit5BJLTSLqj8524EjQSzyaahkTOd9pvw&usqp=CAU",
        orderNo : "#TKN20203754",
        orderDate : "2024-02-15",
        city : "Hyderabad",
        customerName : "Sandeep",
        orderValue : "5679.00",
        status : "Accepted"
    }
]

class Orders extends Component {
    state = {activeTab : "Pending", orderProductDetails : orderDetails}

    clickedonTab = (tab) => {
        this.setState({activeTab : tab})
    }

    render(){
        const {activeTab, orderProductDetails} = this.state
        const filteredData = orderProductDetails.filter((each) => (
            each.status === activeTab
        ))

     
        return (
            <div>
                <Header/>
                <div className="order-page-container">
               
                <NavigationBar/>
               <div className="right-side-container">
                <div className="tabs-container">
                    {
                        tabs.map((each) => (
                            <Tab key={each.id} tabDetails = {each} tabActive={each.tab === activeTab} clickedOnTab={this.clickedonTab}/>
                        ))
                    }
                </div>
                <div className="orders-container">
                    <div>
                    <button type="button" className="import-button"> <LiaFileImportSolid/> Import Orders</button>
                    <button type="button" className="accept-button"><AiOutlineSend/> Accept</button>
                    <button type="button" className="accept-button"><MdOutlineLocalPrintshop/> Print <FaAngleDown/></button>
                    </div>
                    <div className="order-header-container">
                        <div className="order-header-checkbox-container">
                            <input type="checkbox" className="order-header-checkbox"/>
                        </div>
                        <hr className="order-header-hr"/>
                        <div className="order-header-channel-container">
                            <p className="order-header-text">Channel </p>
                            <RiContractUpDownFill/>
                            <MdFilterListAlt/>
                        </div>
                        <hr className="order-header-hr"/>
                        <div className="order-header-orderno-container">
                            <p className="order-header-text">Order No</p>
                            <div>
                            <RiContractUpDownFill/>
                            <CiSearch/>
                            </div>
                        </div>
                        <hr className="order-header-hr"/>
                        <div className="order-header-orderno-container">
                            <p className="order-header-text">Order Date</p>
                            <div>
                            <RiContractUpDownFill/>
                            <CiSearch/>
                            </div>
                        </div>
                        <hr className="order-header-hr"/>
                        <div className="order-header-city-container">
                            <p className="order-header-text">City</p>
                            <RiContractUpDownFill/>
                        </div>
                        <hr className="order-header-hr"/>
                        <div className="order-header-customername-container">
                            <p className="order-header-text">Customer Name</p>
                            <CiSearch/>
                        </div>
                        <hr className="order-header-hr"/>
                        <div className="order-header-ordervalue-container">
                            <p className="order-header-text">Order Value</p>
                            <RiContractUpDownFill/>
                        </div>
                        <hr className="order-header-hr"/>
                        <div className="order-header-status">
                            <p className="order-header-text">Status</p>
                        </div>
                    </div>
                    <div>
                        {
                            filteredData.map((each) => (
                                <OrderItems key={each.id} orderItemsDetails={each}/>
                            ))
                        }
                    </div>
                    <div className="no-pages-container">
                        <button type= "button"><FaAngleLeft/></button>
                        <p>1</p>
                        <button type="button"><FaAngleRight/></button>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Orders