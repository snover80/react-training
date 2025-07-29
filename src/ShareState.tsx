import { useState } from "react";
import NavBar from "./components/ManagingComponents/NavBar";
import Cart from "./components/ManagingComponents/Cart";

function AppShareComponents() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <>
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart onClickClearCart={() => setCartItems([])} cartItems={cartItems} />
      </div>
    </>
  );
}

export default AppShareComponents;
