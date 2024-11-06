import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>soozi!</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
