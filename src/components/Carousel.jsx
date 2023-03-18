import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel style={{ height: "500px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[500px]"
          src="https://i.pinimg.com/originals/2b/67/d5/2b67d52c22a16e01fd2eedb62bbdbc84.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[500px]"
          src="https://www.mural-wallpaper.com/wp-content/uploads/2022/03/A-CI27.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[500px]"
          src="https://static.vecteezy.com/system/resources/previews/000/116/304/original/free-construction-background-vector.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
