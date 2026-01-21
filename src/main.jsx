import { createRoot } from "react-dom/client";
import Counter from "./components/Counter";
import './assets/css/style.css'

const root = createRoot(document.getElementById('root'))

const CounterContainer = function(){
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4 mx-auto">
            <h1>Counter App</h1>
            <Counter />
        </div>
    )
}

root.render(<CounterContainer />)