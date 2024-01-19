import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories({ user }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <>
      <h2>Kategoriler</h2>
      <div className="list-group mb-3">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/urunler/category/${category}`}
            className="list-group-item list-group-item-action"
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}
