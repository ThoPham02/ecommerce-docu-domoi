import "./ProductDetailUi.css";
import { useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";

import productsDB from "../../../data/products";
import numberToCurrency from "../../../utils/numberToCurrency";
import { Button } from "react-bootstrap";

const ProductDetailUi = () => {
  const { productId } = useParams();
  // eslint-disable-next-line
  const product = productsDB.find((item) => item.id == productId); 
  console.log(product);

  return (
    <div className="row" style={{ backgroundColor: "#fff", padding: "8px 0" }}>
      <div className="col-4">
        <img
          src={"../" + product.imgUrl}
          style={{
            width: "100%",
            height: "420px",
            objectFit: "contain",
          }}
          alt="product"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 0",
          }}
        >
          <h3 style={{ color: "red" }}>
            <IoIosPricetags />
            {numberToCurrency(product.price)}
          </h3>
        </div>
      </div>
      <div className="col-7" style={{ position: "relative" }}>
        <div
          className="row "
          style={{
            margin: "10px 0",
            fontSize: "20px",
          }}
        >
          <div className="col-4">Sản phẩm:</div>
          <div className="col-8">{product.name}</div>
        </div>
        <div
          className="row"
          style={{
            margin: "10px 0",
            fontSize: "20px",
          }}
        >
          <div className="col-4">Người bán: </div>
          <div className="col-8">{product.userId}</div>
        </div>
        <div
          className="row"
          style={{
            margin: "10px 0",
            fontSize: "20px",
          }}
        >
          <div className="col-4">Khu vực: </div>
          <div className="col-8">{product.address}</div>
        </div>
        <div
          className="row"
          style={{
            margin: "10px 0",
            fontSize: "20px",
          }}
        >
          <div className="col-4">Mô tả sản phẩm:</div>
          <div className="col-8">{product.discription}</div>
        </div>
        <div
          className="row"
          style={{
            margin: "10px 0",
            fontSize: "20px",
          }}
        >
          <div className="col-4">Số lượng:</div>
          <div className="col-8">1</div>
        </div>

        <div style={{ position: "absolute", bottom: "100px" }}>
          <Button
            style={{
              backgroundColor: "#ffcc00",
              padding: "8px 16px",
              margin: "0 12px",
              color: "#000"
            }}
          >
            Thêm vào giỏ hàng
          </Button>
          <Button
            style={{
              backgroundColor: "#ffcc00",
              padding: "8px 16px",
              margin: "0 12px",
              color: "#000"
            }}
          >
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailUi;
