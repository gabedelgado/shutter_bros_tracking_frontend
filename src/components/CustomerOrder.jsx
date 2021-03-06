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
        <div className="mt-5 lg:mt-20">

            
            {order === false ? <div className="flex justify-center items-center flex-col w-[95vw] mx-auto">
                <div>
                    <p className="pt-[10vh] mx-[3vh] text-lg lg:text-2xl mb-2 text-center">Sorry, we couldn't find an order with that tracking number. Please try again.</p>
                </div>
                <div>
                    <Button onClickFunc={() => navigate("/")} text="Track Order" />
                </div>
            </div> : order === null ? <p className="text-center">Loading your order information...</p> : <OrderView order={order}/>}
        </div>
    )
}

export default CustomerOrder