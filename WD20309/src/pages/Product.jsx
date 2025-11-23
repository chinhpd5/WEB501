import React, { useEffect, useState } from 'react'
import CardProduct from '../component/CardProduct'

function Product() {
  const [products,setProducts] = useState([])

  useEffect(()=>{

    fetch(`http://localhost:3000/products`)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        console.log(data);
        setProducts(data);
      })
      .catch((err)=>{
        console.log(err);
      })

  },[])

  return (
    <div className='row'>
      {
        products?.map((item,index)=> {
          return (
            <div key={item.id} className='col-3'>
              <CardProduct id={item.id} name={item.name} image={item.image} />
            </div>
          )
        })

      }

    </div>
  )
}

export default Product