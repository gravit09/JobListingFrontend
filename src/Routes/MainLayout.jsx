import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer.jsx/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
