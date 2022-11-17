import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import CartItem from "./CartItem";
import { Checkbox } from "antd";
import numberToCurrency from "../../../utils/numberToCurrency";
import "./CartUi.css";

const CartUi = () => {
  const cartList = [];
  return (
    <div className="cart">
      <div className="cart-items">
        {cartList.length === 0 ? (
          <div
            className="cart-empty"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3>Giỏ hàng của bạn đang trống</h3>
            <button>
              <Link to="/home">Mua Sắm Ngay!</Link>
            </button>
          </div>
        ) : (
          <>
            <div className="cart-title">
              <h2>Giỏ hàng của bạn:</h2>
            </div>
            <div className="cart-item">
              <Table striped hover size="lg">
                <thead>
                  <tr>
                    <th>
                      <Checkbox></Checkbox>
                    </th>
                    <th>Sản Phẩm</th>
                    <th>Tên</th>
                    <th>Số lượng</th>
                    <th>Đơn Giá</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {cartList.map((item) => {
                    return <CartItem cartItem={item} checked={item.checked} />;
                  })}
                </tbody>
              </Table>
            </div>
            <div
              className="cart-total"
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                marginTop: "60px",
                backgroundColor: "#fff",
                position: "sticky",
                bottom: "0",
              }}
            >
              <h3>Tổng thanh toán: </h3>
              <p
                style={{
                  color: "red",
                  fontSize: "24px",
                  marginTop: "10px",
                  padding: "0 16px",
                }}
              >
                {numberToCurrency()}
              </p>
              <button
                style={{
                  padding: "4px 36px",
                  backgroundColor: "aqua",
                }}
              >
                <Link
                  to="/pay"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Mua Hàng
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartUi;
