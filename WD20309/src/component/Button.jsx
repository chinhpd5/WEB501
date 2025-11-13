import React, { useState } from 'react'

function Button() {
  let [count, setCount] = useState(1)

  const handleIncrease = () => {
    setCount(count++)
  }
  
  const handleDecrease = () => {
    setCount(count--)
  }
  
  const handleReset = () =>{
    setCount(0)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease} className="btn btn-primary">
        Tăng
      </button>
      <button onClick={handleDecrease} className="btn btn-danger">
        Giảm
      </button>
      <button onClick={handleReset} className="btn btn-warning">
        Reset
      </button>
    </div>
  )
}

export default Button