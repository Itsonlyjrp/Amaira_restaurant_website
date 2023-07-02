import React from 'react';
import { useCart } from 'react-use-cart';
import './product-card.css';

const ProductCard = (props) => {
    const {addItem}=useCart();

    const { imgUrl, title, price} = props.item

    return (
        <div className="single__product">
            <div className="product__img">
                <img src={imgUrl} alt="" className="w-100" />
            </div>

            <div className="product__content">
                <div className="rating-text-center">
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                </div>

                <h6>{title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="price d-flex align-items-center">
                        Price: ₹ <span>{price}</span>
                    </span>
                    <span className="shopping__icon" onClick={()=>addItem(props.item)}><i class="ri-shopping-cart-line"></i></span>
                </div>
                <div className="order_now">
                    <span >Order Now</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
