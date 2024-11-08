import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputContext from "./contexts/InputContext.js";
import MainContent from "./components/MainContent";
import NextPage from "./components/NextPage.jsx"; // Another page to navigate to
import Form from "./components/Form.jsx";

const App = () => {
  const [confession1, setConfession1] = useState("");
  const [confession2, setConfession2] = useState("");
  const [confession3, setConfession3] = useState("");
  const [scripture1, setScripture1] = useState("");
  const [scripture2, setScripture2] = useState("");
  const [scripture3, setScripture3] = useState("");
  const [counsel, setCounsel] = useState("");
  const [prayer, setPrayer] = useState([]);
  const [prophecy, setProphecy] = useState("");
  
  return (
    <InputContext.Provider value={{ confession1,
      confession2,
      confession3,
      scripture1,
      scripture2,
      scripture3,
      setScripture1,
      setScripture2,
      setScripture3,
      setConfession1,
      setConfession2,
      setConfession3,
      counsel,
      prayer,
      prophecy,
      setProphecy,
      setCounsel,
      setPrayer,}}>
      <BrowserRouter>
        <div className="bg-slate-900 w-full flex justify-center">
          {/* Define Routes for different components */}
          <Routes>
            {/* Route for the MainContent component (the homepage or default page) */}
            <Route path="/" element={<MainContent />} />

            {/* Route for a different page (e.g., after clicking the Confession div) */}
            <Route path="/form" element={<Form />} />
            <Route path="/slide" element={<NextPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </InputContext.Provider>
  );
};

export default App;
