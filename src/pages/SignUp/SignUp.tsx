import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./SignUp.style.css";

const SignUp = () => {
  const [userId, setUserId] = useState(""); // 아이디 상태 관리
  const [password, setPassword] = useState(""); // 비밀번호 상태 관리
  const navigate = useNavigate();

  const validateId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 한글이 포함되면 입력을 막음
    if (/[^A-Za-z0-9]/.test(inputValue)) {
      e.target.setCustomValidity("영문과 숫자만 입력 가능합니다.");
    } else {
      e.target.setCustomValidity(""); // 유효성 초기화
    }
  };

  const validatePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 숫자가 아닌 값이 입력되면 입력을 막음
    if (/[^0-9]/.test(inputValue)) {
      e.preventDefault(); // 숫자가 아닌 값 입력 막기
      e.target.setCustomValidity("숫자만 입력 가능합니다.");
    } else {
      e.target.setCustomValidity(""); // 유효성 초기화
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    // 홈 페이지로 아이디를 전달
    navigate("/", { state: { userId } });
  };

  return (
    <div className="page-container">
      <h2 className="px-w-20px">Sign Up</h2>
      <Form className="px-w-20px" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>ddd</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="영문 아이디를 입력해주세요."
            pattern="[A-Za-z0-9]{1,10}" // 영문과 숫자만, 최대 10자
            maxLength={10} // 최대 10자 입력 가능
            required
            onChange={(e) => setUserId(e.target.value)} // 아이디 값 업데이트
            onInput={validateId}
          />
          <Form.Text className="text-muted">
            * 영문, 숫자만 허용되며, 최대 10자까지 입력 가능합니다.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="비밀번호 네자리를 입력해주세요."
            pattern="\d{4}" // 숫자 4자리만 허용
            maxLength={4} // 최대 4자리까지 입력 가능
            required
            onChange={(e) => setPassword(e.target.value)} // 비밀번호 값 업데이트
            onInput={validatePw}
          />
          <Form.Text className="text-muted">
            * 4자리 숫자만 입력 가능합니다.
          </Form.Text>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
