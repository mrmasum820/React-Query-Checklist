import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
