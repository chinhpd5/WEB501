import {Link, Outlet} from "react-router-dom"

function AdminLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-2 bg-dark text-white p-3" style={{ minHeight: '100vh'}}>
          <h4 className="text-center mb-4">Menu</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/admin" className="nav-link text-white">Dashboard</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/product" className="nav-link text-white">Sản phẩm</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/order" className="nav-link text-white">Đơn hàng</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/user" className="nav-link text-white">Người dùng</Link>
            </li>
          </ul>
        </nav>
        {/* Content phải */}
        <main className="col-10 p-4">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout