import Carousel from "react-bootstrap/Carousel";
import "./SliderUi.css";
import sliderDB from "../../../data/slider";

const SliderUi = () => {
  const sliders = sliderDB;
  return (
    <div>
      <Carousel fade className="slider">
        {sliders.map((item) => {
          return (
            <Carousel.Item key={item.imgUrl}>
              <img
                className="d-block w-100 slider-img"
                src={item.imgUrl}
                alt={item.imgUrl}
              />
              <Carousel.Caption className="slider-header">
                <h3>{item.title}</h3>
                <p>{item.p}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SliderUi;
