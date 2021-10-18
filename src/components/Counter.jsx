/* eslint-disable no-unused-vars */
import { useState } from 'react'
import "./Counter.css"
const Counter = () => {
const [counterValue, setCounterValue] = useState(0)
const [inputValue, setInputValue] = useState(1)

const addToCounter = ()=>{
    setCounterValue(parseInt(parseInt(counterValue) + parseInt(inputValue)))
}
const subtractFromCounter = ()=>{
    setCounterValue(parseInt(parseInt(counterValue) - parseInt(inputValue)))
}

    return (
        <div>
            <h3 data-testid="heading">My Counter:</h3>
            <h2 data-testid="counter" className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}` }>{parseInt(counterValue)}</h2>
            <button data-testid="minus"  onClick={subtractFromCounter}>-</button>
            <input className="text-center"  data-testid="input" type="number" value={parseInt(inputValue)}  onChange={(e)=>parseInt(setInputValue(e.target.value))} />
            <buttton data-testid="plus" onClick={addToCounter}>+</buttton>
        </div>
    )
}

export default Counter
