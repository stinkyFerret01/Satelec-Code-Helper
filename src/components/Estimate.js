import { useEffect } from "react";
import ProductDisplayer from "./ProductDisplayer";

const Estimate = ({
  estimate,
  setEstimate,
  displayEstimate,
  setDisplayEstimate,
}) => {
  const calculateTotal = (estimate) => {
    const total = estimate.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    return parseFloat(total.toFixed(2));
  };

  useEffect(() => {
    if (estimate.length === 1) {
      setEstimate((prevEstimate) => {
        const updatedEstimate = [...prevEstimate];
        if (updatedEstimate.length > 0) {
          updatedEstimate[updatedEstimate.length - 1].quantity = 0;
        }
        return updatedEstimate;
      });

      setDisplayEstimate(!displayEstimate);
    }
  }, [estimate, setEstimate, displayEstimate, setDisplayEstimate]);

  return (
    <div className="modal-screen-header-free">
      <div className="estimate">
        <div className="estimate-title">Liste des articles</div>
        {estimate.map((product, index) => (
          <ProductDisplayer
            key={index}
            displayEstimate={displayEstimate}
            product={product}
            estimate={estimate}
            setEstimate={setEstimate}
          ></ProductDisplayer>
        ))}
        <div className="total-price">
          Total:{" "}
          <span
            style={{ color: calculateTotal(estimate) > 1000 ? "red" : "black" }}
          >
            {calculateTotal(estimate)}
          </span>{" "}
          euros
        </div>
      </div>
    </div>
  );
};

export default Estimate;
