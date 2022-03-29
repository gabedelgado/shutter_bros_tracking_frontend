
const Button = (props) => {
    return (
        <button onClick={props.onClickFunc} className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
            {props.text}
        </button>
    )
}

export default Button