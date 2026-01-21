import React from "react"
import Input from "./Input"
import Button from "./Button"

export default function Counter() {
    let [number, setNumber] = React.useState(0)
    function decrement() {
        if (number > 0) {
            number = number - 1
            setNumber(number)
        }
    }
    function increment() {
        if (number < 10) {
            number = number + 1
            setNumber(number)
        }
    }

    return (
        <div className="flex">
            <Button callback={decrement}>-</Button>
            <Input number={number}/>
            <Button callback={increment}>+</Button>
        </div>
    )
}