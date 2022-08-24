import '../components/NavBar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo3 from '../images/logo3.png';
import logo2 from '../images/logo2.png';
import Stack from 'react-bootstrap/Stack';
import React, { Component, useState, useEffect } from 'react'; 

export default class NavBar extends React.Component {
  
 render () {
    return (
      <div id="Navigator">
      <Navbar bg="light" expand="lg"> 
      <Container fluid>
        <Navbar.Brand id="Brand" href="#"> <img src={logo3} height="32px" width="37px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-lg-0"
            style={{ maxHeight: '250px' }}
            navbarScroll
            id="inside"
          > 
            
            <Stack id="inside" direction="horizontal" gap={5} >
            <Nav.Link id="uno" href="#action0"><img src={logo2} height='25px' width='100px'/></Nav.Link>
            <Nav.Link href="#action1">Tiendas</Nav.Link>
            <Nav.Link href="#action2">Servicios</Nav.Link>
            <Nav.Link href="#action3">Contacto</Nav.Link>
            <Nav.Link href="#action4">Políticas</Nav.Link>
            </Stack>
          </Nav>
          <Form className="d-flex">
            
          <Button id="Register" variant="dark">Registrarme</Button> 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
  }}
