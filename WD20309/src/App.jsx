import  {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import ClientLayout from './layouts/ClientLayout'
import AdminLayout from './layouts/AdminLayout'
import ProductList from './pages/admin/product/List'
import ProductAdd from './pages/admin/product/Add'

function App() {

  return (
    <>
      
      <Routes>

        <Route path='/' element={<ClientLayout/>}>
          <Route path='' element={ <Home/> } />
          <Route path='product' element={ <Product/> } />
          <Route path='product/:id' element={ <ProductDetail/> } />
          <Route path='about' element={ <About/> } />
        </Route>

        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='product' element={<ProductList/>}/>
          <Route path='product/add' element={<ProductAdd/>}/>
        </Route>

        
        <Route path='*' element={ <h1>Not Found</h1> } />
      </Routes>

    </>
  )
}

export default App
