import productsDB from "../../../data/products";
import ProductItem from "./ProductItem";
const ProductUi = () => {
  const products = productsDB;
  return (
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
  );
};

export default ProductUi;
