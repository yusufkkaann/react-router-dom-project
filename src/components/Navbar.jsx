import { NavLink, Link } from "react-router-dom";

export default function Navbar({ user, handleLogout }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary mb-3 "
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            ZUZU-STORE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Ana Sayfa
              </NavLink>
              <NavLink className="nav-link" to="/urunler">
                Ürünler
              </NavLink>
              <NavLink className="nav-link" to="/hakkimizda">
                Hakkımızda
              </NavLink>
              <NavLink className="nav-link" to="/iletisim">
                İletişim
              </NavLink>
              <NavLink className="nav-link" to="/favoriler">
                Favoriler
              </NavLink>
              {user ? (
                <>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Çıkış yap ({user.name})
                  </button>
                </>
              ) : (
                <NavLink className="nav-link" to="/giris-yap">
                  Giriş Yap
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
