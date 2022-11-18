import { BsFillBagPlusFill } from "react-icons/bs";
import "./SaleForm.css"

const SaleForm = () => {
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
        <div className="row info-item">
          <div className="col-3">Nhập tên sản phẩm: </div>
          <div className="col-9">
            <input type="text" className="sale-input" required/>
          </div>
        </div>
        <div className="row info-item">
          <div className="col-3">Thể loại:</div>
          <div className="col-9">
            <input type="text" className="sale-input" required/>
          </div>
        </div>
        <div className="row info-item">
          <div className="col-3">Số lượng: </div>
          <div className="col-9">
            <input type="number" defaultValue="1" className="sale-input" required/>
          </div>
        </div>
        <div className="row info-item">
          <div className="col-3">Giá: </div>
          <div className="col-9">
            <input type="text" className="sale-input" required/>
          </div>
        </div>
        <div className="row info-item">
          <div className="col-3">Trọng lượng: </div>
          <div className="col-9">
            <input type="number" className="sale-input" required/>
          </div>
        </div>
        <div className="row info-item">
          <div className="col-3">Mô tả sản phẩm: </div>
          <div className="col-9">
            <textarea type="text" rows="5" name="Text1" className="sale-input" required/>
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
            >
              Bán hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleForm;
