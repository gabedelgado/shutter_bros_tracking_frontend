
const ProgressBar = ({percentage}) => {
    console.log(percentage)
    return (
        <div className="relative pt-1">
            <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
            </div>
        </div>
    )
}

export default ProgressBar