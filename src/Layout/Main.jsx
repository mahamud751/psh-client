import React from "react";
import { Outlet } from "react-router-dom";
import Navmenu from "../components/shared/NavMenu";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div>
      <Navmenu></Navmenu>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
