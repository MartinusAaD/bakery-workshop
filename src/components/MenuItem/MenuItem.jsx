import CounterButton from "../CounterButton/CounterButton";
import styles from "./MenuItem.module.css";

const MenuItem = ({
  item,
  cartContent,
  setCartContent,
  addToCartButtonActive,
  setAddToCartButtonActive,
  itemQuantity,
}) => {
  const addItemToCart = () => {
    setCartContent((prev) => {
      // Find existing Item
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.menuItemNum === item.id
      );

      // Add item if non exist
      if (itemIndex === -1) {
        return [...prev, { menuItemNum: item.id, qty: 1 }];
      }

      // Add item if exist
      const updatedCart = [...prev];
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        qty: updatedCart[itemIndex].qty + 1,
      };
      return updatedCart;
    });
  };

  const subtractItemFromCart = () => {
    setCartContent((prev) => {
      // Find existing Item
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.menuItemNum === item.id
      );

      // If non exist return same reference
      if (itemIndex === -1) return prev;

      // Clone the specific item
      const updatedItem = {
        ...prev[itemIndex],
        qty: prev[itemIndex].qty - 1,
      };

      // Create new cart array (instead of spread)
      const updatedCart = prev.map((item, i) =>
        i === itemIndex ? updatedItem : item
      );

      // Filter out new items where qty have reached 0
      return updatedItem.qty === 0
        ? updatedCart.filter((_, i) => i !== itemIndex)
        : updatedCart;
    });
  };

  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} alt="Image of baked goods" />

      {itemQuantity || addToCartButtonActive === item.id ? (
        <CounterButton
          itemQuantity={itemQuantity}
          addItemToCart={addItemToCart}
          subtractItemFromCart={subtractItemFromCart}
        />
      ) : (
        <button onClick={() => setAddToCartButtonActive(item.id)}>
          Add to cart
        </button>
      )}

      <div className={styles.itemCategory}>{item.category}</div>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.itemPrice}>{item.price.toFixed(2)}</div>
    </div>
  );
};

export default MenuItem;
