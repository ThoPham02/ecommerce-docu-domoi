import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import FooterUi from "./features/components/ui/Footer/FooterUi";
import HeaderUi from "./features/components/ui/Header/HeaderUi";
import AccountPage from "./features/pages/Account";
import CartPage from "./features/pages/Cart";
import ErrorPage from "./features/pages/Error";
import HomePage from "./features/pages/Home";
import LoginPage from "./features/pages/Login";
import NotificationPage from "./features/pages/Notification";
import OrderPage from "./features/pages/Order";
import PaymentPage from "./features/pages/Payment";
import ProductDetailPage from "./features/pages/ProductDetail";
import RegisterPage from "./features/pages/Register";
import SalePage from "./features/pages/Sale";

function App() {
  return (
    <>
      <HeaderUi />
      <div className="content" style={{ maxWidth: "1200px", margin: "0 auto", }}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart-list" element={<CartPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </div>
      <FooterUi />
    </>
  );
}

export default App;
