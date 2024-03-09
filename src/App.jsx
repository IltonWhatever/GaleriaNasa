// IMPORTS
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { ApiKeyProvider } from "./util/ApiKeyContext";
import "./css/app.css";

// ROTAS
import Mars from "./routes/Mars";
import Universe from "./routes/Universe";
import Earth from "./routes/Earth";

const App = () => {
  const apiKey = 'beE7rfgIRpayhem3m8Ua7sKqSlvpgGDuPYie63iJ';
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap"
        rel="stylesheet"
      />
      <div>
        <Router>
          <ApiKeyProvider apiKey={apiKey}>
            <Header />
            <Routes>
              <Route path="/earth" element={<Earth />} />
              <Route path="/mars" element={<Mars />} />
              <Route path="/universe" element={<Universe />} />
            </Routes>
          </ApiKeyProvider>
        </Router>
      </div>
    </>
  );
};

export default App;
