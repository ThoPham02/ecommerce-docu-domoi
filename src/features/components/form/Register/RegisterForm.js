import { useId } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserSelector } from "../../../../app/selector";
import LoginSlice from "../Login/LoginSlice";
import RegisterSlice from "./RegisterSlice";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(UserSelector);
  const id = useId();

  const handleSubmit = () => {
    const name = document.getElementById("name");
    const pasword = document.getElementById("pasword");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (!users.some((user) => user.name === name.value)) {
      const user = {
        id: id,
        name: name.value,
        pasword: pasword.value,
        email: email.value,
        phone: phone.value,
        address: "",
      };
      dispatch(RegisterSlice.actions.register(user));
      dispatch(LoginSlice.actions.login(user));
      navigate("/home");
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
        <h3>
          Đăng kí tài khoản <br /> Đồ cũ - Đồ mới
        </h3>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control type="text" placeholder="Tên đăng nhập" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pasword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mật khẩu" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email đăng kí</Form.Label>
          <Form.Control type="email" placeholder="Email đăng kí" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Số điện thoại đăng kí"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text className="text-muted">
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay!</Link>
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Đăng kí
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
