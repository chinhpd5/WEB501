import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyComponent(){
  const info = {
    name: "chinhpd5",
    age: 20,
    gender: true
  }

  return (
    <div>
      <h1>Xin chào các bạn</h1>
      <h2>Họ và tên: {info.name}</h2>
      <h3>Tuổi: {info.age}</h3>
      <h4>Giới tính: {info.gender ? 'Nam' : 'Nữ'}</h4>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <div>
    <MyComponent></MyComponent>
    {/* <MyComponent/> */}
  </div>
)
