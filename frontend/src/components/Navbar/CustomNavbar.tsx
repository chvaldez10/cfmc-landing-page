"use client";

import { FC, useState } from "react";
import NavLogo from "./NavLogo";
import MenuToggleButton from "./MenuToggleButton";
import NavbarLinks from "./NavbarLinks";
import Sidebar from "./Sidebar";
import useScrollPosition from "@/hooks/useScrollPosition";

const CustomNavbar: FC<{}> = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuBarOpen(!isMenuBarOpen);
  const scrollPosition = useScrollPosition();

  return (
    <>
      <nav
        className={` ${scrollPosition > 10 ? "bg-white-10" : ""}
        fixed top-0 z-50 transition-all duration-300 mx-auto w-full`}
      >
        <div
          className={`max-w-screen-xl flex flex-wrap justify-between items-center mx-auto ${
            scrollPosition > 10 ? "p-2 transition-all 0.1s ease-in-out" : "p-5"
          }`}
        >
          <NavLogo />
          <MenuToggleButton
            isMenuBarOpen={isMenuBarOpen}
            toggleMenu={toggleMenu}
          />
          <div className="hidden md:block md:w-auto">
            <NavbarLinks />
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isMenuBarOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default CustomNavbar;
