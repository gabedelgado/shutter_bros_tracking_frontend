// CHECK THE TOKEN AND DECIDE WHETHER OR NOT TO DISPLAY ADMIN ACTIONS
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {get} from "../http/service"
import OrderView from "./OrderView"
import Button from "./Button"

const CustomerOrder = () => {
    const [order, setOrder] = useState(null)
    const {orderNumber} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        get(`/order/${orderNumber}`).then(results => {
            setOrder(results.data)
        }).catch(err => setOrder(false))
    }, [orderNumber])

    return (
        <div className="mt-[15vh]">

            
            {order === false ? <div>
                <p className="pt-[10vh] mx-[3vh] text-lg lg:text-2xl mb-2">Sorry, we couldn't find an order with that tracking number. Please try again.</p>
            <Button onClickFunc={() => navigate("/")} text="Track Order" />
            </div> : order === null ? <p>Loading your order information...</p> : <OrderView order={order}/>}
        </div>
    )
}

export default CustomerOrder