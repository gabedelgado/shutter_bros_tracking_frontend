import CustomerProgressBar from "./CustomerProgressBar"

const OrderView = ({order}) => {
    const tracking = ["Pending", "Final Measurements Taken", "Order Placed", "Products being Fabricated", "Order Shipped to Shutter Brothers", "Order Received at Shutter Brothers", "Quality Control Inspection", "Products Ready to be Installed", "Installation Complete"]
    const permit = ["Pending", "Documents Signed", "Submitted", "County Review", "Revisions", "Permit Issued"]

    return (
        <div className=" border-2 rounded-lg text-left w-[90vw] lg:w-[80vw] m-auto p-4 mt-3 mb-3 lg:pb-20 relative">

            <p className="text-lg lg:text-2xl"><strong>Tracking Number:</strong> {order.orderNumber}</p>
            <p className="text-lg"> {order.customerName}</p>
            <p className="text-md lg:text-lg">{order.jobAddress}</p>
            
            <p className="mt-4 font-bold">Permit Status:</p>
            <CustomerProgressBar step={permit.indexOf(String(order.permitStatus)) + 1} options={["Pending", "Documents Signed", "Submitted", "County Review", "Revisions", "Permit Issued"]}/>
            
            <div className="lg:mt-12 lg:mb-20">
                <p className="mt-4 font-bold">Tracking Status: </p>
                <CustomerProgressBar step={tracking.indexOf(String(order.trackingStatus)) + 1} options={["Pending", "Final Measurements Taken", "Order Placed", "Products being Fabricated", "Order Shipped to SB", "Order Received at SB", "Quality Control Inspection", "Products Ready for Installation", "Installation Complete"]}/>  
            </div>
            
        </div>
    )
}

export default OrderView