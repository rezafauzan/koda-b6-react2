import React from "react"

export default function Counter() {
    let [number, setNumber] = React.useState(0)
    function decrement() {
        if(number > 0){
            number = number - 1
            setNumber(number)
        }
    }
    function increment(){
        if(number < 10){
            number = number + 1
            setNumber(number)
        }
    }

    return (
        <div className="flex">
            <button className="bg-blue-500 p-4 text-white rounded shadow-lg cursor-pointer" onClick={decrement}>-</button>
            <input className="p-4 text-center" type="number" disabled value={number} />
            <button className="bg-blue-500 p-4 text-white rounded shadow-lg cursor-pointer" onClick={increment}>+</button>
        </div>
    )
}