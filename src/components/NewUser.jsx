import Input from "./Input"
import Button from "./Button"
import { useCallback, useState } from "react"
import { post } from "../http/service"

const NewUser = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [userCreated, setUserCreated] = useState(false)
    const [error, setError] = useState(false)

    const signup = useCallback(() => {
        post("/auth/signup", {username, password, password2}).then(results => setUserCreated(true)).catch((err) => setError(err.response.data))
    }, [username, password, password2])

    return (
        <div className="w-[75vw] lg:w-[30vw] mx-auto flex flex-col mt-[15vh] lg:mt-[20vh]">
            {userCreated ? <p>User successfully created. They can now login on their device.</p> : <div>
                <h1 className=" font-bold lg:text-3xl text-xl mb-3 text-center">Create New User</h1>
                
                <form>
                    {error && <p className=" text-red-700 mb-1">{error}</p>}
                    <Input placeholder="Username" text={username} setText={setUsername}/>
                    <Input placeholder="Password" text={password} setText={setPassword}/>
                    <Input placeholder="Verify Password" text={password2} setText={setPassword2}/>
                
                    <Button text="Create User" className=" self-end" onClickFunc={signup}/>
                </form>
            </div>}
        </div>
    )
}

export default NewUser