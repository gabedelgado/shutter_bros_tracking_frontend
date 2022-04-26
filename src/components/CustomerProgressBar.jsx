import ProgressBar from "./ProgressBar"
import CircledCheck from "./CircledCheck"

const CustomerProgressBar = ({step, options}) => {

    return (
        <div className="relative mb-4">
            <div className="hidden lg:block absolute w-[99%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 ">
                <ProgressBar percentage={Math.floor((100 / (options.length - 1)) * (step - 1))}/>
            </div>
            <div className="flex items-start justify-between lg:items-center lg:flex-row flex-col">
                {options.map((option, index) => {
                    return (
                            <div key={option} className={`my-2 flex flex-col justify-center items-center relative`}>
                                
                                <div className="relative">
                                    {index > 0 && <div style={{"backgroundColor": index < step ? "#3b82f6" : "#bfdbfe"}} className="bg-blue-200 h-4 w-1 block lg:hidden absolute left-1/2 -translate-y-full -translate-x-1/2 " />}
                                    <CircledCheck completed={index < step ? true : false}/>
                                </div>
                                
                                <p className="w-[50vw] lg:w-auto text-lg absolute lg:text-center text-left lg:top-full lg:left-auto left-[110%]">{option}</p>
                                

                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CustomerProgressBar