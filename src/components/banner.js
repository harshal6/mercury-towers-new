import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import bannerImage from '../../.wordpress-cache/wp-content/uploads/home-banner.png'

const Banner = (props) =>{
    return(
        <div className="home-carousel">
         <Carousel>
           <Carousel.Item>
            <Carousel.Caption>
             <div className="home-car-info">
             <h3>FOOD & DRINK</h3>
             <p>Discover the Latest in Taste</p>
             <button to="/fooddrink/">See more</button>
             </div>
             <div className="home-img-block"><img src={bannerImage} alt=""/></div>
            </Carousel.Caption>
            
           </Carousel.Item>
           <Carousel.Item>
            <Carousel.Caption>
            <div className="home-car-info">
             <h3>FOOD & DRINK</h3>
             <p>Discover the Latest in Taste</p>
             <button to="/fooddrink/">See more</button>
             </div>
             <div className="home-img-block"><img src={bannerImage} alt=""/></div>
            </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
            <Carousel.Caption>
            <div className="home-car-info">
             <h3>FOOD & DRINK</h3>
             <p>Discover the Latest in Taste</p>
             <button to="/fooddrink/">See more</button>
             </div>
             <div className="home-img-block"><img src={bannerImage} alt=""/></div>
            </Carousel.Caption>
           </Carousel.Item>
          </Carousel>  
          </div>
    );
}
export default Banner