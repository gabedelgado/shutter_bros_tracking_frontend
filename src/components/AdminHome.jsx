import { useEffect } from "react"
import OrderView from "./OrderView"
import {get} from "../http/service"
import {useState} from "react"
import AdminNav from "./AdminNav"

const AdminHome = ({admin}) => {
    const [orders, setOrders] = useState([])
    const [searchText, setSearchText] = useState("")
    const [viewOrders, setViewOrders] = useState([])

    useEffect(() => {
        get("/order/all").then(results => {
            setOrders(results.data)
            setViewOrders(results.data)
        })
    }, [])

    useEffect(() => {
        setViewOrders([...orders].filter(order => {
            if (order.customerName.toLowerCase().match(searchText.toLowerCase()) || order.jobAddress.toLowerCase().match(searchText.toLowerCase()) || order.orderNumber.toLowerCase().match(searchText.toLowerCase())){
                return true
            }
            else {return false}
        }))
    }, [searchText, orders])
    
    return (
        <div>
            <AdminNav searchText={searchText} setSearchText={setSearchText}/>
            <div className="row lg:mx-10">
                {viewOrders.map(order => <OrderView key={order._id.$oid} order={order} className="col" admin={admin}/>)}
            </div>
        </div>
    )
}

export default AdminHome