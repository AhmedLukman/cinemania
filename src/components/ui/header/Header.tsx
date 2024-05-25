"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Logo from "../Logo";
import NavButtonGroup from "./NavButtonGroup";
import NavEnd from "./NavEnd";
import NavMenu from "./NavMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      className=" fixed w-full flex z-50 bg-transparent"
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="w-full flex items-center gap-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </div>

      <div className="hidden flex-grow sm:flex gap-4 justify-center">
        <NavButtonGroup />
      </div>

      <div className="w-full flex justify-end gap-4">
        <NavEnd />
      </div>

      <NavMenu />
    </Navbar>
  );
};

export default Header;
