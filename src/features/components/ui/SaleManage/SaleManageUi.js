import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthSelector, ProductSelector } from "../../../../app/selector";
import ProductSlice from "../Product/ProductSlice";

const SaleManageUi = () => {
  const dispatch = useDispatch();

  const user = useSelector(AuthSelector);
  const products = useSelector(ProductSelector);
  const myProducts = products.filter((product) => {
    return product.userId === user.id;
  });

  const handleClick = () => {
    dispatch(ProductSlice.actions.deleteProduct());
  };
  return (
    <>
      <div
        className="row bg-white"
        style={{
          padding: "8px 0",
        }}
      >
        <div className="col-4">
          <h3>Quản lý bán hàng</h3>
        </div>
        <div className="col-8">
          <Link to="/sale">
            <button
              style={{
                backgroundColor: "#ffcc00",
                padding: "4px 24px",
                borderRadius: "8px",
              }}
            >
              Thêm sản phẩm
            </button>
          </Link>
        </div>
      </div>
      <div
        className="row bg-white "
        style={{ paddingBottom: "12px", marginBottom: "12px" }}
      >
        <div className="col-2 text-center">Mã sản phẩm</div>
        <div className="col-4 ">Tên sản phẩm</div>
        <div className="col-1 text-center">Giá</div>
        <div className="col-1 text-center">Số lượng</div>
        <div className="col-2 text-center">Trạng thái</div>
        <div className="col-2 text-center">Xóa sản phẩm</div>
      </div>
      {myProducts.map((product) => {
        return (
          <div className="row bg-white" key={product.id}>
            <div className="col-2 text-center">{product.id}</div>
            <div className="col-4 ">{product.name}</div>
            <div className="col-1 text-center">{product.price}</div>
            <div className="col-1 text-center">{product.amount}</div>
            <div className="col-2 text-center">{product.status}</div>
            <div className="col-2 text-center">
              <button
                style={{
                  backgroundColor: "#ffcc00",
                  padding: "2px 8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                onClick={handleClick}
              >
                Xóa
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SaleManageUi;
