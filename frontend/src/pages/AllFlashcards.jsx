import React, { useState, useEffect } from "react";
//import { FormRowAll } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useNavigate } from "react-router-dom";

const AllFlashcards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isEditting = navigate.state === "editting";
  const isDeletting = navigate.state === "deletting";

  const handleEditClick = (flashcardId) => {
    navigate(`/dashboard/edit-flashcard`);
  };

  const handleDeleteClick = async (flashcardId) => {
    const shouldDelete = window.confirm("Czy chcesz usunąć fiszkę?");
    if (!shouldDelete) {
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:3000/flashcards/${flashcardId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedFlashcards = flashcards.filter(
          (flashcard) => flashcard._id !== flashcardId
        );
        setFlashcards(updatedFlashcards);
        window.alert("Fiszka została usunięta pomyślnie");
      } else {
        setError("Nie udało się usunąć fiszki");
      }
    } catch (error) {
      console.error("Błąd podczas usuwania fiszki:", error);
      setError("Wystąpił błąd serwera");
    }
  };

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await fetch("http://localhost:3000/flashcards");

        if (response.ok) {
          const result = await response.json();
          setFlashcards(result.info);
        } else {
          setError("Nie udało się pobrać fiszek");
        }
      } catch (error) {
        console.error("Błąd podczas pobierania fiszek:", error);
        setError("Wystąpił błąd serwera");
      }
    };

    fetchFlashcards();
  }, []);

  return (
    <Wrapper>
      <h4 className="form-title">Wszystkie fiszki</h4>
      <table className="flashcards-list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Słówko polskie</th>
            <th>Słówko angielskie</th>
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>
          {flashcards.map((flashcard) => (
            <tr key={flashcard._id}>
              <td>{flashcard._id}</td>
              <td>{flashcard.nazwaPL}</td>
              <td>{flashcard.nazwaENG}</td>
              <td>
                <button
                  type="button"
                  className="edit-btn btn-block form-btn"
                  disabled={isEditting}
                  onClick={() => handleEditClick(flashcard._id)}
                >
                  {isEditting ? "edytowanie..." : "Edytuj fiszkę"}
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="delete-btn btn-block form-btn"
                  disabled={isDeletting}
                  onClick={() => handleDeleteClick(flashcard._id)}
                >
                  {isDeletting ? "usuwanie..." : "Usuń fiszkę"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="error-message">{error}</p>}
    </Wrapper>
  );
};

export default AllFlashcards;
