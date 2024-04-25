import React, { useState } from "react";

const useFlipCard = (initialValue) => {
  const [isFacingUp, setIsFacingUp] = useState(initialValue);

  function toggleCard() {
    setIsFacingUp((isUp) => !isUp);
  }

  return [isFacingUp, toggleCard];
};

export default useFlipCard;
