import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
      <Form>
        <h3>Chào mừng bạn đến với Đồ cũ - Đồ mới</h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control type="text" placeholder="Tên đăng nhập" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mật khẩu" />
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
