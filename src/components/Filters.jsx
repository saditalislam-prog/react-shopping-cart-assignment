export default function Filters({ categories, activeCategory, onCategoryChange, search, onSearch }) {
  return (
    <div className="filters">
      <div className="category-tabs" aria-label="Product category filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={activeCategory === category ? 'active' : ''}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <label className="search-box">
        <span className="sr-only">Search products</span>
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(event) => onSearch(event.target.value)}
        />
      </label>
    </div>
  );
}
