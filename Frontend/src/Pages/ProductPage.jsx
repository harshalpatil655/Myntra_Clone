import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { mensData, postcart } from "../Redux/AppReducer/action";
import styles from "../CSS/ProductPage.module.css";
import { Button, Rating, TextField } from "@mui/material";
import { BsTruck, BsFillTagFill, BsListUl } from "react-icons/bs";

const ProductPage = () => {
  const { id } = useParams();

  const store = useSelector((store) => store.AppReducer.data);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlegocart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (store.length === 0) {
      dispatch(mensData());
    }
  }, [dispatch, store.length]);

  const ProdData = () => {
    store.map((ele) => {
      if (ele._id === id) {
        setProduct(ele);
      }
    });
  };
  useEffect(() => {
    ProdData();
  }, [store, product]);
  console.log(store);

  const handleCart = (product) => {
    alert("Product Added to cart");
    dispatch(postcart(product));
  };

  return (
    <div>
      <div className={styles.detailsdiv}>
        <div className={styles.prodimgdiv}>
          <img className={styles.prodimg} src={product.image} alt="Prodimg" />
        </div>
        <div className={styles.infodiv}>
          <h1>{product.brand}</h1>
          <p className={styles.title}>{product.title}</p>
          <Rating
            className={styles.star}
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
          />
          <div className={styles.mrpdiv}>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.subtit}>{product.subtit}</p>
            <p
              className={styles.offpercentage}
            >{`(${product.offpercentage} OFF)`}</p>
          </div>
          <div>
            <p className={styles.taxes}>inclusive of all taxes</p>
          </div>
          <div>
            <p>
              <span className={styles.sizeselect}>SELECT SIZE</span>{" "}
              <span className={styles.sizechart}>{`SIZE CHART >`}</span>{" "}
            </p>
          </div>

          <div className={styles.btndiv}>
            <button
              onClick={() => handleCart(product)}
              className={styles.cartbtn}
              variant="contained"
            >
              ADD TO CART
            </button>
            <button
              onClick={handlegocart}
              className={styles.wishbtn}
              variant="outlined"
            >
              GO TO CART
            </button>
          </div>
        </div>
      </div>
      {/* /////////////////////////////Infodiv */}
      <div className={styles.downdiv}>
        <div className={styles.pincode}>
          <h3>
            DELIVERY OPTIONS <BsTruck />
          </h3>
          <div className={styles.okdiv}>
            <TextField id="outlined-basic" label="PINCODE" variant="outlined" />
            <Button variant="contained">CHECK PINCODE</Button>
          </div>
          <p style={{ marginTop: "20px" }}>
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </p>
          <h5>
            {" "}
            <BsListUl size={10} /> 100% Original Products
          </h5>
          <h5>
            {" "}
            <BsListUl size={10} /> Pay on delivery might be available
          </h5>
          <h5>
            {" "}
            <BsListUl size={10} /> Easy 30 days returns and exchanges
          </h5>
          <h5>
            {" "}
            <BsListUl size={10} /> Try & Buy might be available
          </h5>
          <h5>
            <BsListUl size={10} />
            Seller :<span className={styles.pink}>Omnitech Retail</span>
          </h5>
          <p className={styles.pink}>
            {" "}
            <BsListUl size={10} /> Enter Delivery Details{" "}
          </p>
        </div>
        <div className={styles.offer}>
          <h3>
            BEST OFFERS <BsFillTagFill />{" "}
          </h3>
          <h4>
            BEST PRICE :-{" "}
            <span className={styles.orangeprice}>{` ${product.price}`}</span>{" "}
          </h4>
          <p className={styles.tagp}>
            {" "}
            <BsListUl size={10} /> 10% Instant Discount on ICICI Bank Credit and
            Debit Cards.
          </p>
          <p className={styles.pink}>View Eligible Products</p>
          <p className={styles.tagp}>
            {" "}
            <BsListUl size={10} /> 10% Instant Discount on Kotak Credit and
            Debit Cards.
          </p>
          <p className={styles.pink}>View Eligible Products</p>
          <p className={styles.tagp}>
            <BsListUl size={10} /> Flat Rs 150 Cashback on Paytm Wallet and
            Postpaid Transactions.
          </p>
          <p className={styles.pink}>View Eligible Products</p>
          <p className={styles.tagp}>
            {" "}
            <BsListUl size={10} /> EMI option available
          </p>
          <p className={styles.pink}>View Eligible Products</p>
          <p className={styles.tagp}>
            {" "}
            <BsListUl size={10} /> Applicable on: Orders above Rs. 599 (only on
            first purchase)
          </p>
          <p className={styles.pink}>View Eligible Products</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
