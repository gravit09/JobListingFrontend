import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const toggle = () => {
    setSignIn(!signIn);
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        const token = response.data.token;
        login(token);
        navigate("/about");
        alert("Logged in successfully!");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        {
          username: UserName,
          email,
          password,
        }
      );
      console.log(response);
      if (response.data.success) {
        setSignIn(true);
        alert("Signup in successfully!");
      } else {
        console.error("SignUp failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div class="p-4 py-6 text-white bg-purple-900 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div class="my-3 text-4xl font-bold tracking-wider text-center">
            <Link to="/">WellFound</Link>
          </div>
          <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
            find Your Dream Job with us
          </p>
          <p class="flex flex-col items-center justify-center mt-10 text-center">
            {signIn ? (
              <>
                <span>Don't have an account?</span>
                <a onClick={toggle} class="underline cursor-pointer">
                  Get Started!
                </a>
              </>
            ) : (
              <>
                <span>Already have an account?</span>
                <a onClick={toggle} class="underline cursor-pointer">
                  SignIn!
                </a>
              </>
            )}
          </p>
          <p class="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <a href="#" class="underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" class="underline">
              conditions
            </a>
          </p>
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">
            {signIn ? "Account Login" : "Account SignUp"}
          </h3>
          <form
            onSubmit={signIn ? handlelogin : handleSignup}
            action="#"
            class="flex flex-col space-y-5"
          >
            {!signIn && (
              <div class="flex flex-col space-y-1">
                <label for="email" class="text-sm font-semibold text-gray-500">
                  UserName
                </label>
                <input
                  type="userName"
                  id="userName"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
            )}
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autofocus
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <a
                  href="#"
                  class="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label for="remember" class="text-sm font-semibold text-gray-500">
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-purple-900 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                {signIn ? "LogIn" : "SignUp"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
