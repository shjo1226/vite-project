import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>포트폴리오 메인 페이지</h1>
      <p>안녕하세요! 저의 포트폴리오에 오신 것을 환영합니다.</p>
      <Link to="/profile" style={{ fontSize: "1.2rem", color: "#007bff" }}>
        프로필 페이지로 이동
      </Link>
    </div>
  );
}
