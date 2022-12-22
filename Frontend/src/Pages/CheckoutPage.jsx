import React from "react";
import styles from "../CSS/Checkout.module.css";
import { AiFillCaretRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = () => {
    if (address) {
      alert("Successfully Added");
    }
  };

  const handlepay = () => {
    alert("Order Successfully Placed");
    navigate("/");
  };

  return (
    <div>
      <div>
        <h4>
          BAG
          <span className={styles.mybag}>-------ADDRESS-------PAYMENT </span>
        </h4>
      </div>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.addressdiv}>
            <div className={styles.logininput}>
              <h2>ENTER ADDRESS</h2>
              <form onSubmit={handleSubmit}>
                <p>
                  {" "}
                  <AiFillCaretRight /> Address(Hose NO,Building,Street,Area,Pin
                  Code)
                </p>
                <input
                  className={styles.myinput}
                  type="text"
                  name="house"
                  placeholder="Shivkamal Banglow"
                  required={true}
                  onChange={handleChange}
                />
                <p>
                  {" "}
                  <AiFillCaretRight /> District/City
                </p>
                <input
                  className={styles.myinput}
                  type="text"
                  name="city"
                  placeholder="Kolhapur"
                  required={true}
                  onChange={handleChange}
                />
                <p>
                  {" "}
                  <AiFillCaretRight /> State
                </p>
                <input
                  className={styles.myinput}
                  type="text"
                  name="state"
                  placeholder="Maharashtra"
                  required={true}
                  onChange={handleChange}
                />
                <div>
                  {" "}
                  <button
                    onClick={handleSubmit}
                    className={styles.mybtn}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.paymentdiv}>
            <div>
              <h2>SELECT PAYMENT METHOD</h2>
            </div>
            <div style={{ display: "flex" }}>
              <input type="radio" name="payment" />
              <h3>PAY WITH Paytm</h3>
              <img
                className={styles.payimg}
                src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png"
                alt="paytm"
              />
            </div>
            <div style={{ display: "flex" }}>
              <input type="radio" name="payment" />
              <h3>RAZORPAY</h3>
              <img
                className={styles.payimg}
                src="https://www.j2store.org/images/extensions/payment_plugins/Razorpay.png"
                alt="razorpay"
              />
            </div>
            <div style={{ display: "flex" }}>
              <input type="radio" name="payment" />
              <h3>PAY WITH PAYPAL</h3>
              <img
                className={styles.payimg}
                src="data:image/png;base64,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"
                alt="paypal"
              />
            </div>
            <div style={{ display: "flex" }}>
              <input type="radio" name="payment" />
              <h3>PAY WITH UPI</h3>
              <img
                className={styles.payimg}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png"
                alt="upi"
              />
            </div>
            <button onClick={handlepay} className={styles.mybtn}>
              MAKE PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
