import React, { useState } from 'react'

function ToDoList() {
  const [text, setText] = useState('')
  const [jobs, setJobs] = useState(['Ăn','Ngủ', 'Nghỉ'])

  console.log(text);
  
  const handleAdd = () => {
    setJobs((prev) => {
      return [...prev, text]; //spread
    })

    setText('')
  }

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={ (e)=>{
          // console.log(e.target.value);
          setText(e.target.value)
        }}
      />
      <button onClick={handleAdd} className='btn btn-primary'>Thêm</button>
      <ul>
        {jobs.map((item,index)=>{
          return (
            <li key={index}>
              {item} 
              <button className="btn btn-danger">Xóa</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList