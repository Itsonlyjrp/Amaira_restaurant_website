import React from 'react'
import './footer.css'
import { Container, Row, Col,ListGroup,ListGroupItem} from 'reactstrap'



// const footerQuickLinks=[
//     {
//         display:'Terms & Conditions',
//         url:'#'
//     },
//     {
//         display:'Privacy Policy',
//         url:'#'
//     },
//     {
//         display:'Return & Refund',
//         url:'#'
//     },
//     {
//         display:'Payment Method',
//         url:'#'
//     }
// ]

const footerLinks=[
    {
        display:'Menu',
        url:'#menu'
    },
    {
        display:'About Us',
        url:'#about'
    },
    {
        display:'Feedback',
        url:'#feedback'
    },
    {
        display:'Contact',
        url:'#contact'
    }
]

const Footer = () => {
    return (
        <footer className="footer" id='contact'>
            <div className="footer__top">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 className="d-flex align-items-center gap-1 mb-4">
                                    <span>
                                        <i class="ri-restaurant-2-line"></i>AMAIRA
                                    </span>{" "}
                                </h2>
                                <p>"Indulge in Culinary Bliss, Unleash Your Tastebuds"</p>
                            </div>
                        </Col>
                        {/* <Col lg='2' md='4' sm='6'>
                            <h5 className="footer__link-title">Info Links</h5>
                            <ListGroup>
                            {
                              footerQuickLinks.map((item,index)=>(
                              <ListGroupItem className="link__item">
                                <a href={item.url}>{item.display}</a>
                              </ListGroupItem>))
                            }
                            </ListGroup>
                        </Col> */}


                        <Col lg='2' md='4' sm='6'>
                            <h5 className="footer__link-title">Quick Links</h5>
                            <ListGroup>
                            {
                              footerLinks.map((item,index)=>(
                              <ListGroupItem className="link__item">
                                <a href={item.url}>{item.display}</a>
                              </ListGroupItem>))
                            }
                            </ListGroup>
                        </Col>


                        <Col lg='4' md='4' sm='6'>
                        <h5 className="footer__link-title">Contact</h5>
                        <ListGroup>
                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                            <i class="ri-map-pin-line">Burla,Odisha,india{" "}</i>
                            </ListGroupItem>

                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                            <i class="ri-mail-line">example@gmail.com{" "}</i>
                            </ListGroupItem>

                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                            <i class="ri-phone-line">+91 8800171418</i>
                            </ListGroupItem>
                        </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <p><i class="ri-copyright-line">Copyright 2023.All rights reserved</i></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
