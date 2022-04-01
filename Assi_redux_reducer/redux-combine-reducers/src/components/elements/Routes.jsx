import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./Home";
import { LoginPage } from "./Login";
import { NavBar } from "./NavBar";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Routers = () => {

  
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/" element={<LoginPage />} />
      </Routes>
    </>
  );
};
