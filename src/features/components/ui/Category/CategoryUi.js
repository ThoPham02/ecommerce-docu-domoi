import Card from "react-bootstrap/Card";
import "./CategoryUi.css";
import categoriesDB from "../../../data/categories";
import { useDispatch } from "react-redux";
import ProductFilterSlice from "../Product/ProductFilterSlice";

const CategoryUi = () => {
  const categories = categoriesDB;
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <h3 className="categories-title">Danh mục sản phẩm:</h3>
      <div className="categories-items">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              dispatch(ProductFilterSlice.actions.setTag(category.name));
            }}
          >
            <Card className="category">
              <Card.Img variant="top" src={category.imgUrl} width="50%" />
              <Card.Body>
                <Card.Title style={{ fontSize: "12px" }}>
                  {category.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryUi;
