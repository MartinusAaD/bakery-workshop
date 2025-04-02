import { useState } from "react";
import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import styles from "./App.module.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [cartContent, setCartContent] = useState([]);
  const [addToCartButtonActive, setAddToCartButtonActive] = useState(null);

  return (
    <>
      <section className={styles.listWrapper}>
        <MenuList
          cartContent={cartContent}
          setCartContent={setCartContent}
          addToCartButtonActive={addToCartButtonActive}
          setAddToCartButtonActive={setAddToCartButtonActive}
        />
      </section>
      <ShoppingCart />
    </>
  );
}

export default App;
