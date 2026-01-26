/**
* @param {Function} setter 
* @param {number} getter 
* @param {true|false} increment 
*/
function increaseDecrease(setter, getter, increment = true) {
    if (increment) {
        if (getter < 10) {
            setter(++getter)
        }
    } else {
        if (getter > 0) {
            setter(--getter)
        }
    }
}

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
    const { theme, currentState, setter, increment, ...buttonDefault } = props

    function execute() {
        increaseDecrease(setter, currentState, increment)
    }
    return (
        <button className={(theme === "blue" ? "bg-blue-400 text-white " : "bg-white ") + "border border-black/40 p-4  rounded shadow-xl cursor-pointer"} {...buttonDefault} onClick={execute}>{props.children}</button>
    )
}

export default Button