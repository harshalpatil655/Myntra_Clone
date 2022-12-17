import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../Redux/AppReducer/action";

const CartPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AppReducer.cart);
  console.log(store);
  useEffect(() => {
    dispatch(cartData());
  }, []);

  return <div>CartPage</div>;
};

export default CartPage;
