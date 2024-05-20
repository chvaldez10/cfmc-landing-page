import { FC } from "react";
import NavbarLinkItems from "./NavbarLinkItems";
import NavDropdown from "./NavDropdown";
import PurplePillButton from "@/components/core/buttons/PurplePillButton";

const navDropdownItems: {
  label: string;
  url: string;
}[] = [
  {
    label: "📖 Our Mission",
    url: "/about/our-mission",
  },
  // "⛪ Ministry",
  // "📜 Board",
  // "👥 Community",
];

const getInvolvedDropdownItems: string[] = [
  "📩 Give",
  "🗓️ Upcoming",
  "🖥️ Multimedia",
  "🎶 Music",
];

export const NavbarLinks: FC = () => (
  <ul className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
    <NavDropdown navDropdownItems={navDropdownItems} dropdownLabel="About" />
    <NavbarLinkItems href="#" label="Media" />
    {/* <NavDropdown items={getInvolvedDropdownItems} label="Get Involved" /> */}
    <NavbarLinkItems href="#" label="Contact Us" />
    <PurplePillButton
      text="Join Us Sunday"
      onClick={() => console.log("Join Us Sunday Clicked")}
      variant="filled"
    />
  </ul>
);

export default NavbarLinks;
