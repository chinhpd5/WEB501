import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyComponent(){

  return (
    <div>
      <h1>Xin chào các bạn</h1>
      <h2>Chinhpd5</h2>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <div>
    <MyComponent></MyComponent>
    <MyComponent/>
  </div>
)
