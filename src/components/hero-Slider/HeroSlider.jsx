import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import {sliderData} from '../../assets/fake-data/slider'
import './slider.css'

const HeroSlider = () => {
  const settings={
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:3000,
  };
  return (
   <section>
      <Container>
        <Slider {...settings}>
          {sliderData.map((item,i)=>(
              <div key={i}>
                <div className="slider_wrapper d-flex align-items-center justify-content-between pt-5">
                  <div className="slider__content w-50 ps-2">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button className="btn">Explore Food</button>
                  </div>
                  <div className="slider_img w-50 ps-2">
                    <img src={item.imgUrl} alt="" className='w-100' />
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </Container>
   </section>
  )
}

export default HeroSlider
