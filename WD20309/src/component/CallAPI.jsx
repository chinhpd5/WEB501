import React, { useEffect, useState } from 'react'

function CallAPI() {

  const [list, setList] = useState([]);
  const [id,setId] = useState(null);
  const [product, setProduct] = useState(null)

  // UseEffect với []
  // chỉ gọi callback lần đầu tiên

  useEffect(()=>{
    fetch(`http://localhost:3000/products`)
      .then((res)=>{
        // console.log(res);
        return res.json();
      })
      .then(data => {
        // console.log(data);
        setList(data)
      })
      .catch(err=>{
        console.log(err);
      })
  },[])

  useEffect(()=>{
   if(id){
      fetch(`http://localhost:3000/products/${id}`)
        .then((res)=>{
          return res.json()
        })
        .then((data) => {
          // console.log(data);
          setProduct(data)
        })
        .catch((err)=> {
          console.log(err);
        })
   }
  },[id])

  return (
    <div className='d-flex justify-content-center'>
      <div>
        <h1>Danh sách sản phẩm</h1>
        <ul>
          {list?.map((item,index) => {
            return (
              <li onClick={ () => {
                setId(item.id)
              }} key={index}>{index+1}. {item.name}</li>
            )
          })}
        </ul>
      </div>

      <div>
        <h1>Thông tin chi tiết</h1>
        {product && (
          <div>
            <h3>Tên sản phẩm: {product.name}</h3>
            <h3>Giá bán: {product.price}</h3>
            <h3>Giá bán: {product.price}</h3>
            <h3>Danh mục: {product.category}</h3>
            <img width={100} src={product.image} alt="ảnh lỗi" />
          </div>
        )}
      </div>
    </div>
  )
}

export default CallAPI