import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserDetailPage from "../pages/UserDetailPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserDetailPage />} />
    </Routes>
  );
};

export default AllRoutes;
