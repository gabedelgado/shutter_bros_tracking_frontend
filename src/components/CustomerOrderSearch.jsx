import Input from "./Input"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import CustomerPermitProgressBar from "./CustomerPermitProgressBar"

const CustomerOrderSearch = () => {
    const [orderInput, setOrderInput] = useState("")
    const navigate = useNavigate()
    return (
        <div>
            <div className="w-[75vw] lg:w-[30vw] mx-auto flex flex-col mt-[25vh]">
                <h1 className=" font-bold lg:text-3xl text-xl mb-3 text-center">Enter Your Tracking Number</h1>
                <Input placeholder="Tracking Number" text={orderInput} setText={setOrderInput}/>
                <Button text="Track" className=" self-end" onClickFunc={() => navigate(`/order/${orderInput}`)}/>
            </div>
            <div className="w-[90%] my-5 mx-auto">
                <CustomerPermitProgressBar step={4} options={["Pending", "Documents Signed", "Submitted", "County Review", "Revisions", "Permit Issued"]}/>
                <CustomerPermitProgressBar step={4} options={["Pending", "Final Measurements Taken", "Order Placed", "Products being Fabricated", "Order Shipped to SB", "Order Received at SB", "Quality Control Inspection", "Products Ready to be Installed", "Installation Complete"]}/>
            </div>
        </div>
    )
}

export default CustomerOrderSearch