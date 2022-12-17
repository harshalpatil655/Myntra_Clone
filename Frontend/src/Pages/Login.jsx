import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AuthReducer);
  console.log(store);

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      dispatch(login(data)).then((res) => {
        console.log(res);
        if (res.type === LOGIN_SUCCESS) {
          alert("Login Successfull");
          navigate("/");
        } else {
          alert(res.payload.response.data.errors);
        }
      });
    } else {
      alert("Please Fill All the details");
    }
  };

  return (
    <div className="login">
      <div>
        {" "}
        <img
          className="offerimg"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/2/d9320d46-aa9d-444f-bf1f-c39780b31e321662057043860-offer-banner-300-1080x496-code-_-MYNTRA300.jpg"
          alt="firstoffer"
        />
      </div>

      <div className="logininput">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <p>Enter Email</p>
          <input
            onChange={handleChange}
            className="myinput"
            type="email"
            name="email"
            placeholder="Email"
          />
          <p>Enter Password</p>
          <input
            onChange={handleChange}
            className="myinput"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div>
            {" "}
            <button className="mybtn" type="submit">
              Submit
            </button>
          </div>
          <div className="signuptab">
            <p>
              {" "}
              If you don't have account then{" "}
              <span
                onClick={handleSignup}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  fontSize: "15px",
                }}
              >
                {" "}
                Signup{" "}
              </span>{" "}
              here.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
