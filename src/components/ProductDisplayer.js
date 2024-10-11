import { useState } from "react";

import ProductDetail from "./ProductDetail";

const ProductDisplayer = ({ product }) => {
  const [displayDetail, setDisplayDetail] = useState(false);

  return (
    <div
      className="product-displayer"
      onClick={() => setDisplayDetail(!displayDetail)}
    >
      {product.code} - {product.name} - {product.price} euros
      {displayDetail && (
        <ProductDetail
          displayDetail={displayDetail}
          setDisplayDetail={setDisplayDetail}
          product={product}
        ></ProductDetail>
      )}
    </div>
  );
};

export default ProductDisplayer;
