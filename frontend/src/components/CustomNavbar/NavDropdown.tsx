import { FC, useState } from "react";
import DropdownItem from "./NavDropdownItem";

interface NavDropdownProps {
  items: string[];
  label: string;
}

const NavDropdown: FC<NavDropdownProps> = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsClicked((prev) => !prev);
  };

  const getRotationClass = () => {
    if (isClicked && isHovered) return "rotate-[360deg]";
    if (isClicked || isHovered) return "rotate-180";
    return "";
  };

  return (
    <li
      className="relative group"
      onMouseEnter={() => {
        setIsOpen(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
        setIsHovered(false);
      }}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 md:w-auto"
      >
        {label}
        <svg
          className={`w-2.5 h-2.5 ml-2.5 transition-transform duration-300 ease-in-out transform ${getRotationClass()}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 font-normal bg-violet-10 divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700">
            {items.map((item) => (
              <DropdownItem key={item} href="#">
                {item}
              </DropdownItem>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
