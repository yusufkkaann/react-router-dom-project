import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Aradığınız sayfa bulunamadı.</h2>
      <Link className="btn btn-info" to="/">
        Ana Sayfa'ya dön
      </Link>
    </div>
  );
}
