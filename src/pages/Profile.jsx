import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>프로필 페이지</h1>
      <p>이름: 홍길동</p>
      <p>소개: 열정적인 프론트엔드 개발자입니다.</p>
      <Link to="/" style={{ fontSize: "1.2rem", color: "#007bff" }}>
        메인 페이지로 이동
      </Link>
    </div>
  );
}
