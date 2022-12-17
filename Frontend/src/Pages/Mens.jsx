import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mensData } from "../Redux/AppReducer/action";
import styles from "../CSS/Mens.module.css";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Mens = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const location = useLocation();
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([]);
  const [page, setPage] = useState(2);

  const store = useSelector((store) => store.AppReducer);

  useEffect(() => {
    setSearchParams({
      brand: brand,
      category: category,
      price: price,
      page: page,
    });

    // let mybrand = searchParams.getAll("brand");
    // let mycategory = searchParams.getAll("category");
    // let myprice = searchParams.getAll("price");

    // if(brand.length>0 || category.length>0 || price.length>0)
    // {

    // }

    if (location.search !== "") {
      const queryParams = {
        params: {
          category,
          brand,
          price,
          page,
        },
      };
      dispatch(mensData(queryParams))
        .then((res) => setData(res.payload))
        .catch((err) => alert("Data Cannot be Loaded"));
    } else {
      dispatch(mensData())
        .then((res) => setData(res.payload))
        .catch((err) => alert("Data Cannot be Loaded"));
    }
  }, [brand.length, category.length, price, page, location.search]);

  const handleChange = (e) => {
    let option = e.target.value;

    const newbrand = [...brand];
    if (brand.includes(option)) {
      newbrand.splice(newbrand.indexOf(option), 1);
    } else {
      newbrand.push(option);
    }
    setBrand(newbrand);
  };

  const handleCategory = (e) => {
    let option = e.target.value;

    const newcat = [...category];
    if (category.includes(option)) {
      newcat.splice(newcat.indexOf(option), 1);
    } else {
      newcat.push(option);
    }
    setCategory(newcat);
  };

  const handlePrice = (e) => {
    let option = e.target.value.split("-").map(Number);

    setPrice(option);
  };

  const handlePage = (count) => {
    console.log(count);
  };

  return (
    <div>
      <div className={styles.maindiv}>
        <div className={styles.flex1}>
          <h1>FILTERS</h1>
          <div>
            <h3>BRAND</h3>
            <FormControlLabel
              onChange={handleChange}
              control={<Checkbox />}
              value={"HRX"}
              label="HRX"
            />
            <FormControlLabel
              onChange={handleChange}
              control={<Checkbox />}
              label="Roadster"
              value={"Roadster"}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="WROGN"
              value={"WROGN"}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>CATEGORY</h3>
            <FormControlLabel
              onChange={handleCategory}
              control={<Checkbox />}
              label="T-shirt"
              value="T-shirt"
            />
            <FormControlLabel
              onChange={handleCategory}
              control={<Checkbox />}
              label="Shirt"
              value="Shirt"
            />
            <FormControlLabel
              onChange={handleCategory}
              control={<Checkbox />}
              label="Casual Shirt"
              value="Casual Shirt"
            />
          </div>
          <div>
            <h3>SORT BY PRICE</h3>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="0-500"
                name="price"
                control={<Radio />}
                label="0-500"
                onChange={handlePrice}
              />
              <FormControlLabel
                value="501-1000"
                name="price"
                control={<Radio />}
                label="500-1000"
                onChange={handlePrice}
              />
              <FormControlLabel
                value="1001-1500"
                name="price"
                control={<Radio />}
                label="1000-1500"
                onChange={handlePrice}
              />
              <FormControlLabel
                value="1501-2000"
                name="price"
                control={<Radio />}
                label="1500-2000"
              />
            </RadioGroup>
          </div>
          <div></div>
        </div>
        {/* ////////////////////////////Mapping the data./////////////////////// */}
        <div className={styles.flex2}>
          {data?.map((ele) => {
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
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/product/${ele._id}`}
                >
                  <Button
                    className={styles.btn}
                    style={{
                      borderColor: "black",
                      color: "black",
                    }}
                    variant="outlined"
                  >
                    ADD TO CART
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Pagination
          count={10}
          onClick={(e) => handlePage(e.target.count)}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Mens;
