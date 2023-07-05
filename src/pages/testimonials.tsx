import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

import DummyApp from '../dummy-pages/dummy-app';
import DummyRentals from '../dummy-pages/dummy-rentals';
import DummyCarRentals from '../dummy-pages/dummy-car-rentals';
import DummyRestaurants from '../dummy-pages/dummy-restaurants';

import { useNavigate } from "react-router-dom";
import openToggleMenu from '../functions/openToggleMenu';
import delayedConnect from '../functions/delayedConnect';

import "./pages.css"
import "./testimonials.css"

function Testimonials() {

    const DUMMY_DATA = [
        {
            location:"Winslow, AZ",
            name:"Janet D. Damon",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
        },
        {
            location:"Hamilton, OH",
            name:"Sarah A. Wells",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
        },
        {
            location:"Honolulu, HI",
            name:"Richard M. Blount",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
        },
        {
            location:"Buffalo, NY",
            name:"Jazmine J. Turk",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
        },
        {
            location:"Worthington, OH",
            name:"Boris A. Lounsbury",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
        },
        {
            location:"Coleraine, MN",
            name:"Shannon M. Friday",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
        }       
        
    ]

    let navigate = useNavigate();

    return <div id="testimonials-page" className="pages-base">
        <div className='page-area'>
            <Container>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand><a id="nav-title" onClick={(event) => delayedConnect("Homepage", event, navigate)}>{`<`} Back to Homepage</a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav><a onClick={(event) => delayedConnect("rentals", event, navigate)}>Rentals</a></Nav>
                            <Nav><a onClick={(event) => delayedConnect("car-rentals", event, navigate)}>Car Rentals</a></Nav>
                            <Nav><a onClick={(event) => delayedConnect("restaurants", event, navigate)}>Restaurants</a></Nav>
                            <Nav><a>Testimonials</a></Nav>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div id="text-box">
                    <h1>Testimonials</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum quam rhoncus augue commodo ullamcorper. Morbi sit amet pulvinar lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum quam rhoncus augue commodo ullamcorper. Morbi sit amet pulvinar lacus.</p>
                </div>
            
                <div id="testimonials-toggle" className="pages-toggle">
                    <div className="bg-hidden" id="testimonials-bg"></div>
                    <div id="click-area" onClick={openToggleMenu}></div>
                    <h1>^^^</h1>
                    <h1>View Testimonials</h1>
                    <div id="testimonials-caroussel">
                    <Container>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }}>
                                <div className='carrousel-area'>
                                    <Carousel interval={null}>
                                        {DUMMY_DATA.map((item) => (
                                            <Carousel.Item key={Math.random()}>
                                                <div className="testimonials">
                                                    <h3>{item.name}</h3>
                                                    <h4>{item.location}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            </Container>
        </div>
        <div className='app-area'>
            <DummyApp/>
        </div>
        <div className='same-level-pages'>
            <div id="rentals" className='same-level-hide'>
                <DummyRentals/>
            </div>
            <div id="car-rentals" className='same-level-hide'>
                <DummyCarRentals/>
            </div>
            <div id="restaurants" className='same-level-hide'>
                <DummyRestaurants/>
            </div>
        </div>
    </div>
}

export default Testimonials;