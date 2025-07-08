import { useCart } from '../Context/CartContext';

function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.slice(0, 20)}...</h3>
      <p>₹ {product.price}</p>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
