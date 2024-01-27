import React, { useState } from "react";
import { FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useNavigate } from "react-router-dom";

const AddFlashcard = () => {
  const [nazwaPL, setNazwaPL] = useState("");
  const [nazwaENG, setNazwaENG] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isSubmitting = navigate.state === "submitting";

  const handleAddFlashcard = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nazwaPL: nazwaPL,
          nazwaENG: nazwaENG,
        }),
      });

      if (response.ok) {
        setNazwaPL("");
        setNazwaENG("");
        window.alert("Fiszka została dodana pomyślnie");
      } else {
        setError("nie dodano rekordu");
        window.alert("Proces dodania fiszki nieudany");
      }
    } catch (error) {
      console.error("Błąd podczas dodawania fiszki:", error);
      setError("Wystąpił błąd serwera");
      window.alert("Proces dodania fiszki nieudany");
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form" onSubmit={handleAddFlashcard}>
        <h4 className="form-title">Dodaj fiszkę</h4>
        <div className="form-center">
          <FormRowSelect
            type="text"
            name="nazwaPL"
            labelText="Nazwa po polsku"
            value={nazwaPL}
            onChange={(e) => setNazwaPL(e.target.value)}
          />
          <FormRowSelect
            type="text"
            name="nazwaENG"
            labelText="Nazwa po angielsku"
            value={nazwaENG}
            onChange={(e) => setNazwaENG(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "dodawanie..." : "Dodaj fiszkę"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddFlashcard;
