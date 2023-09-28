import Cart from "./shoeStore/cart";
import ShoesList from "./shoeStore/shoesList";
import ShoesDetail from "./shoeStore/shoesDetail";
import { Button, Modal } from "antd";
import "./App.css";

function App() {
  return (
    <div
      style={{
        background: "#f6f1eb",
      }}>
      <div className="container">
        <div className="grid-layout">
          <Cart></Cart>
          <ShoesList></ShoesList>
        </div>
      </div>
    </div>
  );
}

export default App;
