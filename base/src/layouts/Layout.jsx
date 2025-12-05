import { Outlet,Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Danh sách</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Thêm mới</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Đăng ký</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Đăng nhập</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className='container'>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout