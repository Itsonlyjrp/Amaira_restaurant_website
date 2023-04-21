import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './choose-us.css'
import pastaImg from '../../assets/images/pasta.png'

const ChooseUs = () => {
    return (
        <section id='about'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img src={pastaImg} alt="" className='w-100' />
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="choose__content">
                            <h4>Who we are?</h4>
                            <h2>Take a look at the benefits we offer you:</h2>
                            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis deserunt rem et maxime dicta. Labore.</p> */}

                        </div>

                        <div className="features mt-4">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span><i class="ri-truck-line"></i></span>
                                    <h6>Free Home Delivery</h6>
                                    <p>Experience the convenience of free home delivery, bringing our delicious cuisine right to your doorstep.</p>
                                </div>
                                <div className="single__feature">
                                    <span className="feature__icon-two">
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </span>
                                    <h6>Return & Refund</h6>
                                    <p>Rest assured with our customer-friendly Return & Refund policy,ensuring your satisfaction with every purchase..</p>
                                </div>
                            </div>

                            <div className="feature1 mt-3 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span className="feature__icon-3">
                                    <i class="ri-secure-payment-line"></i>
                                    </span>
                                    <h6>Secure Payment</h6>
                                    <p>Enjoy the peace of mind with our secure payment options, ensuring the transaction is safe and protected.</p>
                                </div>
                                <div className="single__feature">
                                    <span className="feature__icon-4">
                                    <i class="ri-24-hours-line"></i>
                                    </span>
                                    <h6>24/7 Support</h6>
                                    <p>Count on our round-the-clock support, available 24/7 to assist you with any queries or concerns you may have.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ChooseUs
