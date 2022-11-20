import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineBell,
  AiOutlineFileSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BiReceipt, BiWallet } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./HeaderUi.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "../../../../app/selector";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import ProductFilterSlice from "../Product/ProductFilterSlice";

const HeaderUi = () => {
  const userLogin = useSelector(AuthSelector);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const handleInputFilter = (e) => {
    setFilter(e.target.value.toLowerCase());
    dispatch(ProductFilterSlice.actions.setName(e.target.value.toLowerCase()));
  };

  return (
    <>
      <div className="header sticky-top">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-content">
          <div className="header-content-nav">
            <div className="header-content-nav-item">
              <Link to="/home">
                <AiOutlineHome className="header-icon" />
                <h4>Trang chủ</h4>
              </Link>
            </div>

            <div className="header-content-nav-item">
              <Link to="/cart-list">
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
              <Link to="/sale-manage">
                <BiWallet className="header-icon" />
                <h4>Bán Hàng</h4>
              </Link>
            </div>
          </div>
          <div className="header-content-search">
            <div className="header-content-search-input">
              <input
                placeholder="Tìm kiếm sản phẩm"
                value={filter}
                onChange={handleInputFilter}
              ></input>
              <AiOutlineFileSearch className="search-icon" />
            </div>
            {userLogin.name ? (
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  style={{ backgroundColor: "none", color: "#000" }}
                >
                  Xin chào, {userLogin.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to="/account"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Tài khoản của tôi
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="/home">Đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
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
            )}
          </div>
        </div>
      </div>
      <div style={{ height: "152px" }}></div>
    </>
  );
};

export default HeaderUi;
