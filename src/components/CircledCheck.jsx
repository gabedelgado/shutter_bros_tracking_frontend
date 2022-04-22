
const CircledCheck = ({completed}) => {
    
    return (
            <div style={{"backgroundColor": completed ? "#3b82f6" : "#bfdbfe"}} className="text-center h-14 w-14 bg-blue-500 rounded-[50%] flex justify-center items-center">
                <i style={{"color": completed ? "white" : "#fafafa"}} className="fas fa-check fa-2x "></i>
            </div>
    )
}

export default CircledCheck