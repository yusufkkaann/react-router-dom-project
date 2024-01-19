import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Category() {
  // const params = useParams();
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((json) => setCategoryProducts(json))
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <>
      <h1>Kategori : {categoryName.toUpperCase()}</h1>
      <div className="row row-cols-sm-3 row-cols-md-4 ">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
