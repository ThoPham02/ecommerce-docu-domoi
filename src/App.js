import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import './App.css'
import FooterUi from "./features/components/ui/Footer/FooterUi";
import HeaderUi from "./features/components/ui/Header/HeaderUi";
import HomePage from "./features/pages/Home";

function App() {
  return (
    <>
      <HeaderUi />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <FooterUi />
    </>
  );
}

export default App;
