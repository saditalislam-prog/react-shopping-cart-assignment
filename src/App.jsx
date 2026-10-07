import { useMemo, useState } from 'react';
import Cart from './components/Cart.jsx';
import Filters from './components/Filters.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import { categories, products } from './data/products.js';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch =
        !normalizedSearch ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="app-shell">
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <Hero />

        <section className="products-section container" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Product catalog</p>
              <h2>Featured Products</h2>
            </div>
            <p>{filteredProducts.length} products shown</p>
          </div>

          <Filters
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            search={search}
            onSearch={setSearch}
          />

          <ProductGrid products={filteredProducts} />
        </section>

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Assignment architecture</p>
              <h2>Reusable React components with centralized cart state.</h2>
            </div>
            <p>
              The app uses React Context for predictable cart operations, custom hooks for clean access,
              localStorage persistence through useEffect, and responsive CSS for mobile, tablet, and desktop.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <strong>Shoply</strong>
          <span>React Shopping Cart Assignment</span>
        </div>
      </footer>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
