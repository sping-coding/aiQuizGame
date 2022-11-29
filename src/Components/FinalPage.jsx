import React from "react";
import Card from "./Card";
import { useNavigate, Link } from "react-router-dom";



const FinalPage = (
  {
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}
) => {
  const handleClick = () => {
    

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setUsername("");
  };

  return (
    <Card>
      <h1 className="heading">You reached the end of the game, {username}!</h1>

      <h3 className="primary_text">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>

      <Link to="/test">NEXT PAGE</Link>
    </Card>
  );
};

export default FinalPage;