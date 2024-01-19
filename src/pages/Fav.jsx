import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Fav() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favorites")) ?? []);
  }, []);

  return (
    <>
      <h1>Favoriler</h1>

      <div className="list-group mb-3">
        {favs.map((item) => (
          <Link
            key={item.id}
            to={`/urunler/urun/${item.id}`}
            className="list-group-item list-group-item-action"
          >
            {item.title.toUpperCase()}
          </Link>
        ))}
      </div>
      <p>sepetinizde toplam {favs.length} adet ürün bulunuyor.</p>
    </>
  );
}
