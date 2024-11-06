import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* BrowserRouter로 감싸기 */}
      <div className="App">
        <header className="App-header">
          <p>soozi!</p>
        </header>
        <Routes>
          {" "}
          {/* Routes로 Route들을 감싸기 */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
