# Cơ bản về React

Mục tiêu bài học:
- Hiểu được `React` là gì và vì sao nên học `React`.
- Hiểu được cách hoạt động cơ bản của `React`.
- Cài đặt môi trường và tạo project `React` đầu tiên với `vite`.
- Làm quen với `JSX` và `Component`.

---
## React là gì?
`React` là thư viện `JavaScript` dùng để xây dựng giao diện người dùng `(UI)`.
- Được phát triển bởi `Facebook`.
- Mạnh mẽ với `Component-based architecture`: chia giao diện thành nhiều thành phần nhỏ.
- Sử dụng `JSX` (`JavaScript XML`): cho phép viết `HTML` trong `JavaScript`.

### Tại sao nên học React ?
- Được dùng rộng rãi (`Facebook`, `Instagram`, `Shopee`, `Tiki`,...)
- Dễ học nếu đã biết `JavaScript`.
- Hiệu suất cao (sử dụng `Virtual DOM`).
- Có hệ sinh thái mạnh mẽ (`React Router`, `Redux`, `NextJS`, ...)

---
## Cài đặt môi trường
1. Bước 1: Cài `Node.js` 
- Tải tại: https://nodejs.org/en/download
- Kiểm tra:
```bash
node -v
npm -v
```

2. Bước 2: Tạo dự án bằng `vite`
```bash
npm create vite@latest
```
Làm theo hướng dẫn 
```
Project name:
> Nhập tên dự án

Select a framework:
> React

Select a variant:
> JavaScript

Use rolldown-vite (Experimental)?:
> No

Install with npm and start now?
> Yes
```

---
## JSX là gì?
`JSX` = `JavaScript` + `XML`
Dễ viết `UI` hơn (giống HTML), nhưng thực chất được chuyển thành `React.createElement()`.

---
## Component là gì?
Thành phần nhỏ dùng để tái sử dụng giao diện.
Có 2 loại:
- `Function component` (phổ biến)
- `Class component` (cũ, ít dùng)
Ví dụ `function component`:
```jsx
function Welcome() {
  return <h2>Chào mừng đến với WEB501</h2>;
}
```