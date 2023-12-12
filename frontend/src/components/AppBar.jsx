import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const AppBar = () => {
  return (
    <div className="bg-gray-100 py-2 px-10 flex items-center justify-between">
      <Link to="/" className="logo">
        <span className="uppercase text-left">Career at</span>
        <img src={logo} alt="logo" className="w-[70px] " />
      </Link>
      <div className="flex gap-6">
        <button className="btn btnPrimary">Add New</button>
        <button className="btn btnDanger">Logout</button>
      </div>
    </div>
  );
};

export default AppBar;
