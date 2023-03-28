import React,{Fragment} from 'react'
import ChooseUs from '../components/choose-us/ChooseUs';
import Header from "../components/header/Header"
import HeroSlider from "../components/hero-Slider/HeroSlider";
// import PopularMenu from '../components/popular-menu/PopularMenu';
import MenuPack from '../components/menu-pack/MenuPack';
import Testimonials from '../components/testimonials/Testimonials';
import Footer from '../components/footer/Footer';


const Home = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSlider/>
      <MenuPack/>
      {/* <PopularMenu/> */}
      <ChooseUs/>
      <Testimonials/>
      <Footer/>
    </Fragment>
  )
}

export default Home
