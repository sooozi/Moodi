import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// React.StrictMode는 개발 모드에서만 활성화되므로, 타입을 따로 설정할 필요는 없습니다.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
