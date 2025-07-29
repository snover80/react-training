interface CartProps {
  cartItems: string[];
  onClickClearCart: () => void;
}

const Cart = ({ cartItems, onClickClearCart }: CartProps) => {
  return (
    <>
      <div>
        Cart:
        <ul>
          {cartItems.map((item) => (
            <li> CartItem: {item} </li>
          ))}
        </ul>
        <button onClick={onClickClearCart}>Clear cart</button>
      </div>
    </>
  );
};

export default Cart;
