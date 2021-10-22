import React from 'react';
import About from '../About/About';
import Carousels from '../Carousels/Carousels';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Carousels/> 
            <About/>
            <Services/>
            <Team/>
            <Contact/>
        </div>
    );
};

export default Home;