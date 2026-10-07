import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return <p className="empty-products">No products matched your search.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
