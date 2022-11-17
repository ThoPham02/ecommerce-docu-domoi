import numberToCurrency from "../../../utils/numberToCurrency";
import { Checkbox } from "antd";

const CartItem = (cartItem) => {
  return (
    <>
      <tr
        key={cartItem.id}
        style={{
          lineHeight: "140px",
        }}
      >
        <td>
          <Checkbox></Checkbox>
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
          <input
            type="number"
            style={{
              height: "24px",
              width: "48px",
              textAlign: "center",
            }}
          ></input>
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
