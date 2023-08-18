import React from "react";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginArea">
        <label>아이디 또는 이메일</label>
        <input type="email" placeholder="아이디 또는 이메일을 입력해주세요." />
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해주세요." />
      </div>
      <button>로그인</button>
    </div>
  );
};

export default Login;
