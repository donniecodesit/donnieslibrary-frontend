import React, { useState } from "react";
import { createGame } from "../utils/api";
import GameForm from "./GameForm";
import { useNavigate } from "react-router-dom";

export default function NewGame() {
  let navigate = useNavigate();
  const initialFormState = {
    game_title: "",
    game_release: "",
    game_image: "",
    rating: 1,
    multiplayer: false,
    platform: "Steam",
  };
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.name === "rating" ? Number(event.target.value) : event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const abortController = new AbortController();
      await createGame(formData, abortController.signal);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError([err.message]);
    }
  }

  return (
    <>
      <GameForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {error[0] && <div className="error">{error}</div>}
    </>
  );
}
