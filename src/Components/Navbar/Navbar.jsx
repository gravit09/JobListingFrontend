import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src={logo} alt="logo" className="h-10" />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm ${
                  isActive
                    ? "text-blue-600 font-bold hover:text-blue-800"
                    : "text-gray-400  hover:text-gray-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-sm ${
                  isActive
                    ? "text-blue-600 font-bold hover:text-blue-800"
                    : "text-gray-400  hover:text-gray-500"
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/orgs"
              className={({ isActive }) =>
                `text-sm ${
                  isActive
                    ? "text-blue-600 font-bold hover:text-blue-800"
                    : "text-gray-400  hover:text-gray-500"
                }`
              }
            >
              Organisations
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm ${
                  isActive
                    ? "text-blue-600 font-bold hover:text-blue-800"
                    : "text-gray-400  hover:text-gray-500"
                }`
              }
            >
              About us
            </NavLink>
          </li>
        </ul>
        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          to="/login"
        >
          Log In
        </Link>
        <Link
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          to="/signup"
        >
          Sign up
        </Link>
      </nav>

      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
            onClick={toggleMenu}
          ></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M8284 9162 c-2 -207 -55 -427 -161 -667..."
                  />
                </svg>
              </a>
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/projects"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/orgs"
                >
                  Organisations
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/about"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="mt-auto">
              <div className="pt-6">
                <Link
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                  to="/login"
                >
                  Log In
                </Link>
                <Link
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-gray-800 font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2024</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
