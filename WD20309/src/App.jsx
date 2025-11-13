import Product from "./component/Product"


function App() {
  const data = {
    name: "Chuột không dây Logitech M331",
    price: 350000,
    category: "Phụ kiện máy tính",
    inStock: true,
    image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1671853906962-RV08WWNIS1LTNE453MOX/Artboard%2B2.jpg?format=750w"
  }

  return (
    <div>
      <Product/>
    </div>
  )
}

export default App
