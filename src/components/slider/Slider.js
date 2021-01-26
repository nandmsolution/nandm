
import {
  Carousel 
}from "react-bootstrap";



const Slider = (props) => {
  console.log(props);

  return (
    <div>
        <Carousel>
          {
            props.items.map((item,index)=> 
              (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.caption.heading}</h3>
                    <p>{item.caption.desc}</p>
                  </Carousel.Caption>
                </Carousel.Item>
            ))
          }
        </Carousel>
    </div>

  )

};


export default Slider;

