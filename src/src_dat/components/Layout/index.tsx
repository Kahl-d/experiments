import React from "react";

import "./index.scss";
import { Outlet } from "react-router-dom";
// import Sidebar from "../Sidebar";
import Boxes from "../Box1";
import BoxDuke from "../BoxDuke";
import Box3 from "../Box2";
import Box4 from "../Box4";

const Layout = () => {
  return (
    <div className="main">
      <BoxDuke />
      <Boxes />
      <Box4 />
      <Box3 />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
