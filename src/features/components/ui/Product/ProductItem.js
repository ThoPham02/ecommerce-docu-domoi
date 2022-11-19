import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import Button from "react-bootstrap/Button";
import numberToCurrency from "../../../utils/numberToCurrency";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import CartSlice from "../Cart/CartSlice";
import { AuthSelector } from "../../../../app/selector";

const ProductItem = ({ name, imgUrl, address, id, price }) => {
  const productId = id;
  const dispatch = useDispatch();
  const cartItem = {
    productId: productId,
    name: name,
    imgUrl: imgUrl,
    address: address,
    amount: 1,
    price: price,
    checked: true,
    userId: useSelector(AuthSelector).id,
  };
  const handleClick = () => {
    dispatch(CartSlice.actions.addItem(cartItem));
  };

  return (
    <div className="product-item">
      <Link to={`/products/${productId}`}>
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
            <Card.Title style={{ height: "48px", overflow: "hidden" }}>
              {name}
            </Card.Title>
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
          backgroundColor: "#ffcc00",
          color: "#000",
        }}
        onClick={handleClick}
      >
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
};

export default ProductItem;
