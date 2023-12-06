import React from 'react';
import { Carousel } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
// import "./Banner.css"
import './Offer.css'
import { Link } from 'react-router-dom';


const Offer = () => {
    return (
        <div className='mb-5 mt-4'>

<Carousel className="banners">
  <Carousel.Item className="carousel-design values">
  <img
      className="d-block w-100  slide"
      src="https://i.ibb.co/Ld87BcL/7583283.jpg"
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/piece'>
    {/* <button className="banner  text-white">More Products</button> */}
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://i.ibb.co/hm9f8MQ/7904555.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/more'>
    {/* <button className="banner  text-white">More Products</button> */}
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://i.ibb.co/qWFPsnc/summer2-20.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
  
    <Link to='/more'>
    {/* <button className="banner  text-white">More Products</button> */}
    </Link>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Offer;