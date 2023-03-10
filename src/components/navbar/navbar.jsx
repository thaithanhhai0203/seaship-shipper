import { ArrowBack, NotificationsOutlined } from "@mui/icons-material";
import React from "react";
import "./navbar.scss";

const Navbar = ({ label }) => {
  return (
    <div className="navbar">
      <ArrowBack className="arrow"></ArrowBack>
      <div className="label">{label}</div>
      <NotificationsOutlined className="notifications"></NotificationsOutlined>
    </div>
  );
};

export default Navbar;
