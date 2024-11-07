import React from "react";
import { useLocation } from "react-router-dom";
import "./Home.style.css";

const Home = () => {
  const location = useLocation();
  const userId = location.state?.userId; // 로그인 시 전달된 아이디 가져오기

  return (
    <div className="page-container">
      <h2 className="px-w-20px">Home</h2>
      <section className="section sec-01">
        <span>Welcome, {userId ? userId : "Guest"}</span>
      </section>
    </div>
  );
};

export default Home;
