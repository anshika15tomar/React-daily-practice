
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { CartProvider } from './Context/CartContext';
import './App.css';


function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <h1> My Shopping Store</h1>
        <div className="main">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
