import { useState } from "react";

const ProductDisplayer = ({ product }) => {
  const [productDetail, setProductDetail] = useState(false);

  return (
    <div className="product-displayer" onClick={() => setProductDetail(true)}>
      {product.code} - {product.name} - {product.price} euros
      {productDetail && <div>yo</div>}
    </div>
  );
};

export default ProductDisplayer;
