import styles from "./CounterButton.module.css";
import MenuItem from "../MenuItem/MenuItem";

const CounterButton = ({
  itemQuantity,
  addItemToCart,
  subtractItemFromCart,
}) => {
  return (
    <div className={styles.addToCartButtonActive}>
      <button
        onClick={subtractItemFromCart}
        className={styles.addToCartDecrement}
      >
        -
      </button>
      <span>{itemQuantity}</span>
      <button onClick={addItemToCart} className={styles.addToCartIncrement}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
