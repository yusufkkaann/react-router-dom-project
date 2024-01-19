import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductCard({ product, user }) {
  const [text, setText] = useState(true);
  function handleClick(product) {
    let localFavs = JSON.parse(localStorage.getItem("favorites")) ?? [];
    const itemIndex = localFavs.findIndex(
      (localItem) => product.id === localItem.id
    );

    if (itemIndex >= 0) {
      localFavs = localFavs.filter((item) => item.id !== product.id);
      setText(true);
    } else {
      localFavs.push({ id: product.id, title: product.title });
      setText(false);
    }
    localStorage.setItem("favorites", JSON.stringify(localFavs));
  }

  useEffect(() => {
    handleClick(product);
  }, []);

  return (
    <>
      <div className="col-sm mb-3">
        <div className="card">
          <Link to={`/urunler/urun/${product.id}`}>
            <img
              src={product.image}
              className="card-img-top p-4"
              style={{ maxHeight: "260px" }}
            />
          </Link>
          <div className="card-body" style={{ minHeight: "214px" }}>
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              {product.description.substring(0, 20)}...
            </p>
            {user && (
              <a
                onClick={() => handleClick(product)}
                href="#"
                className="btn btn-primary"
              >
                {text ? "Favorilere Ekle" : "Favorilerden çıkart"}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
