const Button = (props) => {
    return (
        <button className="bg-blue-500 p-4 text-white rounded shadow-lg cursor-pointer" onClick={props.callback}>{props.children}</button>
    )
}

export default Button