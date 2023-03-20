import React, { useState } from 'react';
import logo from "./localisation.png"
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active style={{fontSize:"25px", marginRight:"20px"}}>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{fontSize:"25px", marginRight:"20px"}}>
                <MDBNavbarLink href='#'>Change history</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{fontSize:"25px", marginRight:"20px"}}>
                <MDBNavbarLink href='#'>Import JSON File</MDBNavbarLink>
              </MDBNavbarItem>
              <Link to="/">
              <MDBNavbarItem style={{fontSize:"25px", marginRight:"20px"}}>
                <MDBNavbarLink href='#'>Logout</MDBNavbarLink> 
              </MDBNavbarItem>
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://s3.envato.com/files/151a5652-d0e6-43de-9696-7ea1864139e0/inline_image_preview.jpg')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Localisation Central!</h1>
                <img src={logo} width="500rem" height="300rem"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}