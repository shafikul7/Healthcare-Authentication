import React, { useEffect,useState } from 'react';
import './ServiceDetails.css';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams(); 
    const [service , setService] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(service => setService(service))
    },[])

    const ExactIteam = service.filter(td => td._id === serviceId);
    return (
        <div className="serviceDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto serviceDetails-api">
                    <h1 className="head-color">Name:{ExactIteam[0]?.name}</h1>
                    <div className="serviceDetails-Img">
                    <img src={ExactIteam[0]?.img} alt="" className="img-fluid" />
                    </div>
                    <h3>description : {ExactIteam[0]?.description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;