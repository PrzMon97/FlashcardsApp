import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { TbCards } from "react-icons/tb";
import { MdAddCard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
//import { FaChalkboardTeacher } from "react-icons/fa";

const links = [
  // { text: "Nauka", path: "study", icon: <FaChalkboardTeacher /> },
  { text: "Dodaj własne fiszki", path: ".", icon: <MdAddCard /> },
  { text: "Wszystkie fiszki", path: "all-flashcards", icon: <TbCards /> },
  { text: "Statystyka", path: "stats", icon: <IoBarChartSharp /> },
  { text: "Profil", path: "profile", icon: <ImProfile /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;
