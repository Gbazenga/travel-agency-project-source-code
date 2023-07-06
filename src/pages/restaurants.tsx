import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';

import DummyApp from '../dummy-pages/dummy-app';
import DummyRentals from '../dummy-pages/dummy-rentals';
import DummyCarRentals from '../dummy-pages/dummy-car-rentals';
import DummyTestimonials from '../dummy-pages/dummy-testimonials';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import openToggleMenu from '../functions/openToggleMenu';
import delayedConnect from '../functions/delayedConnect';
import swapToInternal from '../functions/swapToInternal';
import swapBack from '../functions/swapBack';

import "./pages.css"
import "./restaurants.css"

const foodImg = require("../food.png");

function Restaurants() {

    const DUMMY_DATA = [
        {
            info:"Italian",
            title:"Havana",
            subtitle:"318 Main St Bar Harbor, ME 04609",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: foodImg,
            cost: 0
        },
        {
            info:"Italian",
            title:"Harborside Hotel",
            subtitle:"55 West St Bar Harbor, ME 04609",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: foodImg,
            cost: 0
        },
        {
            info:"Chinese",
            title:"The Tyger",
            subtitle:"1 Howard St New York, NY 10013",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: foodImg,
            cost: 0
        },
        {
            info:"Chinese",
            title:"Café China",
            subtitle:"59 W 37th St New York, NY 10018",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: foodImg,
            cost: 0
        },
        {
            info:"French",
            title:"Cafe Matisse",
            subtitle:"167 Park Ave Rutherford, NJ 07070",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: foodImg,
            cost: 0
        },
        {
            info:"French",
            title:"Vin Sur Vingt",
            subtitle:"1140 Broadway New York, NY 10001",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: foodImg,
            cost: 0
        },
        {
            info:"Steakhouse",
            title:"The Smith",
            subtitle:"1150 Broadway New York, NY 10010",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: foodImg,
            cost: 0
        },
        {
            info:"Steakhouse",
            title:"Colonia Verde",
            subtitle:"219 Dekalb Ave Brooklyn, NY 11205",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: foodImg,
            cost: 0
        }
        
    ]

    const [filteredRestaurants, setFilteredRestaurants] = useState(DUMMY_DATA)
    const [index, setIndex] = useState(0);
    const [internalContent, setInternalContent] = useState(DUMMY_DATA[0])

    let navigate = useNavigate();

    function menuSelection(event: React.ChangeEvent<HTMLSelectElement>) {
        event.preventDefault()
        
        if(event.target.value === "Any"){
            setFilteredRestaurants(DUMMY_DATA)
            return
        }
        const filtered = DUMMY_DATA.filter((item) => {
            return item.info === event.target.value;
        })
        setFilteredRestaurants(filtered)
        setIndex(0)
    }

    const handleSelect = (selectedIndex:number) => {
        setIndex(selectedIndex);
    };

    return <div id="restaurants-page" className="pages-base">
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
                            <Nav><a>Restaurants</a></Nav>
                            <Nav><a onClick={(event) => delayedConnect("testimonials", event, navigate)}>Testimonials</a></Nav>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div id="text-box">
                    <h1>Restaurants</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum quam rhoncus augue commodo ullamcorper. Morbi sit amet pulvinar lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum quam rhoncus augue commodo ullamcorper. Morbi sit amet pulvinar lacus.</p>
                </div>
            
                <div id="restaurants-toggle" className="pages-toggle">
                    <div className="bg-hidden" id="restaurants-bg"></div>
                    <div id="click-area" onClick={openToggleMenu}></div>
                    <h1>^^^</h1>
                    <h1>View Local Restaurants</h1>
                    <div id="restaurants-caroussel" className='pages-caroussel'>
                    <Container>
                        <Form.Label>What type of food are you looking for?</Form.Label>
                        <Form.Select aria-label="Default select example"  size="lg" onChange={menuSelection}>
                            <option>Any</option>
                            <option value="Italian">Italian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="French">French</option>
                            <option value="Steakhouse">Steakhouse</option>
                        </Form.Select>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }}>
                                <div className='carrousel-area'>
                                    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
                                        {filteredRestaurants.map((item) => (
                                            <Carousel.Item key={Math.random()}>
                                            <Row>
                                                <Col lg="3" className='image-div'>
                                                    <img
                                                    className="d-block w-100"
                                                    src={item.image}
                                                    alt={item.title}
                                                    />
                                                </Col>
                                                <Col lg="9">
                                                    <div className='content-center'>
                                                        <h3>{item.title} <span>(info: {item.info})</span></h3>
                                                        <h4>{item.subtitle}</h4>
                                                        <p>{item.description}</p>
                                                        <div className="link-btn" onClick={(event) => swapToInternal(event, openToggleMenu, DUMMY_DATA, setInternalContent)}>View more info</div>
                                                    </div>
                                                </Col>
                                            </Row>
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
        <div className='internal-area'>
            <div id="restaurants-internal">
                <Container className='internal-pages'>
                    <h1>{internalContent.title} <span>(Menu: {internalContent.info})</span></h1>
                    <h2>Address: {internalContent.subtitle}</h2>
                    <h3>{internalContent.description}</h3>
                    <div className='internal-img'>
                        <img className="d-block w-100" src={internalContent.image} alt={internalContent.title}/>
                    </div>
                    <a onClick={swapBack} className="link-btn">Back to Restaurants page</a>
                </Container>
            </div>
        </div>
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
            <div id="testimonials" className='same-level-hide'>
                <DummyTestimonials/>
            </div>
        </div>
    </div>
}

export default Restaurants;