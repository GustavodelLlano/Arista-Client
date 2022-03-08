import "./Carousels.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ControlledCarousel = ()  => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carImg"
            src="https://www.lasportiva.com/media/Ambassador/Adam_Ondra_Change_9b_Hanshelleren_-_Flatanger_Norway__credits_Petr_Pavlicek_2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Adam Ondra</h3>
            <p>El mítico escalador Adam Ondra utiliza Arista</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 carImg"
            src="https://gripped.com/wp-content/uploads/2021/01/Janja-Garnbret.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption >
            <h3>Janja Garnbret</h3>
            <p>La mejor escaladora del mundo confía en Arista</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 carImg"
            src="https://www.telemadrid.es/2020/02/21/programas/el-partido-de-las-nueve/Alberto-Gines-escalador-olimpico-anos_2206589370_7564602_1300x731.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Alberto Ginés</h3>
            <p> El oro olímpico español se consiguió gracias a Arista</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 export default ControlledCarousel