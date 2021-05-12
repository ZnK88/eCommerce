import React from 'react';

import Container from 'react-bootstrap/Container'

import NavBar from '../../components/HomePage/NavBar/NavBar';
import HomeSlider from '../../components/HomePage/HomeSlider/HomeSlider';
import HomeDisplayer from '../../components/HomePage/HomeDisplayer/HomeDisplayer';

import './HomePage.css';

function HomePage()
{
    return(
        <>
        <NavBar />
        <Container className="homepage-main">
            
            {/* <HomeSlider /> */}
            <HomeDisplayer />
        
        </Container>
        </>
    );
    
}

export default HomePage;