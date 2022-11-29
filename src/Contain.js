import "./App.css";
import { useEffect, useState } from "react";
import FinalPage from "./Components/FinalPage";
import QuestionsPage from "./Components/QuestionsPage";

const Contain = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [showQuestionsPage, setShowQuestionsPage] = useState(true);
  const [showFinalPage, setShowFinalPage] = useState(false);
  return (
    <div>
      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowFinalPage={setShowFinalPage}
          setScore={setScore}
        />
      )}
    </div>
  );
};

export default Contain;
