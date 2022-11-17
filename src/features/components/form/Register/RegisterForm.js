import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


const RegisterForm = () => {
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
          <h3>Đăng kí tài khoản <br/> Đồ cũ - Đồ mới</h3>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control type="text" placeholder="Tên đăng nhập"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Mật khẩu"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email đăng kí</Form.Label>
            <Form.Control type="email" placeholder="Email đăng kí" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control type="tel" placeholder="Số điện thoại đăng kí" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text className="text-muted">
              Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay!</Link>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Đăng kí
          </Button>
        </Form>
      </div>
    )
}

export default RegisterForm;