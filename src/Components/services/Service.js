import React from 'react';
import './Service.css';


const Service = (props) => {
    const { name, duration, img, price } = props.service;



    return (


        <div className="col-lg-6 mb-3 ">

            <div className="card h-100">

                <img src={img} className="img-fluid rounded-start" alt="..." />


                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price : {price}</p>
                    <p className="card-text">Duration : {duration}</p>
                </div>

            </div>

        </div>


    );
};

export default Service;
