import ProgressBar from "./ProgressBar"

const OrderView = ({order}) => {
    return (
        <div className=" border-2 rounded-lg text-left w-[90vw] lg:w-[40vw] m-auto p-4 mt-3">
            <p className="text-xl lg:text-2xl"><strong>Tracking Number:</strong> {order.orderNumber}</p>
            <p className="text-lg"> {order.customerName}</p>
            <p className="text-md lg:text-lg">{order.jobAddress}</p>
            <p className="mt-4"><strong>Permit Status:</strong> {order.permitStatus}</p>
            <ProgressBar percentage="80"/>
            <div className="lg:flex mt-4">
                <p className="font-bold lg:mr-1">Tracking Status: </p>
                <p> {order.trackingStatus}</p>
            </div>
            <ProgressBar percentage={0}/>
        </div>
    )
}

export default OrderView