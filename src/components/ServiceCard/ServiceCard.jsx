import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = (props) => {
    const {_id,name,description,img}=props.service;
    return (
        <div className="col-md-4 mt-3">
            <div className="service-card-d">
            {/* <Card.Img src={img} className="img-fluid service-img"/> */}
           <div className="service-img">
           <img src={img} className="img-fluid" alt="" />
           </div>
            <Card.Body>
                <Card.Title className="ser-h1">{name}</Card.Title>
                <div className="services-Card-Hover">
                <Card.Text>
                {description}
                </Card.Text>
             <Link
                exact to={`/servicedetails/${_id}`}>
                <Button className="btn btn-success">Read More</Button>
                    </Link>
                </div>
            </Card.Body>
            </div>
        </div>
    );
};

export default ServiceCard;