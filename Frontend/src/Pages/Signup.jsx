import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Signup.css";

import { useDispatch } from "react-redux";
import { signup } from "../Redux/AuthReducer/action";

import { SIGNUP_SUCCESS } from "../Redux/AuthReducer/actionTypes";

export const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [data, setData] = useState({});

  const handleClick = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name && data.email && data.password && data.confirmpass) {
      dispatch(signup(data)).then((res) => {
        if (res.type === SIGNUP_SUCCESS) {
          alert("Signup Successfull");
          navigate("/login");
        } else {
          alert(res.payload.response.data.errors);
        }
      });
    } else {
      alert("Please Fill All the details");
    }
  };

  // useEffect(() => {
  //   if (store.message !== "") {
  //     alert(store.message.errors);
  //   }
  // }, [store]);

  return (
    <div className="signup">
      <div>
        {" "}
        <img
          className="offerimg"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/2/d9320d46-aa9d-444f-bf1f-c39780b31e321662057043860-offer-banner-300-1080x496-code-_-MYNTRA300.jpg"
          alt="firstoffer"
        />
      </div>

      <div className="signinput">
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <p>Enter Name</p>
          <input
            onChange={handleChange}
            className="myinput"
            name="name"
            type="text"
            placeholder="Name"
          />
          <p>Enter Email</p>
          <input
            onChange={handleChange}
            className="myinput"
            name="email"
            type="email"
            placeholder="Email"
          />
          <p>Enter Password</p>
          <input
            onChange={handleChange}
            className="myinput"
            name="password"
            type="text"
            placeholder="Password"
          />
          <p>Enter Confirm Password</p>
          <input
            onChange={handleChange}
            className="myinput"
            name="confirmpass"
            type="text"
            placeholder="Password"
          />
          <div>
            {" "}
            <button className="mybtn" type="submit">
              Submit
            </button>
          </div>
          <div className="logintab">
            <p>
              {" "}
              If you already have account then{" "}
              <span
                onClick={handleClick}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  fontSize: "15px",
                }}
              >
                {" "}
                Login{" "}
              </span>{" "}
              here.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
