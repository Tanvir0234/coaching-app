import React, { useContext } from 'react';
import { userContext } from '../App';
import Service from '../Components/services/Service';

const Services = () => {
    const {services}=useContext(userContext);
    return (
        <div>
            <div className="container ">
            <h1 className="text-center mt-3 bg-light mb-3">OUR <span className="service-title">SERVICES</span> </h1>
            <div className="row">
                  {
                      services.map(service =><Service
                      key={service.id}
                      service={service} 
                      >

                      </Service>)
                  }
            </div>
        </div>
        </div>
    );
};

export default Services;