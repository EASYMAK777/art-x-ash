import Carousel from "react-bootstrap/Carousel";

import amy3 from "../img/Amy3.jpg";
import amy1 from "../img/amy1.jpg";
import amy2 from "../img/Amy2.jpg";

function ImageCarousel() {
  return (
    <div className="carousel-body">
      <Carousel
        className="carousel"
        controls={false}
        indicatorLabels={[]}
        indicators={false}
      >
        <Carousel.Item className="carousel-item" interval={1000}>
          <img
            className="art-work"
            src={amy3}
            alt="picasso"
            style={{ height: "auto", width: "auto" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={1000}>
          <img
            className="art-work"
            src={amy1}
            alt="Second slide"
            style={{ height: "auto", width: "auto" }}
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={1000}>
          <img
            className="art-work"
            src={amy2}
            alt="Third slide"
            style={{ height: "auto", width: "auto" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
