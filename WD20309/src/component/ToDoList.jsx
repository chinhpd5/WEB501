import React, { useState } from 'react'

function ToDoList() {

  const [jobs, setJobs] = useState(['Ăn','Ngủ', 'Nghỉ'])

  return (
    <div>
      <ul>
        {jobs.map((item,index)=>{
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList