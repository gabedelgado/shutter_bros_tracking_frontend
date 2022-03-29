import Input from "./Input"
import Button from "./Button"
import { useState } from "react"
import { post } from "../http/service"
import { useNavigate } from "react-router-dom"

const LoginBox = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const login = (e) => {
        // DO LOGIN HERE
        e.preventDefault()
        post("/auth/login", {username, password}).then(results => {
            localStorage.setItem("token", results.data)
            navigate("/admin/all")
        })
    }
    
    return (
        <div className="w-[75vw] lg:w-[30vw] m-auto flex flex-col mt-[25vh]">
            <h1 className=" font-bold lg:text-3xl text-xl mb-3">Administrator Login</h1>
            <form>
                <Input placeholder="Username" text={username} setText={setUsername}/>
                <Input placeholder="Password" text={password} setText={setPassword}/>
                <Button text="Login" className=" self-end" onClickFunc={(e) => login(e)}/>
            </form>
        </div>
    )
}

export default LoginBox