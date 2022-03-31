import Input from "./Input"
import { useNavigate } from "react-router-dom"

const AdminNav = ({searchText, setSearchText}) => {
    const navigate = useNavigate()
    return (
        <div className="px-[8vw] mx-auto flex flex-row-reverse items-center justify-end">
            <div className="flex">
                <i onClick={() => navigate("/admin/manualEntry")} className="ml-3 mb-3 fas fa-plus-square fa-2x hover:cursor-pointer"></i>
                <i onClick={() => navigate("/admin/newUser")} className="ml-3 mb-3 fas fa-user-plus fa-2x hover:cursor-pointer"></i>
            </div>
            <div>
                <Input text={searchText} setText={setSearchText} placeholder="Search Orders" />
            </div>
        </div>
    )
}

export default AdminNav