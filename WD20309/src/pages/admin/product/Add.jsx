import React from 'react';
import { useForm } from 'react-hook-form'
import instanceAxios from '../../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function Add() {
  const nav = useNavigate();

  const {
    register, // đăng ký trường giá trị trong form
    handleSubmit // xử lý thác tác submit của form
  } = useForm();

  const onSubmit = async (value) => {
    // console.log(value);
    const data = {
      ...value,
      price: Number(value.price),
      status: value.status == "true" ? true : false
    }

    try {
      await instanceAxios.post('/products',data)
      alert("Thêm thành công")
      nav('/admin/product')

    } catch (error) { 
      console.log(error);
      
    }
  }

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Tên sản phẩm</label>
          <input type="text" className="form-control" id="name" {...register('name')} />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Giá bán</label>
          <input type="number" className="form-control" id="price" {...register('price')} />
        </div>

        <div className="mb-3">
          <label className="form-label">Trạng thái</label>

          <div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" id="inStok" value={true} {...register('status')} />
              <label className="form-check-label" htmlFor="inStok">
                Còn hàng
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" id="outStock" value={false} {...register('status')} />
              <label className="form-check-label" htmlFor="outStock">
                Hết hàng
              </label>
            </div>
          </div>

        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Hình ảnh</label>
          <input type="text" className="form-control" id="image" {...register('image')} />
        </div>

        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select className="form-select" {...register('category')}>
            <option>Open this select menu</option>
            <option value="Gaming">Gaming</option>
            <option value="Máy ảnh">Máy ảnh</option>
            <option value="Máy tính bảng">Máy tính bảng</option>
            <option value="Màn hình">Màn hình</option>
            <option value="Phụ kiện">Phụ kiện</option>
            <option value="Âm thanh">Âm thanh</option>
            <option value="Điện thoại">Điện thoại</option>
            <option value="Laptop">Laptop</option>
          </select>

        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Add