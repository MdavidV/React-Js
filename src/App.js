import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/layout/ItemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/layout/Details/ItemDetailContainer";
import { Newmain } from "./components/layout/Main/Newmain";
import { Cart } from "./components/layout/Cart/Cart";
import { CartProvider } from "./components/layout/Cart/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Newmain />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route
              path="/products/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetail />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
