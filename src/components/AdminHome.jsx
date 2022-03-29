import { useEffect } from "react"
import OrderView from "./OrderView"
import {get} from "../http/service"
import {useState} from "react"
const AdminHome = () => {
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        get("/order/all").then(results => {
            setOrders(results.data)
        })
    }, [])
    
    return (
        <div>
            {orders.map(order => <OrderView key={order._id} order={order}/>)}
        </div>
    )
}

export default AdminHome