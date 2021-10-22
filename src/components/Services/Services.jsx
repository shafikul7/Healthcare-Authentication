import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services,setService] = useState([]);
    
    useEffect(() =>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);
    return (
        <div className="container mb-5">
           <h1 className="head-color">Services us</h1>
           <div className="row">
           {
               services.map(service=> <ServiceCard 
                key={service._id}
                service={service}
                ></ServiceCard>)
           }
           </div>
        </div>
    );
};

export default Services;