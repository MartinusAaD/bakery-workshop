import styles from "./ShoppingCart.module.css";
import menuArray from "../../assets/data";
import { useState } from "react";

const ShoppingCart = ({ cartContent, setCartContent }) => {
  const [orderSumTotal, setOrderSumTotal] = useState(0);

  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      <ul>
        {menuArray.map((item, index) => {
          for (const cartItem of cartContent) {
            if (cartItem.menuItemNum === item.id) {
              return (
                <li className={styles.cartItem} key={index}>
                  <div className={styles.cartItemNamePriceWrapper}>
                    <p className={styles.cartItemName}>{item.name}</p>
                    <div className={styles.cartItemPriceWrapper}>
                      <span className={styles.cartItemQty}>{cartItem.qty}</span>
                      <span className={styles.cartItemAt}>@</span>
                      <span className={styles.cartItemPrice}>
                        {item.price.toFixed(2)}
                      </span>
                      <span className={styles.cartItemPartSum}>
                        {(item.price * cartItem.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    className={styles.removeCartItemButton}
                    onClick={() => {
                      handleRemoveCartItem(cartContent.indexOf(cartItem));
                    }}
                  >
                    <img src="images/icon-remove-item.svg" alt="" />
                  </button>
                </li>
              );
            }
          }
        })}
        <li className={styles.orderTotalLi}>
          <span>Sum</span>
          <span className={styles.orderTotalSum}>
            {orderSumTotal.toFixed(2)}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ShoppingCart;
