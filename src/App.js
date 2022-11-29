import "./App.css";
// import { useEffect, useState } from "react";
// import FinalPage from "./Components/FinalPage";
// import QuestionsPage from "./Components/QuestionsPage";
import { Routes, Route } from "react-router-dom";
import Contain from "./Contain";
import TTTTTest from "./TTTTTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Contain />} />
      <Route path="/test" element={<TTTTTest />} />
    </Routes>
  );
}

export default App;
