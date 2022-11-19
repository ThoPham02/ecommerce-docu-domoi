import { useId } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartSelector } from "../../../../app/selector";
import numberToCurrency from "../../../utils/numberToCurrency";
import CartSlice from "../../ui/Cart/CartSlice";
import OrderSlice from "../../ui/Order/OrderSlice";

const PaymentForm = () => {
  const cartChecked = useSelector(CartSelector).filter(
    (item) => item.checked === true
  );
  const dispatch = useDispatch();
  var total = 0;
  const shipping =
    Math.floor(Math.random() * 350 + 150) * cartChecked.length * 100;
  const orderBuyId = useId();
  const navigate = useNavigate();
  const handleClick = () => {
    const orderBuy = {
      id: orderBuyId,
      cart: cartChecked,
      shipping: shipping,
      total: total,
      status: 1,
    };
    dispatch(OrderSlice.actions.addOrderBuy(orderBuy));
    cartChecked.forEach((item) => {
      dispatch(CartSlice.actions.deleteItem(item.productId));
    });
    navigate('/order')
  };
  return (
    <div className="pay-form">
      <div
        className="pay-form-title"
        style={{
          margin: "24px 0",
        }}
      >
        <h3>Thanh toán</h3>
      </div>
      <div className="pay-form-address" style={{ margin: "24px 0" }}>
        <h5>Địa chỉ nhận hàng</h5>
        <input
          style={{ width: "100%", padding: "4px 12px" }}
          placeholder="Nhập địa chỉ nhận hàng"
          required
        ></input>
      </div>

      <div className="pay-form-product">
        <Table striped hover>
          <thead style={{ padding: "12px 0" }}>
            <tr>
              <th>Sản Phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {cartChecked.map((item) => {
              total += item.price * item.amount;
              return (
                <tr key={item.productId}>
                  <td>{item.name}</td>
                  <td>{numberToCurrency(item.price)}</td>
                  <td>{item.amount}</td>
                  <td>{numberToCurrency(item.price * item.amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div
          style={{
            display: "flex",
            border: "1px solid #ccc",
            padding: "24px 8px",
            marginTop: "48px",
            backgroundColor: "#fff",
          }}
        >
          <div
            className="col-5"
            style={{
              display: "flex",
              alignItems: "center",
              borderRight: "1px solid #ccc",
              padding: "0 12px",
            }}
          >
            <label>Lời nhắn: </label>
            <input
              placeholder="Lưu ý cho người bán"
              style={{
                height: "36px",
                padding: "4px 8px",
                margin: "0 8px",
              }}
            />
          </div>
          <div
            className="col-7"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <h6> Đơn vị vận chuyển</h6>
            <label>Nhanh</label>
            <button
              style={{
                border: "none",
                color: "blue",
                backgroundColor: "#fff",
              }}
            >
              THAY ĐỔI
            </button>
            <label>{numberToCurrency(shipping)}</label>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: "48px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
          }}
        >
          <label>Tổng tiền hàng: </label>
          <h5 style={{ color: "red", padding: "4px 24px 0" }}>
            {numberToCurrency(total)}
          </h5>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          margin: "12px 0",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            margin: "24px 0",
            padding: "0 20px",
          }}
        >
          <label>Phương thức thanh toán: </label>
          <button style={{ margin: "0 24px", padding: "8px 12px" }}>
            Thẻ tín dụng/Ghi nợ
          </button>
          <button style={{ padding: "8px 12px" }}>
            Thanh toán khi nhận hàng
          </button>
        </div>
        <div
          style={{
            height: "320px",
            padding: "0 20px",
          }}
        >
          <label>Chọn thẻ: </label>
        </div>
        <div className="row" style={{ padding: "12px" }}>
          <div className="col-8"></div>
          <div className="col-4">
            <div className="row">
              <div className="col-6">Tổng tiền hàng: </div>
              <div className="col-6">{numberToCurrency(total)}</div>
            </div>
            <div className="row">
              <div className="col-6">Phí vận chuyển: </div>
              <div className="col-6">{numberToCurrency(shipping)}</div>
            </div>
            <div className="row">
              <div className="col-6">Tổng thanh toán: </div>
              <div className="col-6">{numberToCurrency(total + shipping)}</div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          margin: "12px 0",
          backgroundColor: "#fff",
          padding: "24px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <label>
          Nhấn vào đặt hàng đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản
          của chúng tôi!
        </label>
        <button
          style={{
            padding: "0 36px",
            backgroundColor: "aqua",
            marginRight: "36px",
          }}
          onClick={handleClick}
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
