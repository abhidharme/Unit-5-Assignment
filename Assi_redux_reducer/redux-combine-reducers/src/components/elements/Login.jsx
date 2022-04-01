import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAuth } from "../Auth/action.js";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { token, isLogged } = useSelector((store) => store.auth);

  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const user = {
      ...userData,
      [id]: value,
    };
    console.log(userData);
    setuserData(user);
  };

  const getAuth = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((token) => dispatch(addAuth(token)));
  };
  if (isLogged) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div>
        <div className="login">
          <h3 style={{ margin: "0" }}>Login here</h3>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="Enter Your Email ID"
          />
          <input
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Enter Password"
          />
          <button
            onClick={() => {
              getAuth();
              console.log(userData);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
