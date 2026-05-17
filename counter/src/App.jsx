import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {

    const [count, setCount] = useState(0);
    const [number , setnumber]= useState(0);

    const increment = () => {
        setCount(count +( number <=0 ? 1 : number))
        localStorage.setItem(('counter'), JSON.stringify(count));
    };

    const decrement = () => {
        setCount(count - (number <=0 ? 1 :number));
        localStorage.setItem(('counter'), JSON.stringify(count));
    };

    const reset = () => {
        setCount(0);
    };

    useEffect(() =>{
        const oldcount = JSON.parse(localStorage.getItem(count));
        if(oldcount)
            setCount(oldcount)
    },[])

return (
  <div className="container">
    <div className="counter-box">
      <h1>Counter</h1>

      <h2>{count}</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setnumber(Number(e.target.value) || 1)}
      />

      <div className="btns">
        <button onClick={increment}>+</button>

        <button onClick={decrement} disabled={count <= 0}>-</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  </div>
);
}

export default App