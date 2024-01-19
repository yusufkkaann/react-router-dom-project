import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams(); // useParams() hook'u ile parametreleri alıyoruz.
  // console.log(productId);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.log(err));
  }, [productId]);

  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <>
      <h1>Product</h1>
      <div className="row">
        <h2>{product.title}</h2>
        <img
          style={{ width: "50%" }}
          className="img-thumbnail"
          src={product.image}
          alt=""
        />
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </>
  );
}
