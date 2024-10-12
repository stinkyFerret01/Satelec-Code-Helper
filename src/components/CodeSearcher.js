import { useState, useEffect } from "react";
import products from "../data/products";

import SearchFilters from "./SearchFilters";
import ProductsDisplayer from "./ProductsDisplayer";

const CodeSearcher = ({ estimate, setEstimate }) => {
  const [searchInput, setSearchInput] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    "Toutes les catégories"
  );

  const normalizeString = (str) => {
    return str.replace(/\s+/g, "").replace(/\./g, "").toLowerCase();
  };

  useEffect(() => {
    // console.log("CodeSearcher");
    if (
      searchInput.length < 3 &&
      selectedCategory === "Toutes les catégories"
    ) {
      setProductsList([]);
      return;
    } else {
      const filteredProducts = products.filter((product) => {
        const normalizedSearchInput = normalizeString(searchInput);

        const matchesSearch =
          normalizeString(product.name).includes(normalizedSearchInput) ||
          normalizeString(product.description).includes(
            normalizedSearchInput
          ) ||
          (product.keyWord &&
            normalizeString(product.keyWord).includes(normalizedSearchInput));

        const matchesCategory =
          selectedCategory === "Toutes les catégories" ||
          product.category === selectedCategory;

        return matchesSearch && matchesCategory;
      });

      setProductsList(filteredProducts);
    }
  }, [searchInput, selectedCategory]);

  return (
    <div className="code-searcher">
      <SearchFilters
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        productsList={productsList}
      ></SearchFilters>
      <ProductsDisplayer
        productsList={productsList}
        estimate={estimate}
        setEstimate={setEstimate}
      ></ProductsDisplayer>
    </div>
  );
};

export default CodeSearcher;
