import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData, deleteCart } from "../Redux/AppReducer/action";
import styles from "../CSS/CartPage.module.css";

import { Button } from "@mui/material";
import axios from "axios";

let token = localStorage.getItem("token");

const CartPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AppReducer);
  const [mycart, setMycart] = useState([]);
  console.log();
  useEffect(() => {
    dispatch(cartData());
    setMycart(store.cart);
  }, [store.cart.length]);
  console.log(store.cart);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/cart/delete/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => console.log("Deleted"))
      .then(() => cartData())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>CartPage</h1>
      <div className={styles.flex2}>
        {mycart?.map((ele) => {
          return (
            <div key={ele._id}>
              <div>
                <div>
                  <img src={`${ele.image}`} alt="myimg" />
                </div>
                <div className={styles.proddiv}>
                  <div className={styles.prodbrand}>
                    <p>{ele.brand}</p>
                  </div>
                  <div className={styles.tit}>
                    <p className={styles.title}>{ele.title}</p>
                  </div>
                  <div className={styles.detaildiv}>
                    <p>
                      <span className={styles.price}>{ele.price}</span>
                      <span className={styles.subtit}>{ele.subtit} </span>
                      <span className={styles.percent}>
                        {"("}
                        {ele.offpercentage}
                        {" OFF)"}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className={styles.btn}
                style={{
                  borderColor: "black",
                  color: "black",
                }}
                variant="outlined"
                onClick={handleDelete}
              >
                DELETE
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
