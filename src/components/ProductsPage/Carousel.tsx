import Carousel from 'react-bootstrap/Carousel';
import CardProduct from './CardProduct';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <CardProduct/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <CardProduct/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <CardProduct/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;