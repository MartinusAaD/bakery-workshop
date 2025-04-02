import styles from "./CounterButton.module.css";
import MenuItem from "../MenuItem/MenuItem";

const CounterButton = ({ itemQuantity, addItemToCart }) => {
  return (
    <div className={styles.addToCartButtonActive}>
      <button className={styles.addToCartDecrement}>-</button>
      <span>{itemQuantity}</span>
      <button onClick={addItemToCart} className={styles.addToCartIncrement}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
