import { useState } from "react"

function Count(){
    const [number, setNumber]= useState(0);
    const Increase = () => {
        setNumber(number + 1)
    }
    const Decrease = () => {
        setNumber(number - 1)
    }
    const Reset = () => {
        setNumber(0)
    }
    return (
        <div className="Container">
            <p>Coint Number</p>
        <h1>{number}</h1>
        <button onClick={Increase} className="increase">Increase</button>
        <button onClick={Decrease} className="Decrease">Decrease</button>
        <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default Count