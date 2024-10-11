import React, { useRef } from "react";

import Select from "react-select";
import TextField from "@mui/material/TextField";
import ResetIcon from "@mui/icons-material/Block";

import products from "../data/products";

const SearchFilters = ({
  searchInput,
  setSearchInput,
  setSelectedCategory,
  productsList,
}) => {
  const categories = [...new Set(products.map((product) => product.category))];
  const categoryOptions = ["Toutes les catégories", ...categories].map(
    (option) => {
      return { value: option, label: option };
    }
  );

  const selectInputRef = useRef();

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSelectionChange = (event) => {
    event && setSelectedCategory(event.value);
    setSearchInput("");
  };

  const handleFiltersReset = () => {
    setSelectedCategory({ ...categoryOptions[0] });
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
            opacity: productsList.length > 0 ? 0.8 : 0.2,
          }}
        />
      </button>
    </div>
  );
};

export default SearchFilters;
