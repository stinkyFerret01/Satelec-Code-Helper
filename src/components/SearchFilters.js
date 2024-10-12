import React, { useRef } from "react";

import Select from "react-select";
import TextField from "@mui/material/TextField";
import ResetIcon from "@mui/icons-material/Block";

import products from "../data/products";

const SearchFilters = ({
  searchInput,
  setSearchInput,
  selectedCategory,
  setSelectedCategory,
  productsList,
}) => {
  const selectInputRef = useRef();

  const categories = [...new Set(products.map((product) => product.category))];
  const categoryOptions = ["Toutes les catégories", ...categories].map(
    (option) => {
      return { value: option, label: option };
    }
  );

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    if (
      productsList.length === 0 &&
      searchInput.length >= 2 &&
      selectedCategory !== "Toutes les catégories"
    ) {
      selectInputRef.current.setValue(categoryOptions[0]);
    }
  };

  const handleSelectionChange = (event) => {
    event && setSelectedCategory(event.value);
  };

  const handleFiltersReset = () => {
    selectInputRef.current.setValue(categoryOptions[0]);
    setSearchInput("");
  };

  return (
    <div className="search-filters">
      <TextField
        className="input-filter"
        label="Recherche"
        variant="outlined"
        value={searchInput}
        onChange={handleInputChange}
      />
      <Select
        className="select-filter"
        ref={selectInputRef}
        options={categoryOptions}
        defaultValue={categoryOptions[0]}
        onChange={handleSelectionChange}
      />
      <button
        className="reset-filters"
        onClick={handleFiltersReset}
        style={{
          cursor: productsList.length > 0 ? "pointer" : "default",
        }}
      >
        <ResetIcon
          style={{
            fontSize: 30,
            opacity:
              searchInput.length > 0 ||
              selectedCategory !== "Toutes les catégories"
                ? 0.8
                : 0.2,
          }}
        />
      </button>
    </div>
  );
};

export default SearchFilters;
