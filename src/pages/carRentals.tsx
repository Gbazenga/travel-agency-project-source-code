import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';

import DummyApp from '../dummy-pages/dummy-app';
import DummyRentals from '../dummy-pages/dummy-rentals';
import DummyRestaurants from '../dummy-pages/dummy-restaurants';
import DummyTestimonials from '../dummy-pages/dummy-testimonials';

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import openToggleMenu from '../functions/openToggleMenu';
import delayedConnect from '../functions/delayedConnect';
import swapToInternal from '../functions/swapToInternal';
import swapBack from '../functions/swapBack';
import maxValueHandler from '../functions/maxValueHandler';
import minValueHandler from '../functions/minValueHandler';

import "./pages.css"
import "./carRentals.css"

const carImg = require("../car.png");

function CarRentals() {

    const DUMMY_DATA = [
        {
            info:"2014",
            title:"XV",
            subtitle:"SUBARU",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 2000
        },
        {
            info:"2014",
            title:"FF",
            subtitle:"FERRARI",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 8000
        },
        {
            info:"2008",
            title:"TXC 450",
            subtitle:"SUBARU",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 2000
        },
        {
            info:"2009",
            title:"M3",
            subtitle:"BMW",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 4000
        },
        {
            info:"2014",
            title:"E63 AMG S",
            subtitle:"MERCEDES-BENZ",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 6000
        },
        {
            info:"2007",
            title:"AZERA",
            subtitle:"HYUNDAI",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 800
        },
        {
            info:"2014",
            title:"CB1100 DLX",
            subtitle:"HONDA",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 2000
        }
        
    ]

    const [filteredCars, setFilteredCars] = useState(DUMMY_DATA)
    const [index, setIndex] = useState(0);
    const [listIsEmpty, setListIsEmpty] = useState(false);
    
    const [carSubtitle, setCarSubtitle] = useState("Any");
    const [bottomPrice, setBottomPrice] = useState(0);
    const [topPrice, setTopPrice] = useState(10000);
    const [keyPress, setKeyPress] = useState("");

    const [internalContent, setInternalContent] = useState(DUMMY_DATA[0])

    let navigate = useNavigate();

    useEffect(() => {
        setListIsEmpty(false)
        if(carSubtitle === "Any"){
            const filtered = DUMMY_DATA.filter((item) => {
                return item.cost >= bottomPrice && item.cost <= topPrice;
            })
            setFilteredCars(filtered)
            return
        }
        const filtered = DUMMY_DATA.filter((item) => {
            return item.subtitle === carSubtitle && item.cost >= bottomPrice && item.cost <= topPrice;
        })

        setFilteredCars(filtered)
        setIndex(0)
    }, [bottomPrice, topPrice, carSubtitle])

    useEffect(() => {
        if(isNaN(bottomPrice)){
            setBottomPrice(0)
        }
        if(isNaN(topPrice)){
            setTopPrice(10000)
        }
    }, [bottomPrice, topPrice])

    useEffect(() => {
        if(Object.keys(filteredCars).length === 0){
            setListIsEmpty(true)
            setIndex(0)
        }
    }, [filteredCars])

    function menuSelection(event: React.ChangeEvent<HTMLSelectElement>) {
        event.preventDefault()
        setCarSubtitle(event.target.value)
    }

    function handleSelect(selectedIndex:number) {
        setIndex(selectedIndex);
    };

    return <div id="car-rentals-page" className="pages-base">
        <div className='page-area'>
            <Container>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand><a id="nav-title" onClick={(event) => delayedConnect("Homepage", event, navigate)}>{`<`} Back to Homepage</a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav><a onClick={(event) => delayedConnect("rentals", event, navigate)}>Rentals</a></Nav>
                            <Nav><a>Car Rentals</a></Nav>
                            <Nav><a onClick={(event) => delayedConnect("restaurants", event, navigate)}>Restaurants</a></Nav>
                            <Nav><a onClick={(event) => delayedConnect("testimonials", event, navigate)}>Testimonials</a></Nav>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div id="text-box">
                    <h1>Car Rentals</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum quam rhoncus augue commodo ullamcorper. Morbi sit amet pulvinar lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum quam rhoncus augue commodo ullamcorper. Morbi sit amet pulvinar lacus.</p>
                </div>
            
                <div id="car-rentals-toggle" className="pages-toggle">
                    <div className="bg-hidden" id="car-rentals-bg"></div>
                        <div id="click-area" onClick={openToggleMenu}></div>
                        <h1>^^^</h1>
                        <h1>View Cars Available</h1>
                        <div id="car-rentals-caroussel" className='pages-caroussel'>
                        <Container>
                            <Row>
                                <Col lg={4} xs={6}>
                                    <Form.Label>Min.</Form.Label>
                                    <Form.Control size="lg" onChange={(event) => minValueHandler(event, keyPress, setBottomPrice)} onKeyDown={(event) => setKeyPress(event.key)} value={bottomPrice}/>
                                </Col>

                                <Col lg={4} xs={6}>
                                    <Form.Label>Max.</Form.Label>
                                    <Form.Control size="lg" onChange={(event) => maxValueHandler(event, keyPress, setTopPrice)} onKeyDown={(event) => setKeyPress(event.key)} value={topPrice}/>
                                </Col>

                                <Col lg={4} xs={12}>
                                    <Form.Label>What make of car are you looking for?</Form.Label>
                                    <Form.Select aria-label="Default select example"  size="lg" onChange={menuSelection}>
                                        <option>Any</option>
                                        <option value="SUBARU">Subaru</option>
                                        <option value="BMW">BMW</option>
                                        <option value="MERCEDES-BENZ">Mercedes-Benz</option>
                                        <option value="HYUNDAI">HYUNDAI</option>
                                        <option value="HONDA">HONDA</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={{ span: 8, offset: 2 }}>
                                    <div className='carrousel-area'>
                                        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
                                            {filteredCars.map((item) => (
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
                                                            <h3>{item.title}</h3>
                                                            <h4>{item.subtitle} -  <span>({item.info})</span></h4>
                                                            <p>{item.description}</p>
                                                            <h5>Daily: ${item.cost}</h5>
                                                            <div className="link-btn" onClick={(event) => swapToInternal(event, openToggleMenu, DUMMY_DATA, setInternalContent)}>View more info</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Carousel.Item>
                                            ))}
                                            {listIsEmpty && <Carousel.Item>
                                                <Row>
                                                        <Col lg="3" className='image-div'>
                                                        </Col>
                                                        <Col lg="9">
                                                            <div>
                                                            <h3>Oops! No results found.</h3>
                                                            <h4></h4>
                                                            <p>Try to change your price/make parameter to refresh this result.</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Carousel.Item>}
                                        </Carousel>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Container>
            <div className='internal-area'>
            <div id="car-rentals-internal">
                <Container className='internal-pages'>
                    <h1>{internalContent.subtitle} {internalContent.title} <span>({internalContent.info})</span></h1>
                    <h2>Daily: ${internalContent.cost}</h2>
                    <h3>{internalContent.description}</h3>
                    <div className='internal-img'>
                        <img className="d-block w-100" src={internalContent.image} alt={internalContent.title}/>
                    </div>
                    <a onClick={swapBack} className="link-btn">Back to Rentals page</a>
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
            <div id="restaurants" className='same-level-hide'>
                <DummyRestaurants/>
            </div>
            <div id="testimonials" className='same-level-hide'>
                <DummyTestimonials/>
            </div>
        </div>
    </div>
}

export default CarRentals;