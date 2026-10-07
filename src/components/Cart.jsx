import CartItem from './CartItem.jsx';
import { useCart } from '../hooks/useCart.js';

export default function Cart({ isOpen, onClose }) {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();

  return (
    <>
      <button
        className={`cart-overlay ${isOpen ? 'is-visible' : ''}`}
        type="button"
        aria-label="Close shopping cart"
        onClick={onClose}
      />

      <aside className={`cart-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="cart-header">
          <div>
            <p className="eyebrow">Your selection</p>
            <h2>Shopping Cart</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span aria-hidden="true">🛒</span>
              <h3>Your cart is empty</h3>
              <p>Add a product and it will appear here.</p>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        <div className="cart-summary">
          <div>
            <span>Total items</span>
            <strong>{totalItems}</strong>
          </div>
          <div>
            <span>Total price</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <button className="checkout-button" type="button" disabled={cartItems.length === 0}>
            Checkout
          </button>
          {cartItems.length > 0 && (
            <button className="clear-button" type="button" onClick={clearCart}>
              Clear cart
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
