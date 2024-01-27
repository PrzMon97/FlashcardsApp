import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { TbCards } from "react-icons/tb";
import { MdAddCard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
//import { MdAdminPanelSettings } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

const links = [
  { text: "Home", path: ".", icon: <IoHome /> },
  { text: "Nauka", path: "lesson", icon: <FaChalkboardTeacher /> },
  { text: "Dodaj własne fiszki", path: "add-flashcard", icon: <MdAddCard /> },
  { text: "Wszystkie fiszki", path: "all-flashcards", icon: <TbCards /> },
  { text: "Edytuj", path: "edit-flashcard", icon: <CiEdit /> },
  { text: "Statystyka", path: "stats", icon: <IoBarChartSharp /> },
  { text: "Profil", path: "profile", icon: <ImProfile /> },

  // { text: "Admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;
