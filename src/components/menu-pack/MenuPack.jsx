import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import ProductCard from '../product-card/ProductCard'
import {DAL,indianMainCourse,biryaniProducts,drinks,chickenMainCourse,appetite,breadRoti,burger,cornChat,sandwich,maggie,rollProducts,momoProducts,noodleProducts} from '../../assets/fake-data/products'
import './menu-pack.css'


const MenuPack = () => {

const [filter,setFilter]=useState('BIRYANI-VEG/NON-VEG')
const [products,setProducts]=useState(biryaniProducts)

useEffect(()=>{
    if (filter==='DAL'){
        setProducts(DAL)
    }
    if (filter==='INDIAN-MAIN-COURSE'){
        setProducts(indianMainCourse)
    }
    if (filter==='CHICKEN-MAIN-COURSE'){
        setProducts(chickenMainCourse)
    }
    if (filter==='DRINKS'){
        setProducts(drinks)
    }
    if (filter==='APPETITE'){
        setProducts(appetite)
    }
    if (filter==='BREAD & ROTI'){
        setProducts(breadRoti)
    }
    if (filter==='BURGER'){
        setProducts(burger)
    }
    if (filter==='CORN-CHAT'){
        setProducts(cornChat)
    }
    if (filter==='SANDWICH'){
        setProducts(sandwich)
    }
    if (filter==='MAGGIE'){
        setProducts(maggie)
    }
    if (filter==='BIRYANI-VEG/NON-VEG'){
        setProducts(biryaniProducts)
    }
    if (filter==='ROLLS-VEG/NON-VEG'){
        setProducts(rollProducts)
    }
    if (filter==='MOMO-VEG/NON-VEG'){
        setProducts(momoProducts)
    }
    if (filter==='NOODLES-VEG/NON-VEG'){
        setProducts(noodleProducts)
    }
},[filter])

  return (
    <section id='menu'>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-4'>
                    <h3 className="menu__title">Our Menu Pack</h3>
                    </Col>
                <Col lg='12' className='text-center mb-5'>
                    <button className={`filter-btn ${filter==='INDIAN-MAIN-COURSE' ? 'active__btn':''}`} onClick={()=>setFilter('INDIAN-MAIN-COURSE')}>INDIAN MAIN COURSE</button>
                    <button className={`filter-btn ${filter==='DAL' ? 'active__btn':''}`} onClick={()=>setFilter('DAL')}>DAL</button>
                    <button className={`filter-btn ${filter==='CHICKEN-MAIN-COURSE' ? 'active__btn':''}`} onClick={()=>setFilter('CHICKEN-MAIN-COURSE')}>CHICKEN MAIN COURSE</button>
                    <button className={`filter-btn ${filter==='DRINKS' ? 'active__btn':''}`} onClick={()=>setFilter('DRINKS')}>DRINKS</button>
                    <button className={`filter-btn ${filter==='BREAD & ROTI' ? 'active__btn':''}`} onClick={()=>setFilter('BREAD & ROTI')}>BREAD & ROTI</button>
                    <button className={`filter-btn ${filter==='BURGER' ? 'active__btn':''}`} onClick={()=>setFilter('BURGER')}>BURGER</button>
                    <button className={`filter-btn ${filter==='CORN-CHAT' ? 'active__btn':''}`} onClick={()=>setFilter('CORN-CHAT')}>CORN CHAT</button>
                    <button className={`filter-btn ${filter==='SANDWICH' ? 'active__btn':''}`} onClick={()=>setFilter('SANDWICH')}>SANDWICH</button>
                    <button className={`filter-btn ${filter==='MAGGIE' ? 'active__btn':''}`} onClick={()=>setFilter('MAGGIE')}>MAGGIE</button>
                    <button className={`filter-btn ${filter==='BIRYANI-VEG/NON-VEG' ? 'active__btn':''}`} onClick={()=>setFilter('BIRYANI-VEG/NON-VEG')}>BIRYANI VEG/NON VEG</button>
                    <button className={`filter-btn ${filter==='ROLLS-VEG/NON-VEG' ? 'active__btn':''}`} onClick={()=>setFilter('ROLLS-VEG/NON-VEG')}>ROLLS VEG/NON VEG</button>
                    <button className={`filter-btn ${filter==='MOMO-VEG/NON-VEG' ? 'active__btn':''}`} onClick={()=>setFilter('MOMO-VEG/NON-VEG')}>MOMO VEG/NON VEG</button>
                    <button className={`filter-btn ${filter==='NOODLES-VEG/NON-VEG' ? 'active__btn':''}`} onClick={()=>setFilter('NOODLES-VEG/NON-VEG')}>NOODLES VEG/NON VEG</button>

                </Col>

                {
                   products.map((item,i)=>(
                        <Col lg='3' md='4' sm='6' xs='6' key={item.id} className="mb-4"><ProductCard item={item} ></ProductCard></Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default MenuPack
