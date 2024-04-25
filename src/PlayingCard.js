import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import useFlipCard from "./Hooks/useFlipCard";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleFaceUp] = useFlipCard(true);

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleFaceUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
