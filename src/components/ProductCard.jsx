import { useCart } from '../hooks/useCart.js';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.title} />
        <span className="category-pill">{product.category}</span>
      </div>

      <div className="product-content">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <strong>${product.price.toFixed(2)}</strong>
          <button type="button" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
