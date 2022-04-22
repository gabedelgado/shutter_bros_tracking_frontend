import ProgressBar from "./ProgressBar"
import CircledCheck from "./CircledCheck"
import LineTo from "react-lineto"

const CustomerPermitProgressBar = ({step, options}) => {
    // const permit = ["Pending", "Documents Signed", "Submitted", "County Review", "Revisions", "Permit Issued"]

    return (
        <div className="relative mb-24">
            <div className="hidden lg:block absolute w-[99%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 ">
                <ProgressBar percentage={Math.floor((step / options.length) * 100)}/>
            </div>
            <div className="flex items-start justify-between lg:items-center lg:flex-row flex-col">
                {options.map((option, index) => {
                    return (
                            <div key={option} className={`my-2 flex flex-col justify-center items-center relative`}>
                                <CircledCheck completed={index < step ? true : false}/>
                                <p className="w-[50vw] lg:w-auto text-lg absolute lg:text-center text-left lg:top-full lg:left-auto left-[110%]">{option}</p>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CustomerPermitProgressBar