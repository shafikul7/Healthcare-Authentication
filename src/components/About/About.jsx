import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className="about-part">
        <h1 className="head-color">About Us</h1>
        <div className="container">
        <div className="row">
           <div className="col-md-7">
                <div className="">
                <img className="img-fluid" src={`http://kamleshyadav.com/healthcare/images/about/about1.jpg`} alt=""/>
                </div>
           </div>
           <div className="col-md-5">
            <div className="">
                <p className="about-p">Praesent massa orci, condimen vitae mattis quis, imperdiet non massa.</p>
                <p className="about-d">Both long- and short-term exposure to UV radiation can harm the eyes, affect vision to compromise overall eye health. or ut labore areas disease eyecare dolore aliqua.Ut enim ad et minim veniam, and quis nostrud exercitation produr enim...</p>
                <button className="btn btn-success">Read More</button>
            </div>
           </div>
        </div>
        </div>
        </div>
    );
};

export default About;