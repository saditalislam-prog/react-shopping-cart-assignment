import { useCart } from '../hooks/useCart.js';

export default function Navbar({ onCartOpen }) {
  const { totalItems } = useCart();

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Shoply home">
          <span className="brand-mark">S</span>
          <span>Shoply</span>
        </a>

        <div className="nav-links" aria-label="Page sections">
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </div>

        <button className="cart-button" type="button" onClick={onCartOpen}>
          <span aria-hidden="true">🛒</span>
          <span>Cart</span>
          <span className="cart-badge" aria-label={`${totalItems} items in cart`}>
            {totalItems}
          </span>
        </button>
      </nav>
    </header>
  );
}
