import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import Button from "react-bootstrap/Button";
import numberToCurrency from "../../../utils/numberToCurrency";
import "./ProductItem.css";

const ProductItem = ({ name, imgUrl, address, id, price }) => {
  return (
    <div className="product-item">
      <Link to={`/product/:${id}`}>
        <Card style={{ height: "394px" }}>
          <Card.Img
            variant="top"
            src={imgUrl}
            style={{
              height: "200px",
              objectFit: "cover",
            }}
          />
          <Card.Body>
            <Card.Title style={{ height: "48px" }}>{name}</Card.Title>
            <Card.Title style={{ color: "red", fontSize: "16px" }}>
              <IoIosPricetags />
              {numberToCurrency(price)}
            </Card.Title>
            <Card.Text>
              <ImLocation />
              {address}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Button
        variant="primary"
        style={{
          position: "absolute",
          bottom: "46px",
          left: "20px",
        }}
      >
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
};

export default ProductItem;
