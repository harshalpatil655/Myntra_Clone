import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../Redux/AppReducer/action";
import styles from "../CSS/CartPage.module.css";
import { AiFillCaretRight } from "react-icons/ai";
import axios from "axios";

import { useNavigate } from "react-router-dom";

let token = localStorage.getItem("token");
let total = 0;

const CartPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AppReducer);
  const [mycart, setMycart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cartData())
      .then((res) => setMycart(res.payload))
      .catch((err) => alert("Error in Loading CartData"));
  }, [mycart]);

  const handleDelete = (id) => {
    alert("Deleted Successfully");
    axios
      .delete(`http://localhost:8080/cart/delete/${id}`, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => console.log(res))
      .then(() => dispatch(cartData()))
      .catch((err) => console.log(err));
  };
  const handleCalculate = () => {
    total = mycart.reduce((acc, curr) => acc + curr.price, 0);
  };

  const handleorder = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <div>
        <h4>
          {" "}
          <span className={styles.mybag}>
            BAG
          </span>-------ADDRESS-------PAYMENT{" "}
        </h4>
      </div>
      <div className={styles.mainflex}>
        <div className={styles.flex1}>
          <div className={styles.calcudiv}>
            <h3>{total > 0 ? `Total Amount:-${total}₹` : "Total Amount"}</h3>
            <button className={styles.btn} onClick={handleCalculate}>
              Calculate
            </button>
          </div>
          <div>
            <h5 className={styles.myh5}>Available Offers</h5>
            <p>
              <AiFillCaretRight /> 10% Instant Discount on IDFC FIRST Bank
              Credit and Debit Cards on a min spend of Rs 2,500. TCA
            </p>
            <p>
              <AiFillCaretRight />
              Get up to Rs 500 Cashback on CRED Pay UPI on a min spend of Rs
              1000. TCA
            </p>
            <p>
              {" "}
              <AiFillCaretRight />
              5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
            </p>
            <p>
              <AiFillCaretRight /> 10% Instant Discount on YES Bank Credit Cards
              on a min spend of Rs 2500. TCA
            </p>
            <p>
              <AiFillCaretRight /> 15% Instant Discount on OneCard Credit Cards
              on a min spend of Rs 2,000. TCA
            </p>
            <p>
              <AiFillCaretRight />
              10% Instant Discount on Federal Bank Credit and Debit Cards on a
              min spend of Rs 2,500. TCA
            </p>
            <button onClick={handleorder} className={styles.btn}>
              PLACE ORDER
            </button>
            ;
          </div>
        </div>
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

                <button
                  className={styles.btn}
                  variant="outlined"
                  onClick={() => handleDelete(ele._id)}
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
