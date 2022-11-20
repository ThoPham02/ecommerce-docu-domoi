import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./OrderUi.css";
import { OrderBuySelector } from "../../../../app/selector";
import numberToCurrency from "../../../utils/numberToCurrency";
const OrderUi = () => {
  var orderBuy = useSelector(OrderBuySelector);
  const [filterOrder, setFilterOrder] = useState(0);
  const handleSelect = (eventKey) => {
    setFilterOrder(eventKey * 1);
  };
  if (filterOrder !== 0) {
    orderBuy = orderBuy.filter((item) => item.status === filterOrder);
  }
  console.log(orderBuy);
  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="0"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        onSelect={handleSelect}
      >
        <Nav.Item>
          <Nav.Link eventKey="0">Tất cả</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1">Chờ xác nhận</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">Chờ lấy hàng</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3">Đang giao hàng</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4">Đã giao hàng</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="5">Đã hủy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="6">Trả hàng</Nav.Link>
        </Nav.Item>
      </Nav>
      <div
        className=""
        style={{
          minHeight: "500px",
          backgroundColor: "#fff",
        }}
      >
        {orderBuy.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}
          >
            <h2>Bạn chưa có đơn hàng nào!</h2>
          </div>
        ) : (
          <div>
            <div
              className="row"
              style={{
                borderBottom: "1px solid #ccc",
                margin: "0 24px",
                padding: "12px 0",
              }}
            >
              <div className="col-3 text-center">Sản phẩm</div>
              <div className="col-3 text-center">Đơn giá</div>
              <div className="col-3 text-center">Số lượng</div>
              <div className="col-3 text-center">Thành tiền</div>
            </div>
            {orderBuy.map((order) => {
              var shipping = order.shipping / order.cart.length;
              return (
                <div style={{ border: "1px solid #cfcfcf", padding: "12px 0", margin: "12px 0" }}>
                  {order.cart.map((item) => {
                    return (
                      <>
                        <div
                          className="row"
                          style={{
                            margin: "0 24px",
                            padding: "12px 0",
                          }}
                        >
                          <div className="col-3 text-center">{item.name}</div>
                          <div className="col-3 text-center">
                            <label className="money">
                              {numberToCurrency(item.price)}
                            </label>
                          </div>
                          <div className="col-3 text-center">{item.amount}</div>
                          <div className="col-3 text-center">
                            <label className="money">
                              {numberToCurrency(item.price * item.amount)}
                            </label>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            borderBottom: "1px solid #ccc",
                            margin: "0 24px",
                            padding: "12px 0",
                          }}
                        >
                          <div className="col-6"></div>
                          <div className="col-3 ">
                            Phí vận chuyển:{" "}
                            <label className="money">
                              {numberToCurrency(shipping)}
                            </label>
                          </div>
                          <div className="col-3 ">
                            Tổng số tiền:{" "}
                            <label className="money">
                              {numberToCurrency(
                                item.price * item.amount + shipping
                              )}
                            </label>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-2">Phí vận chuyển: </div>
                    <div className="col-2 money">
                      {numberToCurrency(order.shipping)}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-2">Tổng tiền hàng: </div>
                    <div className="col-2 money">
                      {numberToCurrency(order.total + order.shipping)}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-2">Phương thức thanh toán: </div>
                    <div className="col-2">{order.payment}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default OrderUi;
