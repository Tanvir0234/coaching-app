import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLiraSign,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'





const Service = (props) => {
    const { name, duration, img, price } = props.service;
    const moneyIcon = <FontAwesomeIcon icon={faLiraSign} />
    const arrowIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />


    return (


        <div className="col-lg-6 mb-3 ">

            <div className="card h-100">

                <img src={img} className="img-fluid rounded-start" alt="..." />


                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> <span className="fw-bold"> Price :</span> {moneyIcon} {price}</p>
                    <p className="card-text"><span className="fw-bold"> Duration :</span> {duration}</p>
                    <button className="btn btn-dark text-white px-4">Enroll  {arrowIcon}</button>
                </div>
                

            </div>

        </div>


    );
};

export default Service;
