import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail(){

  const {id} = useParams();
  const [product,setProduct] = useState({})
  // console.log(id);

  useEffect(()=>{
    if(id){
      fetch(`http://localhost:3000/products/${id}`)
        .then(res=>{
          return res.json();
        })
        .then(data =>{
          console.log(data);
          setProduct(data)
        })
    }

  },[id])
  

  return (
    <div>
      Chi tiết sản phẩm
    </div>
  )
}

export default ProductDetail;