import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import usersDB from "../../../data/users";
import LoginSlice from "./LoginSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = usersDB;

  const handleSubmit = () => {
    const name = document.getElementById("userName");
    const password = document.getElementById("password");

    if (
      users.some(
        (user) => user.name === name.value && user.password === password.value
      )
    ) {
      const user = users.find((user) => user.name === name.value);
      dispatch(LoginSlice.actions.login(user));
      navigate("/");
    }
  };

  return (
    <div
      className="container"
      style={{
        width: "320px",
        border: "1px solid #333",
        padding: "24px",
        boxShadow: "4px 4px #ccc",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <h3>Chào mừng bạn đến với Đồ cũ - Đồ mới</h3>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control type="text" placeholder="Tên đăng nhập" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mật khẩu" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Nhớ mật khẩu" />
          <Form.Text className="text-muted">
            Bạn chưa có tài khoản? <Link to="/register">Đăng kí ngay!</Link>
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
