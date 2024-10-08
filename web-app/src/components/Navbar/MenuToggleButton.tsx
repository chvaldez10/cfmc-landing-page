import { FC } from "react";
import { useNavbar } from "@/contexts/NavbarContext";
interface MenuToggleButtonProps {
  changeBackgroundColor: string;
}

const genericHamburgerLine =
  "h-1 w-7 my-0.5 rounded-full bg-black transform-animation";
const baseOpacity = "opacity-60 group-hover:opacity-100 ";
const activeTransform = "opacity-50 group-hover:opacity-100";

const MenuToggleButton: FC<MenuToggleButtonProps> = ({
  changeBackgroundColor,
}) => {
  const { isMenuBarOpen, toggleMenu } = useNavbar();

  return (
    <button
      onClick={toggleMenu}
      type="button"
      className="div-outside-width h-12 w-12 md:hidden rounded group"
      aria-controls="navbarLinks"
      aria-expanded={isMenuBarOpen}
      aria-label="Toggle navigation menu"
    >
      {/* Top layer */}
      <div
        className={`${genericHamburgerLine} ${changeBackgroundColor} ${
          isMenuBarOpen
            ? `rotate-45 translate-y-2 ${activeTransform}`
            : baseOpacity
        }`}
      />

      {/* Middle layer */}
      <div
        className={`${genericHamburgerLine} ${changeBackgroundColor} ${
          isMenuBarOpen ? "opacity-0" : baseOpacity
        }`}
      />

      {/* Bottom layer */}
      <div
        className={`${genericHamburgerLine} ${changeBackgroundColor} ${
          isMenuBarOpen
            ? `-rotate-45 -translate-y-2 ${activeTransform}`
            : baseOpacity
        }`}
      />
    </button>
  );
};

export default MenuToggleButton;
