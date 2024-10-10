import products from "../data/products";

const SearchFilters = ({
  searchInput,
  setSearchInput,
  selectedCategory,
  setSelectedCategory,
  productsList,
}) => {
  const categories = [...new Set(products.map((product) => product.category))];
  const categoryOptions = ["Toutes les catégories", ...categories];

  const handleSelectionChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchInput("");
  };

  const handleFiltersReset = () => {
    setSelectedCategory("Toutes les catégories");
    setSearchInput("");
  };

  return (
    <div className="search-filters">
      <input
        type="text"
        placeholder="recherchez un produit"
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
      <button
        onClick={handleFiltersReset}
        style={{
          opacity: productsList.length > 0 ? 1 : 0.2,
          cursor: productsList.length > 0 ? "pointer" : "default",
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default SearchFilters;
