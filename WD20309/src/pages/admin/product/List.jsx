import React, { useEffect,useState } from 'react';
import instanceAxios from '../../../config/axiosConfig';
import { Link } from 'react-router-dom';

function List() {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    // const getProducts = async () => {
    //   try {
    //     const {data} = await axios.get(`http://localhost:3000/products`)
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getProducts();

    // IIFE
    (async ()=>{
      try {
        const {data} = await instanceAxios.get(`/products`)
        console.log(data);
        setProducts(data)
      } catch (error) {
        console.log(error);
      }
    })()
  },[])

  const handleDelete = async (id) => {
    if(!id)
      return;
    // console.log(id);
    try {
      if(window.confirm("Bạn có chắc chắn muốn xóa không")){
        await instanceAxios.delete(`products/${id}`)
        alert("Xóa thành công")
        setProducts((prev)=>{
          return prev.filter((item) => item.id != id)
        })
      }
    } catch (error) {
      console.log(error);
    }
    
  }


  return (
    <div>
      <div>
        <h1>Danh sách sản phẩm</h1>

        {/* <Link to='/admin/product/add' className="btn btn-primary" >Thêm mới</Link> */}
        <Link to='add' className="btn btn-primary" >Thêm mới</Link>
        
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Giá bán</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

            {
              products && (
                products.map((item,index)=>{
                  return (
                    <tr key={item.id}>
                      <th scope="row">{index+1}</th>
                      <td>{item.name}</td>
                      <td><img src={item.image} height={70} alt="" /></td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>{item.status ? 'Còn hàng': 'Hết hàng'}</td>
                      <td>
                        <button onClick={()=>{handleDelete(item.id)}} className="btn btn-danger">Xóa</button>
                        <Link to={`/admin/product/edit/${item.id}`} className='btn btn-warning'>Sửa</Link>
                        {/* <Link to={`edit/${item.id}`} className='btn btn-warning'>Sửa</Link> */}
                      </td>
                    </tr>
                  )
                })
              )
            }
            
            
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default List