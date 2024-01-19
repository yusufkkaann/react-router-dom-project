import React, { useEffect, useState } from "react";
import { ProductCard } from "../products";

export default function Pruducts({ user }) {
  const [products, setProducts] = useState([]); // ürünleri kaydetmek için state tanımladık

  useEffect(() => {
    // ürünleri fetch ile çekip state'e kaydediyoruz
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []); // sadece ilk render'da çalışsın diye boş array verdik
  return (
    <>
      <h2>Ürünler: </h2>
      <div className="row row-cols-sm-3 row-cols-md-4 ">
        {products.map((product) => (
          <ProductCard user={user} key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
