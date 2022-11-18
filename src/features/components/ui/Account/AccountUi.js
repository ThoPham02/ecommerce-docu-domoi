import { AiOutlineUser } from "react-icons/ai";
import "./AccountUi.css";

const AccountUi = () => {
  return (
    <>
      <div className="row" style={{ backgroundColor: "#fff" }}>
        <h3>Quản lý tài khoản</h3>
        <p>Quản lý thông tin để bảo mật tài khoản</p>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "#fff",
          marginTop: "12px",
          padding: "24px 0",
        }}
      >
        <div className="col-7">
          <div className="row info-item">
            <div className="col-3">Tên đăng nhập</div>
            <div className="col-9"></div>
          </div>
          <div className="row info-item">
            <div className="col-3">Email</div>
            <div className="col-9"></div>
          </div>
          <div className="row info-item">
            <div className="col-3">Số điện thoại</div>
            <div className="col-9"></div>
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
                Lưu
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-5"
          style={{
            borderLeft: "1px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "50px",
              backgroundColor: "#ccc",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <AiOutlineUser />
          </div>
          <button
            style={{
              padding: "4px 24px",
              marginTop: "12px",
              backgroundColor: "#ffcc00",
              borderRadius: "8px",
            }}
          >
            Chọn ảnh
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountUi;
