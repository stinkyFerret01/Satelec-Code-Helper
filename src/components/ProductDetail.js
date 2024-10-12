const ProductDetail = ({ product, displayDetail, setDisplayDetail }) => {
  return (
    <div
      className="modal-screen"
      onClick={() => setDisplayDetail(!displayDetail)}
    >
      <div className="product-detail">
        <ul>
          <li>
            <div className="detail">produit:</div>
            <div>{product.name}</div>{" "}
          </li>
          <li>
            <div className="detail">code satelec:</div>
            <div> {product.code}</div>
          </li>
          <li>
            <div className="detail">marque:</div>
            <div>{product.brand || "non renseigné"}</div>{" "}
          </li>
          <li>
            <div className="detail"> reference:</div>
            <div> {product.reference || "non renseigné"}</div>
          </li>
          <li>
            <div className="detail">description:</div>
            <div>{product.description}</div>
          </li>
          <li>
            <div className="detail">prix:</div>
            <div>{product.price}</div> euros
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
