import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer.jsx/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";

function MainLayout() {
  //lifting state of search bar
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <>
      <Navbar />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Outlet context={{ searchText }} />
      <Footer />
    </>
  );
}

export default MainLayout;
