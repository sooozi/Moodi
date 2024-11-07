import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.style.css";

const Login = () => {
  return (
    <div className="page-container">
      <h2 className="px-w-20px">Login</h2>
      <Form className="px-w-20px">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>ddd</Form.Label> */}
          <Form.Control type="text" placeholder="아이디를 입력해주세요." />
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

export default Login;
