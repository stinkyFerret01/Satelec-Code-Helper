import { useState, useEffect } from "react";
import products from "../data/products";

const CodeSearcher = () => {
  const [searchInput, setSearchInput] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    "Toutes les catégories"
  );

  const categories = [...new Set(products.map((product) => product.category))];
  const categoryOptions = ["Toutes les catégories", ...categories];

  const handleSelectionChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchInput("");
  };

  const normalizeString = (str) => {
    return str.replace(/\s+/g, "").replace(/\./g, "").toLowerCase();
  };

  useEffect(() => {
    if (
      searchInput.length < 3 &&
      selectedCategory === "Toutes les catégories"
    ) {
      setProductsList([]);
      return;
    }

    const filteredProducts = products.filter((product) => {
      const normalizedSearchInput = normalizeString(searchInput);

      const matchesSearch =
        normalizeString(product.name).includes(normalizedSearchInput) ||
        normalizeString(product.description).includes(normalizedSearchInput);

      const matchesCategory =
        selectedCategory === "Toutes les catégories" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setProductsList(filteredProducts);
  }, [searchInput, selectedCategory]);

  return (
    <div className="CodeSearcher">
      <div>
        <input
          type="text"
          placeholder="recherchez un produit (min 3 caractères)"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />

        <select
          id="select"
          value={selectedCategory}
          onChange={handleSelectionChange}
        >
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        {productsList.length === 0 &&
        searchInput.length < 3 &&
        selectedCategory === "Toutes les catégories" ? (
          <p>
            Veuillez entrer un nom de produit (minimum 3 caractères) ou
            choisissez une catégorie.
          </p>
        ) : (
          productsList.map((product, index) => (
            <div key={index}>
              {product.code} - {product.name} - {product.price} euros
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CodeSearcher;
