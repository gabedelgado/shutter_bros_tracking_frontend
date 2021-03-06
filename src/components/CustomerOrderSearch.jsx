import Input from "./Input"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

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
        </div>
    )
}

export default CustomerOrderSearch