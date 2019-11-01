import React from 'react';
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from '../static/banner.png'

function Banner(props) {

  return (
    <Container className='banner' fluid>
      <Row>
        <Col className='cover-img-1' />
        <Col className='cover-img-2'>
          <Row className='h-100 justify-content-center align-items-center'>
            <Col className='col-12'>
              <div className='logo-box'>
                <img src={logo}/>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className='cover-img-3' />
      </Row>
    </Container>
  );
}

export default Banner;
