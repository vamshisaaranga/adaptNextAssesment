import { CiSquarePlus } from "react-icons/ci";
import "./index.css"


const OrderItems = (props) => {
    const {orderItemsDetails} = props 
    const { channel, orderNo, orderDate, city, customerName, orderValue, status} = orderItemsDetails
    return (
        <div className="order-items-details-container">
            <div className="order-item-checkbox-container">
                <CiSquarePlus className="plus-icon"/>
                <input type="checkbox" className="order-items-checkbox"/>
            </div>
            <div className="order-item-channel-container">
                <img src={channel} alt="" className="orderItemsImage"/>
            </div>
            <div className="order-item-orderno-container">
                <a href="dfasf" >{orderNo}</a>
            </div>
            <div className="order-item-orderdate-container">
                <p className="order-item-text">{orderDate}</p>
            </div>
            <div className="order-item-city-container">
                <p className="order-item-text">{city}</p>
            </div>
            <div className="order-item-customername-container">
                <p className="order-item-text">{customerName}</p>
            </div>
            <div className="order-item-ordervalue-container">
                <p className="order-item-text">{orderValue}</p>
            </div>
            <div>
                <p>{status}</p>
            </div>
        </div>
    )
}

export default OrderItems