import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import FooterUi from "./features/components/ui/Footer/FooterUi";
import HeaderUi from "./features/components/ui/Header/HeaderUi";
import CartPage from "./features/pages/Cart";
import HomePage from "./features/pages/Home";

function App() {
  return (
    <>
      <HeaderUi />
      <div className="content" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="cart-list" element={<CartPage />} />
        </Routes>
      </div>
      <FooterUi />
    </>
  );
}

export default App;
