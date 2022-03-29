
const Input = ({placeholder, text, setText}) => {
    
    return (
        <div className="mb-3 pt-0">
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder={placeholder} className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"/>
        </div>
    )
}

export default Input