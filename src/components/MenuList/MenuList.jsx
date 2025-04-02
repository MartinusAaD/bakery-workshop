import App from "../../App";
import styles from "./MenuList.module.css";
import MenuItem from "../MenuItem/MenuItem";
import bakeryItems from "../../assets/data";

const MenuList = ({ cartContent, setCartContent }) => {
  return (
    <>
      <h1 className={styles.dessertHeader}>High Carb Heaven</h1>
      <div className={styles.menuList}>
        {bakeryItems.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              item={item}
              cartContent={cartContent}
              setCartContent={setCartContent}
            />
          );
        })}
      </div>
    </>
  );
};

export default MenuList;
