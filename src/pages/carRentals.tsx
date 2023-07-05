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

import "./pages.css"
import "./carRentals.css"

const carImg = require("../car.png");

function CarRentals() {

    const DUMMY_DATA = [
        {
            year:"2014",
            title:"XV",
            make:"SUBARU",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 2000
        },
        {
            year:"2014",
            title:"FF",
            make:"FERRARI",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 8000
        },
        {
            year:"2008",
            title:"TXC 450",
            make:"SUBARU",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 2000
        },
        {
            year:"2009",
            title:"M3",
            make:"BMW",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 4000
        },
        {
            year:"2014",
            title:"E63 AMG S",
            make:"MERCEDES-BENZ",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 6000
        },
        {
            year:"2007",
            title:"AZERA",
            make:"HYUNDAI",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 800
        },
        {
            year:"2014",
            title:"CB1100 DLX",
            make:"HONDA",
            description: "Aliquam varius viverra ipsum a ullamcorper. Aenean a gravida eros, ac interdum erat. Fusce vitae dapibus metus.",
            image: carImg,
            cost: 2000
        }
        
    ]

    const [filteredCars, setFilteredCars] = useState(DUMMY_DATA)
    const [index, setIndex] = useState(0);
    const [listIsEmpty, setListIsEmpty] = useState(false);
    
    const [carMake, setCarMake] = useState("Any");
    const [bottomPrice, setBottomPrice] = useState(0);
    const [topPrice, setTopPrice] = useState(10000);
    const [keyPress, setKeyPress] = useState("");

    const [internalContent, setInternalContent] = useState(DUMMY_DATA[0])

    let navigate = useNavigate();

    useEffect(() => {
        setListIsEmpty(false)
        if(carMake === "Any"){
            const filtered = DUMMY_DATA.filter((item) => {
                return item.cost >= bottomPrice && item.cost <= topPrice;
            })
            setFilteredCars(filtered)
            return
        }
        const filtered = DUMMY_DATA.filter((item) => {
            return item.make === carMake && item.cost >= bottomPrice && item.cost <= topPrice;
        })

        setFilteredCars(filtered)
        setIndex(0)
    }, [bottomPrice, topPrice, carMake])

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
        setCarMake(event.target.value)
    }

    function handleSelect(selectedIndex:number) {
        setIndex(selectedIndex);
    };

    function minValueHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if(isNaN(parseInt(keyPress)) && keyPress != "Backspace"){
            return;
        }
        if(event.target.value[0] === "0"){
            setBottomPrice(parseInt(event.target.value.slice(1, event.target.value.length)))
            return;
        }
        if(event.target.value.length == 0 && keyPress == "Backspace"){
            setBottomPrice(0)
            return;
        }
        else{
            setBottomPrice(parseInt(event.target.value))
        }
    }

    function maxValueHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if(isNaN(parseInt(keyPress)) && keyPress != "Backspace"){
            return;
        }
        if(event.target.value[0] === "0"){
            setTopPrice(parseInt(event.target.value.slice(1, event.target.value.length)))
            return;
        }
        if(event.target.value.length == 0 && keyPress == "Backspace"){
            setTopPrice(0)
            return;
        }
        else{
            setTopPrice(parseInt(event.target.value))
        }
    }

    function swapToInternal(event:React.MouseEvent<HTMLElement>) {
        openToggleMenu(event)
        const text = document.getElementById("text-box")
        const toggle = document.querySelector(".pages-toggle")
        const carousel = toggle!.querySelectorAll(".pages-caroussel")[0]

        const inner = carousel.querySelector(".carousel-inner")
        const active = inner!.querySelector(".active")
        const name = active!.querySelector("h3")
        
        const pick = DUMMY_DATA.filter((item) => {
            return item.title === name!.innerText
        })
        setTimeout(() => {
            text!.classList.add("text-going")
            toggle!.classList.add("toggle-going")
        },1000)
        
        setInternalContent(pick[0])
        
        setTimeout(() => {
        const internal = document.querySelector(".internal-area")
        internal!.classList.toggle("internal-coming")
        }, 1000)
    }

    function swapBack() {
        const internal = document.querySelector(".internal-area")
        internal!.classList.toggle("internal-coming")

        const text = document.getElementById("text-box")
        const toggle = document.querySelector(".pages-toggle")

        text!.classList.toggle("text-coming")
        toggle!.classList.toggle("toggle-coming")
        
        setTimeout(() => {
            text!.classList.toggle("text-going")
            toggle!.classList.toggle("toggle-going")
            text!.classList.toggle("text-coming")
            toggle!.classList.toggle("toggle-coming")
        },1500)
    }

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
                                    <Form.Control size="lg" onChange={minValueHandler} onKeyDown={(event) => setKeyPress(event.key)} value={bottomPrice}/>
                                </Col>

                                <Col lg={4} xs={6}>
                                    <Form.Label>Max.</Form.Label>
                                    <Form.Control size="lg" onChange={maxValueHandler} onKeyDown={(event) => setKeyPress(event.key)} value={topPrice}/>
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
                                                            <h4>{item.make} -  <span>({item.year})</span></h4>
                                                            <p>{item.description}</p>
                                                            <h5>Daily: ${item.cost}</h5>
                                                            <div className="link-btn" onClick={swapToInternal}>View more info</div>
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
                    <h1>{internalContent.make} {internalContent.title} <span>({internalContent.year})</span></h1>
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