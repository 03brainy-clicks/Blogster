import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "../utils/Regex";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const navigate = useNavigate();

  const reset = () => {
    setEmailErr(false);
    setPwdError(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    reset();
    if (!validEmail.test(email)) {
      setEmailErr(true);
      return null;
    }

    if (!validPassword.test(password)) {
      setPwdError(true);
      return null;
    }

    if (email && password && !emailErr && !pwdError) {
      //
      console.log("Login  success");
      return true;
    } else {
      console.log("Login failed");
      return null;
    }
    //
  };

  return (
    <div className="">
      <div className="lg:w-9/12 w-10/12 mx-auto flex justify-center items-center h-[100vh]  ">
        <div
          className="lg:w-1/3 md:3/4 w-full shadow-2xl card p-9 rounded"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3 className="text-xl text-center  font-semibold">
            Blogster<span className="text-blue-ribbon-600">.</span>{" "}
          </h3>{" "}
          <h4 className="text-2xl font-semibold text-center mt-2">
            Hello Again!
          </h4>
          <p className="text-sm text-center text-gray-500 mt-2">
            Welcome back you've been missed
          </p>
          <form method="POST" className="flex gap-3 flex-col mt-5  ">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <br />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
              />
              {emailErr && (
                <p className="text-red-500 mt-1 text-xs">
                  *Your email is invalid
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password " className="text-sm font-medium">
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 px-2 bg-gray-100 rounded  text-sm  my-1  w-full outline-none  "
              />
              {pwdError && (
                <p className="text-red-500 mt-1 text-xs">
                  *Your password is invalid
                </p>
              )}
              <Link to={"/reset-password"}>
                <span className="text-sm mt-1 text-gray-500  hover:text-blue-ribbon-500 cursor-pointer">
                  Forgot password?
                </span>
              </Link>
            </div>
            <div className="mt-2">
              <button
                onClick={handleLogin}
                className="btn transition text-sm  rounded duration-200  ease-in-out py-2 px-5 text-white w-full"
              >
                Login
              </button>{" "}
              <Link to={"/"}>
                <button className="border-2 font-medium transition text-sm mt-3  rounded duration-200  ease-in-out py-2 px-5 hover:text-blue-ribbon-800 w-full">
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
              </Link>
              <p className="text-sm pt-5 text-center text-gray-500 ">
                Don't have an account?
                <Link to="/signup">
                  <span className="text-blue-ribbon-600 hover:text-blue-800">
                    {" "}
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
