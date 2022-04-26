import { useEffect } from "react"
import AdminOrderView from "./AdminOrderView"
import {get} from "../http/service"
import {useState} from "react"
import AdminNav from "./AdminNav"

const AdminHome = ({admin}) => {
    const [orders, setOrders] = useState([])
    const [searchText, setSearchText] = useState("")
    const [viewOrders, setViewOrders] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        get("/order/all").then(results => {
            setOrders(results.data)
            setViewOrders(results.data)
            setDataLoaded(true)
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
            {dataLoaded ? <div className="row lg:mx-10">
                {viewOrders.map(order => <AdminOrderView key={order._id.$oid} order={order} className="col" admin={admin}/>)}
            </div> :
            <div className="mx-10 flex justify-center items-center mt-[10vh]"><div><p className="text-lg">Loading orders...</p></div></div>
            }
        </div>
    )
}

export default AdminHome