import { useEffect } from "react";
import ProductDisplayer from "./ProductDisplayer";

const ProductsDisplayer = ({ productsList }) => {
  useEffect(() => {
    // console.log("PD");
  }, [productsList]);

  return (
    <div className="products-displayer">
      <div>
        {productsList.length > 0 &&
          productsList.map((product, index) => (
            <ProductDisplayer key={index} product={product}></ProductDisplayer>
          ))}
      </div>
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
