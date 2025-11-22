import  {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import ClientLayout from './layouts/ClientLayout'
function App() {

  return (
    <>
      
      <Routes>

        <Route path='/' element={<ClientLayout/>}>
          <Route path='' element={ <Home/> } />
          <Route path='product' element={ <Product/> } />
          <Route path='about' element={ <About/> } />
        </Route>

        
        <Route path='*' element={ <h1>Not Found</h1> } />
      </Routes>

    </>
  )
}

export default App
