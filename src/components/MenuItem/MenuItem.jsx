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

  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} alt="Image of baked goods" />

      {itemQuantity || addToCartButtonActive === item.id ? (
        <CounterButton
          itemQuantity={itemQuantity}
          addItemToCart={addItemToCart}
        />
      ) : (
        <button onClick={() => setAddToCartButtonActive(item.id)}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default MenuItem;
