import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import {useContext} from 'react';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0; // bude mit value true/false. pouzijeme to pro conditional rendering toho button Order
  
  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id);
  };

  function cartItemAddHandler(item) {
    cartCtx.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => <CartItem 
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={cartItemAddHandler.bind(null, item)} // bind slouzi k prekonfiguraci argumentu, ktery ta funkce obdrzi.
      onRemove={cartItemRemoveHandler.bind(null,item.id)}
      />
      )}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
