import React,{useRef} from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useCart } from "react-use-cart";
import { Container } from 'reactstrap';


const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#menu'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Feedback',
        url: '#feedback'
    },
    {
        display: 'Contact',
        url: '#contact'
    }


]

const Header = () => {

    const{totalItems}=useCart();

    const menuRef=useRef();

    const menuToggle=()=>menuRef.current.classList.toggle("active_menu");
    
    return (
        <div>
            <header className="header">
                <Container>
                    <div className="navigation">
                        <div className="logo">
                            <h2 className="d-flex align-items-center gap-1">
                                <span>
                                    <i class="ri-restaurant-2-line"></i>AMAIRA
                                </span>{" "}
                            </h2>
                        </div>
                        <div className="nav_menu" onClick={menuToggle} ref={menuRef}>
                            <div className="nav_list_wrapper d-flex align-items-center gap-5">
                                <ul className="nav_list">
                                    {navLinks.map((items, index) => (
                                        <li className="nav_item" key={index}>
                                            <a href={items.url} onClick={menuToggle} >{items.display}</a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="menu_right">
                                    <div className="custom_search">
                                        <input type="text" placeholder='search item....' />
                                        <span><i class="ri-search-line"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link to="/cart">
                            <span className="cart_icon">
                            <i class="ri-shopping-basket-line"></i>

                            <span className="badge">{totalItems}</span>
                            </span>
                            </Link>
                        </div>

                        <div className="mobile_menu" >
                            <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Header
