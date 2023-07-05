import React, { MouseEvent, useEffect, useState } from 'react';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";

const linkedin = require("../linkedin.png");
const github = require("../github.png");

function DummyApp() {
  return (
    <div className="App">
      <div className='rights'>
        <p>Created by: Guilherme Bazenga</p>
        <a href='https://www.linkedin.com/in/guilhermebazengacoder/' target="_blank"><img src={linkedin}></img></a>
        <a href='https://github.com/Gbazenga/' target="_blank"><img src={github}></img></a>
        <h6>Favicon provided by <a href='https://twemoji.twitter.com/'>Twemoji</a></h6>
      </div>
      <div className='homepage-area'>
        <div id="background-1" className='header-background background-show'></div>
        <Row id='header-grid'>
          <Col lg="2" className='show-desktop dummy-desktop'>
            <div className='choice-box'>
              <p>Restaurants</p>
            </div>
            <div className='choice-box'>
              <p>Car Rentals</p>
            </div>
            <div className='choice-box'>
              <p>Rentals</p>
            </div>
            <div className='choice-box'>
              <p>Testimonials</p>
            </div>
          </Col>
          <div className="show-mobile">
            <div id='title-area'>
              <h1>Try something new</h1>
              <p>Local dishes, otherwordly taste</p>
              <a><span>View</span></a>
            </div>
          </div>
          <Col lg="10">
            <div id='title-area'>
              <div>
                <h1>Try something new</h1>
                <p>Local dishes, otherwordly taste</p>
                <a><span>View</span></a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>

  );
}

export default DummyApp;
