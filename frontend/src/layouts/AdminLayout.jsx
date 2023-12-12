import React from "react";
import AppBar from "../components/AppBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
