import { useSelector } from "react-redux";
import { ProductFilterSelector, ProductSelector } from "../../../../app/selector";
import ProductItem from "./ProductItem";
const ProductUi = () => {
  const productsSelector = useSelector(ProductSelector);
  const filter = useSelector(ProductFilterSelector);
  const products = productsSelector.filter((product) => {
    return (
      product.name.toLowerCase().indexOf(filter.name) !== -1 &&
      (filter.tag === "" || product.tag === filter.tag)
    );
  });
  return (
    <>
      <div
        className="row"
        style={{ backgroundColor: "#fff", margin: "16px 0", padding: "12px 0" }}
      >
        <h3>Tất cả sản phẩm</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              imgUrl={product.imgUrl}
              name={product.name}
              price={product.price}
              address={product.address}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductUi;
