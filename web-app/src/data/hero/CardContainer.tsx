import { ReactElement } from "react";
import { MdContactMail } from "react-icons/md";
import { FaPrayingHands } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

export const cardContainerItems: {
  label: string;
  description: string;
  svgIcon: ReactElement;
  url?: string;
}[] = [
  {
    label: "Connect",
    description: "Fill out a description card",
    svgIcon: <MdContactMail />,
  },
  {
    label: "Pray",
    description: "Send us your prayer request",
    svgIcon: <FaPrayingHands />,
  },
  {
    label: "Get Involved",
    description: "Get involved today!",
    svgIcon: <FaCalendarCheck />,
  },
];
