import React, { useState, useContext, useEffect } from "react";
import { BlogContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { getAllUsers, users, setLogin } = useContext(BlogContext);
  const [errors, setErrors] = useState();
  const [loginData, setLoginData] = useState({
    email: "john@gmail.com",
    password: "123",
  });

  useEffect((e) => {
    // getAllUsers();
    getAllUsers();
  }, []);

  const handleLogin = () => {
    const result = users.find(
      (item) =>
        item.email === loginData.email && item.password === loginData.password
    );
    // result
    // ? navigate("user/account")
    //  : setErrors("Invalide Email Or Password");

    if (result) {
      localStorage.setItem("localLogin", JSON.stringify(result));
     
      setLogin(result);
      navigate("/user/account");
    } else {
      setErrors("Invalide Email Or Password");
    }
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            {errors && <div className="alert alert-danger">{errors}</div>}
            <div class="card">
              <div class="card-header">Login</div>
              <div class="card-body">
                <div>
                  <label for="email" class="form-label">
                    First Email
                  </label>
                  <input
                    type="text"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        email: e.target.value,
                      })
                    }
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary w-100 mt-3"
                  onClick={(e) => handleLogin()}
                >
                  Login
                </button>
                <p class="text-center mt-3">
                  Dont Have Account? <a href="#">Create Account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
