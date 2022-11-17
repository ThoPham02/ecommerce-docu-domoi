import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineBell,
  AiOutlineFileSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BiReceipt, BiWallet } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./HeaderUi.css";

const HeaderUi = () => {
  return (
    <>
    <div className="header sticky-top">
      <div className="header-logo">
        <Link to="/">
          <img src="logo.png" alt="logo" />
        </Link>
      </div>
      <div className="header-content">
        <div className="header-content-nav">
          <div className="header-content-nav-item">
            <Link to="/">
              <AiOutlineHome className="header-icon" />
              <h4>Trang chủ</h4>
            </Link>
          </div>

          <div className="header-content-nav-item">
            <Link to="/cart">
              <AiOutlineShoppingCart className="header-icon" />
              <h4>Giỏ hàng</h4>
            </Link>
          </div>

          <div className="header-content-nav-item">
            <Link to="/order">
              <BiReceipt className="header-icon" />
              <h4>Đơn Hàng</h4>
            </Link>
          </div>

          <div className="header-content-nav-item">
            <Link to="/notification">
              <AiOutlineBell className="header-icon" />
              <h4>Thông Báo</h4>
            </Link>
          </div>
          <div className="header-content-nav-item">
            <Link to="/sale">
              <BiWallet className="header-icon" />
              <h4>Bán Hàng</h4>
            </Link>
          </div>
        </div>
        <div className="header-content-search">
          <div className="header-content-search-input">
            <input placeholder="Tìm kiếm sản phẩm"></input>
            <AiOutlineFileSearch className="search-icon" />
          </div>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
            }}
          >
            <button className="header-content-search-login">
              <AiOutlineUser className="header-icon" />
              <h4>Đăng nhập</h4>
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div style={{height: '152px'}}></div>
    </>
  );
};

export default HeaderUi;
