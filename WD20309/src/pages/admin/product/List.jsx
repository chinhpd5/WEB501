import React, { useEffect } from 'react';
import instanceAxios from '../../../config/axiosConfig';

function List() {

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
      } catch (error) {
        console.log(error);
      }
    })()
    

  },[])


  return (
    <div>
      <div>
        <h1>Danh sách sản phẩm</h1>
        
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default List