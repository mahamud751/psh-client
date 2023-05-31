import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navmenu from "../components/shared/NavMenu";
import Footer from "../components/shared/Footer";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("signin") ||
    location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <Navmenu></Navmenu>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
