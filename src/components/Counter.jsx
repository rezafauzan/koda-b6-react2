import React from "react"
import Input from "./Input"
import Button from "./Button"

/**
 * 
 * @returns {React.JSX.Element}
 */
export default function Counter() {
    let [number, setNumber] = React.useState(0) // [number ; setter]

    return (
        <div className="flex">
            <Button theme={"blue"} currentState={number} setter={setNumber} increment={false}>-</Button>
            <Input number={number}/>
            <Button currentState={number} setter={setNumber} increment={true}>+</Button>
        </div>
    )
}