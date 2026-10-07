import { useCart } from '../hooks/useCart.js';

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <article className="cart-item">
      <img src={item.image} alt="" />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)} each</p>
        <div className="quantity-control" aria-label={`Quantity controls for ${item.title}`}>
          <button
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            aria-label={`Decrease ${item.title} quantity`}
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
            aria-label={`Increase ${item.title} quantity`}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-side">
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        <button className="remove-button" type="button" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}
