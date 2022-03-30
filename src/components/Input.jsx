
const Input = ({placeholder, text, setText, width}) => {
    
    return (
        <div className={`mb-3 pt-0 `}>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder={placeholder} className={`text-md lg:text-xl px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded border border-slate-300 outline-none focus:outline-none focus:ring ${width ? `w-[${width}vw]` : "w-full"}`}/>
        </div>
    )
}

export default Input