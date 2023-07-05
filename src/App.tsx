import React, { MouseEvent, useEffect, useState } from 'react';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

import DummyRestaurants from './dummy-pages/dummy-restaurants';
import DummyCarRentals from './dummy-pages/dummy-car-rentals';
import DummyRentals from './dummy-pages/dummy-rentals';
import DummyTestimonials from './dummy-pages/dummy-testimonials';

const linkedin = require("./linkedin.png");
const github = require("./github.png");

function App() {

  let dummyData:any
  let navigate = useNavigate();

  const [prevBox, setPrevBox] = useState(dummyData)
  const [prevBg, setPrevBg] = useState(dummyData)
  const [selectedText, setSelectedText] = useState("")

  useEffect(() => {
    setPrevBox(document.querySelector(".choice-box"))
    setPrevBg(document.getElementById("background-1"))
    setSelectedText("background-1")
  }, [])

  
    function ChangeBgHandler(bgName:string, event:MouseEvent<HTMLElement>){
    event.preventDefault();

    const pointer = event.target as HTMLElement;
    const bg = document.getElementById(bgName)

    prevBox?.classList.remove("box-hidden")
    prevBg?.classList.remove("background-show")

    pointer.classList.add("box-hidden")
    bg!.classList.add("background-show")

    setSelectedText(bgName)
    setPrevBox(pointer);
    setPrevBg(bg);
  }

  function delayedConnect(page:number, event: MouseEvent<HTMLElement>) {
    event.preventDefault()
    const bad = document.getElementById("bad-idea")
    bad!.classList.add("no")
    bad!.children[page].classList.add("chosen")

    const homepage = document.querySelector(".homepage-area")
    homepage!.classList.add("definetly-no")

    const target = bad!.children[page].children[0]

    const path = target.id.slice(0, -5)
    setTimeout(() => {
      navigate(`/${path}`)
    }, 2000)
  }

  return (
    <div className="App">
      <div className='homepage-area'>
        <div className='rights'>
          <p>Created by: Guilherme Bazenga</p>
          <a href='https://www.linkedin.com/in/guilhermebazengacoder/' target="_blank"><img src={linkedin}></img></a>
          <a href='https://github.com/Gbazenga/' target="_blank"><img src={github}></img></a>
          <h6>Favicon provided by <a href='https://twemoji.twitter.com/'>Twemoji</a></h6>
        </div>
        <div id="background-1" className='header-background background-show'></div>
        <div id="background-2" className='header-background'></div>
        <div id="background-3" className='header-background'></div>
        <div id="background-4" className='header-background'></div>
        <Row id='header-grid'>
          <Col lg="2" className="show-desktop">
            <div className='choice-box box-hidden' onClick={(event) => ChangeBgHandler("background-1", event)}>
              <p>Restaurants</p>
            </div>
            <div className='choice-box' onClick={(event) => ChangeBgHandler("background-2", event)}>
              <p>Car Rentals</p>
            </div>
            <div className='choice-box' onClick={(event) => ChangeBgHandler("background-3", event)}>
              <p>Rentals</p>
            </div>
            <div className='choice-box' onClick={(event) => ChangeBgHandler("background-4", event)}>
              <p>Testimonials</p>
            </div>
          </Col>
          <div className="show-mobile">
            <Carousel interval={5000} controls={false}>
              <Carousel.Item>
                <div id="background-1" className='header-background background-show'></div>
                <div id='title-area'>
                  <h1>Try something new</h1>
                  <p>Local dishes, otherwordly taste</p>
                  <a onClick={(event) => delayedConnect(0, event)}><span>View</span></a>
                </div>
              </Carousel.Item>

              <Carousel.Item>
              <div id="background-2" className='header-background background-show'></div>
                <div id='title-area'>
                  <h1>New set of wheels</h1>
                  <p>Your sense of adventure made manifest</p>
                  <a onClick={(event) => delayedConnect(1, event)}><span>View</span></a>
                </div>
              </Carousel.Item>

              <Carousel.Item>
              <div id="background-3" className='header-background background-show'></div>
                <div id='title-area'>
                  <h1>Change of setting</h1>
                  <p>New home, new you</p>
                  <a onClick={(event) => delayedConnect(2, event)}><span>View</span></a>
                </div>
              </Carousel.Item>

              <Carousel.Item>
              <div id="background-4" className='header-background background-show'></div>
                <div id='title-area'>
                  <h1>Tried and tested</h1>
                  <p>See how others feels about us</p>
                  <a onClick={(event) => delayedConnect(3, event)}><span>View</span></a>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <Col lg="10">
            <div id='title-area'>

              {selectedText === "background-1" && <div>
                <h1>Try something new</h1>
                <p>Local dishes, otherwordly tastes</p>
                <a onClick={(event) => delayedConnect(0, event)}><span>View</span></a>
              </div>}

              {selectedText === "background-2" && <div>
                <h1>New set of wheels</h1>
                <p>Your sense of adventure made manifest</p>
                <a onClick={(event) => delayedConnect(1, event)}><span>View</span></a>
              </div>}

              {selectedText === "background-3" && <div>
                <h1>Change of setting</h1>
                <p>New home, new you</p>
                <a onClick={(event) => delayedConnect(2, event)}><span>View</span></a>
              </div>}

              {selectedText === "background-4" && <div>
                <h1>Tried and tested</h1>
                <p>See how others feel about us</p>
                <a onClick={(event) => delayedConnect(3, event)}><span>View</span></a>
              </div>}

            </div>
          </Col>
        </Row>
      </div>
      <div id="bad-idea">
        <div className='bad'>
          <DummyRestaurants/>
        </div>
        <div className='bad'>
          <DummyCarRentals/>
        </div>
        <div className='bad'>
          <DummyRentals/>
        </div>
        <div className='bad'>
          <DummyTestimonials/>
        </div>
      </div>
    </div>

  );
}

export default App;
