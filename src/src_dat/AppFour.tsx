import React from "react";
import "./App.scss";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function AppFour() {
  return (
    
    <Routes>
    <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
    </Route>
  </Routes>
    
  );
}

export default AppFour;
