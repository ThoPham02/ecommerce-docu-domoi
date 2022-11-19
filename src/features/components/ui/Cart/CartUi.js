import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import CartItem from "./CartItem";
import { Checkbox } from "antd";
import numberToCurrency from "../../../utils/numberToCurrency";
import "./CartUi.css";
import { useDispatch, useSelector } from "react-redux";
import { CartSelector } from "../../../../app/selector";
import CartSlice from "./CartSlice";

const CartUi = () => {
  const cartList = useSelector(CartSelector);
  const dispatch = useDispatch();
  const handleToggleAll = () => {
    dispatch(CartSlice.actions.toggleAllItems());
  };
  var total = 0;
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
                      <Checkbox
                        onClick={handleToggleAll}
                        checked={cartList.every(
                          (item) => item.checked === true
                        )}
                      ></Checkbox>
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
                    if (item.checked === true) {
                      total += item.price * item.amount;
                    }
                    return (
                      <CartItem
                        cartItem={item}
                        checked={item.checked}
                        key={item.productId}
                      />
                    );
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
              <h4>Tổng tiền hàng: </h4>
              <p
                style={{
                  color: "red",
                  fontSize: "24px",
                  marginTop: "10px",
                  padding: "0 16px",
                }}
              >
                {numberToCurrency(total)}
              </p>
              <button
                style={{
                  padding: "4px 36px",
                  backgroundColor: "aqua",
                }}
              >
                <Link
                  to="/payment"
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
