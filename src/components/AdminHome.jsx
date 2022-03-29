import { useEffect } from "react"
import OrderView from "./OrderView"
import {get} from "../http/service"
import {useState} from "react"
const AdminHome = ({admin}) => {
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        get("/order/all").then(results => {
            setOrders(results.data)
        })
    }, [])
    
    return (
        <div className="row lg:mx-10">
            {orders.map(order => <OrderView key={order._id.$oid} order={order} className="col" admin={admin}/>)}
        </div>
    )
}

export default AdminHome