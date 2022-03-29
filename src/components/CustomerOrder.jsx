// CHECK THE TOKEN AND DECIDE WHETHER OR NOT TO DISPLAY ADMIN ACTIONS
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {get} from "../http/service"
import OrderView from "./OrderView"

const CustomerOrder = () => {
    const [order, setOrder] = useState({})
    const {orderNumber} = useParams()

    useEffect(() => {
        get(`/order/${orderNumber}`).then(results => {
            setOrder(results.data)
        })
    }, [orderNumber])

    return (
        <div>
            <OrderView order={order}/>
        </div>
    )
}

export default CustomerOrder