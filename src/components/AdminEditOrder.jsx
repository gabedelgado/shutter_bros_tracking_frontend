import { useCallback, useEffect, useState } from "react"
import { get, post } from "../http/service"
import Input from "./Input"
import { useNavigate, useParams } from "react-router-dom"
import Button from "./Button"

const AdminEditOrder = ({admin}) => {
    const [order, setOrder] = useState(null)
    const [customerName, setCustomerName] = useState("")
    const [jobAddress, setJobAddress] = useState("")
    const [permit, setPermit] = useState("")
    const [tracking, setTracking] = useState("")
    const {orderNumber} = useParams()
    const [updated, setUpdated] = useState(false)
    const [areYouSure, setAreYouSure] = useState(false)
    const navigate = useNavigate()
    const updateOrder = useCallback(() => {
        post(`/order/update/${orderNumber}`, {customerName, jobAddress, tracking, permit}).then(results => setUpdated(true))
    }, [customerName, jobAddress, tracking, permit, orderNumber])

    const deleteOrder = useCallback(() => {
        post(`/order/delete/${orderNumber}`).then(results => {
            navigate("/admin/all")
        })
    }, [orderNumber, navigate])

    useEffect(() => {
        get(`/order/${orderNumber}`).then(results => {
            // this is an awful way to do this, but I was too deep, should come back and think of a better way going back to backend
            const permitDisplayOptions = ["Pending", "Documents Signed", "Submitted", "County Review", "Revisions", "Permit Issued"]
            const trackingDisplayOptions = ["Pending", "Final Measurements Taken", "Order Placed", "Products being Fabricated", "Order Shipped to Shutter Brothers", "Order Received at Shutter Brothers", "Quality Control Inspection", "Products Ready to be Installed", "Installation Complete"]
            const permitOptions = ["PENDING", "DOCUMENTSSIGNED", "SUBMITTED", "COUNTYREVIEW", "REVISIONS", "PERMITISSUED"]
            const trackingOptions = ["PENDING", "FINALMEASUREMENTSTAKEN", "ORDERPLACED", "PRODUCTSBEINGFABRICATED", "ORDERSHIPPED", "ORDERRECEIVED", "QUALITYCONTROLINSPECTION", "READYTOINSTALL", "INSTALLATIONCOMPLETE"]
            
            setOrder(results.data)
            setCustomerName(results.data.customerName)
            setJobAddress(results.data.jobAddress)
            setTracking(trackingOptions[trackingDisplayOptions.indexOf(results.data.trackingStatus)])
            setPermit(permitOptions[permitDisplayOptions.indexOf(results.data.permitStatus)])
        })
    }, [orderNumber])

    return (
        <div className=" border-2 rounded-lg text-left w-[90vw] lg:w-[40vw] mx-auto p-4 mt-[5vh] lg:mt-[15vh] mb-3 relative">
            {order ? 
            <div>
                <p className="text-lg lg:text-2xl mb-2"><strong>EDITING:</strong> {order.orderNumber}</p>
                <Input text={customerName} setText={setCustomerName} placeholder={"Customer Name"}/>
                <Input text={jobAddress} setText={setJobAddress} placeholder={"Job Address"}/>
                <select className=" w-[100%] h-12 p-2 mb-3 rounded-md" value={permit} onChange={(e) => setPermit(e.target.value)}>
                    <option value="PENDING">Pending</option>
                    <option value="DOCUMENTSSIGNED">Documents Signed</option>
                    <option value="SUBMITTED">Submitted</option>
                    <option value="COUNTYREVIEW">County Review</option>
                    <option value="REVISIONS">Revisions</option>
                    <option value="PERMITISSUED">Permit Issued</option>
                </select>
                <select value={tracking} className=" w-[100%] h-12 p-2 mb-3 rounded-md" onChange={(e) => setTracking(e.target.value)} >
                    <option value="PENDING" onSelect={() => setTracking(0)}>Pending</option>
                    <option value="FINALMEASUREMENTSTAKEN" onSelect={() => setTracking(1)} >Final Measurements Taken</option>
                    <option value="ORDERPLACED" >Order Placed</option>
                    <option value="PRODUCTSBEINGFABRICATED" >Products being Fabricated</option>
                    <option value="ORDERSHIPPED" >Order Shipped to Shutter Brothers</option>
                    <option value="ORDERRECEIVED" >Order Received at Shutter Brothers</option>
                    <option value="QUALITYCONTROLINSPECTION" >Quality Control Inspection</option>
                    <option value="READYTOINSTALL" >Products Ready to be Installed</option>
                    <option value="INSTALLATIONCOMPLETE" >Installation Complete</option>
                </select>
            </div> : <p className="text-lg mt-[15vh]">Loading order...</p>}
            {/* select for tracking status */}
            <div className=" flex flex-col lg:items-center lg:flex-row">
                <div className="mr-3 mb-3">
                    <Button text="Update" onClickFunc={updateOrder}/>
                    {updated && <i className="mx-3 fas fa-check"></i>}
                </div>
                
               
                    <div className="mb-3">
                        {areYouSure ?
                        <div className="flex items-center">
                            <p className="lg:mx-3 text-sm p-0 mr-2">Are you sure?</p>
                            <Button red={true} text="Yes, Delete" onClickFunc={deleteOrder}/>
                            <i onClick={() => setAreYouSure(false)} className="hover:cursor-pointer fas fa-times-circle mx-3"></i>
                        </div>
                            :
                         <div className="w-[115px] ">
                            <Button red={true} text="Delete" onClickFunc={() => setAreYouSure(true)}/>
                         </div>}
                    </div>
            </div>
        </div>
    )
}

export default AdminEditOrder