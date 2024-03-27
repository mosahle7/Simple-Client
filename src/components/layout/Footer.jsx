import React from 'react';
import { Col, Container ,Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
        <Row className='justify-content-center'>
        <Col md={{span:3, offset:1}}>
            <h4 className='text-decoration-underline'>Contact</h4>
            <NavLink to='/contact'>Contact</NavLink>
        </Col>
        <Col md={{span:3, offset:1}}>
        <h4 className='text-decoration-underline'>User</h4>
            <NavLink to='/create'>Create a User</NavLink>
        </Col>
        <Col md={{span:3, offset:1}}>
            <h4 className='text-decoration-underline'>About Us</h4>
            <NavLink to='/contact'>About Us</NavLink>
        </Col>
        </Row>
    </Container>
  );
};

export default Footer;