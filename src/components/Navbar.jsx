import React from "react";
import { Flex, Input } from "antd";

import Logo from "../assets/image/Logo.svg";

const Navbar = () => {
  return (
    <Flex align={"center"} className="navbar mx-auto">
      <div className="navbar-img">
        <img src={Logo} alt="Logo" />
      </div>
      <Input placeholder="Search Movie" className="navbar-input"/>
    </Flex>
  );
};

export default Navbar;
