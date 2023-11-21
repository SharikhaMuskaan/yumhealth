import React from 'react';
import './Banner.css';
import reactBanner from '../assets/img/ExampleCarouselImage.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const Banner_1 = () => {
  return (
    <div className="Banner-container">
      <div className="Banner_1" style={{ backgroundImage: `url(${reactBanner})` }}>
        <Container className="position-absolute top-50 start-50 translate-middle">
          <Form className='d-flex'>
            <Form.Control
              type="text"
              placeholder="Search here"
              className="me-2 custom-search-bar"
            />
            <Button variant="outline-dark" className="ms-2 custom-button">Search</Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};