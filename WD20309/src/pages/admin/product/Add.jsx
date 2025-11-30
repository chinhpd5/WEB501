import React from 'react';
import { useForm } from 'react-hook-form'
import instanceAxios from '../../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function Add() {
  const nav = useNavigate();

  const {
    register, // đăng ký trường giá trị trong form
    handleSubmit, // xử lý thao tác submit của form
    formState: {errors}
  } = useForm();

  const onSubmit = async (value) => {
    // console.log(value);
    // ép kiểu
    const data = {
      ...value,
      price: Number(value.price), // ép kiểu number
      status: value.status == "true" ? true : false // ép kiểu boolean
    }

    try {
      // call api thêm mới
      await instanceAxios.post('/products',data)
      // thông báo
      alert("Thêm thành công")
      // chuyển trang danh sách
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
          <input type="text" className="form-control" id="name" {...register('name', {
            required: "Không để trống tên sản phẩm",
            minLength: {
              value: 3,
              message: "Cần tối thiểu 3 ký tự"
            },
            maxLength: {
              value: 10,
              message: "Cần tối đa 10 ký tự"
            }
          })} />

          {errors.name && <span className='text-danger'>{errors.name.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Giá bán</label>
          <input type="number" className="form-control" id="price" {...register('price',{
            required: "Không để trống giá bán",
            min: {
              value: 0,
              message: "Không để giá bán âm"
            },
            max: {
              value: 100000,
              message: "Giá bán tối đa 100k"
            }
          })} />
          {errors.price && <span className='text-danger'>{errors.price.message}</span>}

        </div>

        <div className="mb-3">
          <label className="form-label">Trạng thái</label>

          <div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" id="inStock" value={true} {...register('status',{
                required: "Cần chọn trạng thái"
              })} />
              <label className="form-check-label" htmlFor="inStock">
                Còn hàng
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" id="outStock" value={false} {...register('status',{
                required: "Cần chọn trạng thái"
              })} />
              <label className="form-check-label" htmlFor="outStock">
                Hết hàng
              </label>
            </div>
          </div>
          {errors.status && <span className='text-danger'>{errors.status.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Hình ảnh</label>
          <input type="text" className="form-control" id="image" {...register('image')} />
        </div>

        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select className="form-select" {...register('category',{
            required: "Không để trống danh mục"
          })}>
            <option></option>
            <option value="Gaming">Gaming</option>
            <option value="Máy ảnh">Máy ảnh</option>
            <option value="Máy tính bảng">Máy tính bảng</option>
            <option value="Màn hình">Màn hình</option>
            <option value="Phụ kiện">Phụ kiện</option>
            <option value="Âm thanh">Âm thanh</option>
            <option value="Điện thoại">Điện thoại</option>
            <option value="Laptop">Laptop</option>
          </select>
          {errors.category && <span className='text-danger'>{errors.category.message}</span>}
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Add