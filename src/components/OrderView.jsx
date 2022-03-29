import ProgressBar from "./ProgressBar"

const OrderView = ({order, admin}) => {
    const tracking = ["Pending", "Final Measurements Taken", "Order Placed", "Products being Fabricated", "Order Shipped to Shutter Brothers", "Order Received at Shutter Brothers", "Quality Control Inspection", "Products Ready to be Installed", "Installaion Complete"]
    const permit = ["Pending", "Documents Signed", "Submitted", "County Review", "Revisions", "Permit Issued"]
    
    return (
        <div className=" border-2 rounded-lg text-left w-[90vw] lg:w-[40vw] m-auto p-4 mt-3 mb-3 relative">
            {admin && <div className=" absolute top-4 right-4 hover:cursor-pointer"><i className="fas fa-edit" onClick={()=> console.log("edit")}></i></div>}
            
            <p className="text-lg lg:text-2xl"><strong>Tracking Number:</strong> {order.orderNumber}</p>
            <p className="text-lg"> {order.customerName}</p>
            <p className="text-md lg:text-lg">{order.jobAddress}</p>
            <p className="mt-4"><strong>Permit Status:</strong> {order.permitStatus}</p>
            <ProgressBar percentage={Math.floor(((permit.indexOf(String(order.permitStatus))) / (permit.length - 1)) * 100)}/>
            <div className="lg:flex mt-4">
                <p className="font-bold lg:mr-1">Tracking Status: </p>
                <p> {order.trackingStatus}</p>
            </div>
            <ProgressBar percentage={Math.floor(((tracking.indexOf(String(order.trackingStatus))) / (tracking.length - 1)) * 100)}/>
        </div>
    )
}

export default OrderView