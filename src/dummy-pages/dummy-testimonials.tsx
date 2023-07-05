import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../pages/pages.css"
import "../pages/testimonials.css"

function DummyTestimonials() {
    return <div id="testimonials-page" className="pages-base">
        <Container>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand><a id="nav-title">{`<`} Back to Homepage</a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav><a>Rentals</a></Nav>
                        <Nav><a>Car Rentals</a></Nav>
                        <Nav><a>Restaurants</a></Nav>
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
                <div className="bg-hidden" id="rentals-bg"></div>
                <div id="click-area"></div>
                <h1>^^^</h1>
                <h1>View Testimonials</h1>
            </div>
        </Container>
    </div>
}

export default DummyTestimonials;