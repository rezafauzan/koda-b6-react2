/**
 * @typedef {object} ButtonProps
 * @property {"blue"?} theme
 */

/**
 * 
 * @typedef {React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps} HTMLButtonProps 
 */

/**
 * @param {HTMLButtonProps} props 
 * @returns {import("react").JSX.Element}
 */
const Button = (props) => {
    const { theme, ...buttonDefault } = props
    return (
        <button className={(theme === "blue" ? "bg-blue-400 text-white " : "bg-white ") + "border border-black/40 p-4  rounded shadow-xl cursor-pointer"} {...buttonDefault}>{props.children}</button>
    )
}

export default Button