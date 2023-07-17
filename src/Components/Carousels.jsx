import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/daysofheaven.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Days of Heaven (1978)</h3>
          <p>dir Terrence Malick</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/goodtime.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Good Time (2017)</h3>
          <p>dir Sadfie Brothers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/naturalbornkillers.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Natural Born Killers (1994)</h3>
          <p>dir Oliver Stone</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/melancholia.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Melancholia (2011)</h3>
          <p>dir Lars Von Trier</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
