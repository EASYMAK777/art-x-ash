import Carousel from "react-bootstrap/Carousel";
import amy3 from "../img/Amy3.jpg";
import amy1 from "../img/amy1.jpg";
import amy2 from "../img/Amy2.jpg";

function IndividualIntervalsExample() {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <img className="art-work" src={amy3} alt="picasso" controls="false" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="art-work" src={amy1} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="art-work" src={amy2} alt="Third slide" />
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

export default IndividualIntervalsExample;
