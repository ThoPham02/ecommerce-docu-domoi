import numberToCurrency from "../../../utils/numberToCurrency";
import { Checkbox } from "antd";
import { useDispatch } from "react-redux";
import CartSlice from "./CartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(CartSlice.actions.toggleItem(cartItem.productId));
  };

  return (
    <>
      <tr
        style={{
          lineHeight: "140px",
        }}
      >
        <td>
          <Checkbox
            checked={cartItem.checked}
            onClick={handleToggle}
          ></Checkbox>
        </td>
        <td>
          <img
            src={cartItem.imgUrl}
            alt="img"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
            }}
          />
        </td>
        <td>{cartItem.name}</td>
        <td>
          <p
            style={{
              height: "24px",
              width: "48px",
              textAlign: "center",
            }}
          >
            {cartItem.amount}
          </p>
        </td>
        <td style={{ color: "red" }}>{numberToCurrency(cartItem.price)}</td>
        <td>
          <button
            style={{
              border: "none",
              background: "none",
              color: "black",
            }}
          >
            Xóa
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
