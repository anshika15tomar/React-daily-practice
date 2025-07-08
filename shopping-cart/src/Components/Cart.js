import { useCart } from '../Context/CartContext';

function Cart() {
  const { state, dispatch } = useCart();
  const total = state.cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {state.cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul>
        {state.cartItems.map(item => (
          <li >
            {item.title.slice(0, 20)} - ₹{item.price}
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
              Remove Item
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ₹ {total}</h3>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
    </div>
  );
}

export default Cart;
