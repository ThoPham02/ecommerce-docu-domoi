import { Link } from "react-router-dom";
import "./FooterUi.css"

const FooterUi = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <h4>Chăm sóc khách hàng</h4>
          <ul className="footer-content">
            <li><Link>Trung tâm hỗ trợ</Link></li>
            <li><Link>Hướng dẫn mua hàng</Link></li>
            <li><Link>Hướng dẫn bán hàng</Link></li>
            <li><Link>Thanh toán</Link></li>
            <li><Link>Vận chuyển</Link></li>
            <li><Link>Chăm sóc khách hàng</Link></li>
          </ul>
        </div>
        <div className="col-4">
          <h4>Theo dõi chúng tôi trên</h4>
          <ul className="footer-content">
            <li><Link>Facebook</Link></li>
            <li><Link>Instagram</Link></li>
            <li><Link>LinkedIn</Link></li>
          </ul>
        </div>
        <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterUi;

