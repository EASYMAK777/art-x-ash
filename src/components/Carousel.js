import Carousel from "react-bootstrap/Carousel";

import amy3 from "../img/Amy3.jpg";
import amy1 from "../img/amy1.jpg";
import amy2 from "../img/Amy2.jpg";

function ImageCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item" interval={1000}>
        <img
          className="art-work"
          src={amy3}
          alt="picasso"
          style={{ height: 500, width: 500 }}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="carousel-item" interval={1000}>
        <img
          className="art-work"
          src={amy1}
          alt="Second slide"
          style={{ height: 500, width: 500 }}
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="carousel-item" interval={1000}>
        <img
          className="art-work"
          src={amy2}
          alt="Third slide"
          style={{
            height: 500,
            width: 500,
            margin: 0,
            position: "absolute",
            top: 50,
            left: 50,
          }}
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
