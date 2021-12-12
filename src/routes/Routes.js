import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Opening } from "../pages/index";
import { Hem } from "../pages/Hem";
import { Herr } from "../pages/Herr";
import { Dam } from "../pages/Dam";
import { Junior } from "../pages/Junior";
import { Nyheter } from "../pages/Nyheter";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Opening} />
        <Route path="/Hem" element={Hem} />
        <Route path="/Hem/Nyheter" element={Nyheter} />
        <Route path="/herr" element={Herr} />
        <Route path="/dam" element={Dam} />
        <Route path="/junior" element={Junior} />
      </Routes>
    </BrowserRouter>
  );
};
