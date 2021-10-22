import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousels.css';

const Carousels = () => {
    return (
        <div className="carousels-part">
            <Carousel>
        <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/WcNfgbb/slider1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <div class="col-lg-12 col-md-12 col-sm-12">
								<h1 class="hs_slider_title">Meet Our Doctor’s Team</h1>
								<p class="lead animated pulse">Suspendisse eu sem tortor Etiam rhoncus viverra mi ac tempor turpis rutrum in.<br/> Vivamus porttitor rhoncus tellus, id ultricies eros gravida ut.</p>
								<button className="btn btn-success">Know More</button>
							</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100 img-fluid"
                src="https://i.ibb.co/Vqb2Jwf/slider2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <div class="col-lg-12 col-md-12 col-sm-12">
								<h1 class="hs_slider_title">Book your Appointment</h1>
								<p class="lead animated pulse">Suspendisse eu sem tortor Etiam rhoncus viverra mi ac tempor turpis rutrum in.<br/> Vivamus porttitor rhoncus tellus, id ultricies eros gravida ut.</p>
								<button className="btn btn-success">Know More</button>
							</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/7QCdnT9/slider3.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <div class="col-lg-12 col-md-12 col-sm-12">
								<h1 class="hs_slider_title">Book your Appointment</h1>
								<p class="lead animated pulse">Suspendisse eu sem tortor Etiam rhoncus viverra mi ac tempor turpis rutrum in.<br/> Vivamus porttitor rhoncus tellus, id ultricies eros gravida ut.</p>
								<button className="btn btn-success">Know More</button>
							</div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Carousels;