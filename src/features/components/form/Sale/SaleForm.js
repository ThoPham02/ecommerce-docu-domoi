import { useId, useState } from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthSelector } from "../../../../app/selector";
import ProductSlice from "../../ui/Product/ProductSlice";
import "./SaleForm.css";

const SaleForm = () => {
  const productId = useId();
  const user = useSelector(AuthSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [discription, setDiscription] = useState("");
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const product = {
      id: productId,
      name: name,
      tag: tag,
      amount: amount,
      price: price,
      discription: discription,
      address: address,
      imgUrl: "",
      userId: user.id,
      status: "Đang bán"
    };

    dispatch(ProductSlice.actions.addProduct(product));
    navigate('/sale-manage')
  };
  return (
    <div
      className="row"
      style={{
        backgroundColor: "#fff",
        padding: "24px",
      }}
    >
      <div className="col-5">
        <div
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsFillBagPlusFill style={{ fontSize: "150px" }} />
          <button
            style={{
              padding: "4px 24px",
              marginTop: "12px",
              backgroundColor: "#ffcc00",
              borderRadius: "8px",
            }}
          >
            Chọn ảnh sản phẩm
          </button>
        </div>
      </div>
      <div
        className="col-7"
        style={{
          borderLeft: "1px solid",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="row info-item">
            <div className="col-3">Nhập tên sản phẩm: </div>
            <div className="col-9">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="sale-input"
                required
              />
            </div>
          </div>
          <div className="row info-item">
            <div className="col-3">Thể loại:</div>
            <div className="col-9">
              <input
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                type="text"
                className="sale-input"
                required
              />
            </div>
          </div>
          <div className="row info-item">
            <div className="col-3">Địa chỉ giao hàng:</div>
            <div className="col-9">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="sale-input"
                required
              />
            </div>
          </div>
          <div className="row info-item">
            <div className="col-3">Số lượng: </div>
            <div className="col-9">
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                className="sale-input"
                required
              />
            </div>
          </div>
          <div className="row info-item">
            <div className="col-3">Giá: </div>
            <div className="col-9">
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="sale-input"
                required
              />
            </div>
          </div>
          <div className="row info-item">
            <div className="col-3">Mô tả sản phẩm: </div>
            <div className="col-9">
              <textarea
                onChange={(e) => setDiscription(e.target.value)}
                value={discription}
                type="text"
                rows="5"
                className="sale-input"
                required
              />
            </div>
          </div>
          <div className="row info-item">
            <div className="col-3"></div>
            <div className="col-9">
              <button
                style={{
                  backgroundColor: "#ffcc00",
                  padding: "4px 24px",
                  borderRadius: "8px",
                }}
                type="submit"
              >
                Đăng bán
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaleForm;
