import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignUp.style.css";

const SignUp = () => {
  return (
    <div className="page-container">
      Login
      <Form className="px-w-20px">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>ddd</Form.Label> */}
          <Form.Control type="email" placeholder="아이디를 입력해주세요." />
          {/* <Form.Text className="text-muted">
            never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
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
