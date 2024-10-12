import { useState } from "react";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import ProductDetail from "./ProductDetail";

const ProductDisplayer = ({
  product,
  estimate,
  setEstimate,
  displayEstimate,
}) => {
  const [displayDetail, setDisplayDetail] = useState(false);

  const calculateTotal = (price, quantity) => {
    const total = price * quantity;

    return total.toFixed(2);
  };

  const removeFromEstimate = () => {
    setEstimate((prevEstimate) => {
      const productIndex = prevEstimate.findIndex(
        (item) => item.code === product.code
      );

      const updatedEstimate = [...prevEstimate];

      if (
        updatedEstimate[productIndex] &&
        updatedEstimate[productIndex].quantity !== 0
      ) {
        updatedEstimate[productIndex].quantity -= 1;
      }

      if (
        updatedEstimate[productIndex].quantity === 0 &&
        updatedEstimate[productIndex].code !== "    "
      ) {
        return updatedEstimate.filter((item) => item.code !== product.code);
      }

      return updatedEstimate;
    });
  };

  const addToEstimate = () => {
    console.log("click");

    setEstimate((prevEstimate) => {
      const productIndex = prevEstimate.findIndex(
        (item) => item.code === product.code
      );

      if (productIndex !== -1) {
        const updatedEstimate = [...prevEstimate];

        updatedEstimate[productIndex].quantity += 1;
        return updatedEstimate;
      } else {
        const newEstimate = [...prevEstimate];
        newEstimate.splice(newEstimate.length - 1, 0, {
          ...product,
          quantity: 1,
        });
        return newEstimate;
      }
    });
  };

  const isProductInEstimate = (product, estimate) => {
    return estimate.find((item) => item.code === product.code);
  };

  return (
    <div
      className="product-displayer"
      style={product.name === "Heures de travail" ? { marginTop: "40px" } : {}}
    >
      <div
        className="product-info"
        onClick={() => setDisplayDetail(!displayDetail)}
      >
        {product.code} - {product.name} -
        {displayEstimate
          ? " " + calculateTotal(product.price, product.quantity) + " euros"
          : " " + product.price + " euros"}
      </div>
      <div
        className={`manage-estimate ${
          isProductInEstimate(product, estimate) &&
          isProductInEstimate(product, estimate).quantity > 0
            ? "when-into"
            : ""
        }`}
      >
        {isProductInEstimate(product, estimate) &&
          isProductInEstimate(product, estimate).quantity > 0 && (
            <button
              className="remove-from-estimate-button"
              onClick={removeFromEstimate}
            >
              <RemoveIcon
                style={{
                  fontSize: 30,
                }}
              />
            </button>
          )}
        {isProductInEstimate(product, estimate) &&
          isProductInEstimate(product, estimate).quantity > 0 && (
            <div>{isProductInEstimate(product, estimate).quantity}</div>
          )}
        <button className="add-to-estimate-button" onClick={addToEstimate}>
          <AddIcon
            style={{
              fontSize: 30,
            }}
          />
        </button>
      </div>

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
