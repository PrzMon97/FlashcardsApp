import React from "react";
import { useState } from "react";
import { Button } from "@mui/joy";

const flashcardList = [
  {
    id: 1,
    nazwaPL: "kangur",
    nazwaENG: "kangaroo",
  },
  {
    id: 2,
    nazwaPL: "kot",
    nazwaENG: "cat",
  },
  {
    id: 3,
    nazwaPL: "pies",
    nazwaENG: "dog",
  },
  {
    id: 4,
    nazwaPL: "słoń",
    nazwaENG: "elephant",
  },
  {
    id: 5,
    nazwaPL: "mysz",
    nazwaENG: "mouse",
  },
  {
    id: 6,
    nazwaPL: "koń",
    nazwaENG: "horse",
  },
  {
    id: 7,
    nazwaPL: "but",
    nazwaENG: "shoe",
  },
  {
    id: 8,
    nazwaPL: "słońce",
    nazwaENG: "sun",
  },
  {
    id: 9,
    nazwaPL: "śnieg",
    nazwaENG: "snow",
  },
  {
    id: 10,
    nazwaPL: "deszcz",
    nazwaENG: "rain",
  },
];

const FlipFlashcard = () => {
  const [number, setNumber] = useState(0);
  const [lang, setLang] = useState("nazwaPL");

  const handleClick = () => {
    const num = Math.floor(Math.random() * flashcardList.length);
    setNumber(num);
  };

  const handleFlip = () => {
    if (lang === "nazwaPL") {
      setLang("nazwaENG");
    } else {
      setLang("nazwaPL");
    }
  };

  return (
    <div className="fiszka">
      <p>{flashcardList[number][lang]}</p>
      <Button onClick={handleClick}>New Flashcard</Button>
      <Button onClick={handleFlip}>Flip</Button>
    </div>
  );
};

export default FlipFlashcard;
