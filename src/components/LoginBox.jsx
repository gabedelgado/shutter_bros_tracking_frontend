import Input from "./Input"
import Button from "./Button"
import { useState } from "react"
import { post } from "../http/service"
import { useNavigate } from "react-router-dom"

const LoginBox = ({admin, setAdmin}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const login = (e) => {
        // DO LOGIN HERE
        e.preventDefault()
        post("/auth/login", {username, password}).then(results => {
            localStorage.setItem("token", results.data)
            navigate("/admin/all")
            setAdmin(true)
        }).catch(err => {
            setError(true)
        })
    }
    
    return (
        <div className="w-[75vw] lg:w-[30vw] mx-auto flex flex-col mt-[25vh]">
            <h1 className=" font-bold lg:text-3xl text-xl mb-3 text-center">Administrator Login</h1>
            
                {error && <p className=" text-red-700 mb-1">Username or Password was incorrect, please try again</p>}
                <Input placeholder="Username" text={username} setText={setUsername}/>
                <Input placeholder="Password" text={password} setText={setPassword}/>
                <div className=" self-end"><Button text="Login" onClickFunc={(e) => login(e)}/></div>
            
        </div>
    )
}

export default LoginBox