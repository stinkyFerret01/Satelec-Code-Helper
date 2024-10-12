import { useEffect } from "react";
import ProductDisplayer from "./ProductDisplayer";

const ProductsDisplayer = ({ productsList, estimate, setEstimate }) => {
  useEffect(() => {
    // console.log("ProductsDisplayer");
  }, [productsList]);

  return (
    <div className="products-displayer">
      {productsList.length > 0 &&
        productsList.map((product, index) => (
          <ProductDisplayer
            key={index}
            product={product}
            estimate={estimate}
            setEstimate={setEstimate}
          ></ProductDisplayer>
        ))}
      <div className="filter-rules">
        {productsList.length === 0 && (
          <p>
            Veuillez entrer un nom de produit (minimum 3 caractères) ou
            choisissez une catégorie.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsDisplayer;
