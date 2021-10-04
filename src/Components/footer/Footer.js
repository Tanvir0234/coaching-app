import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'




const Footer = () => {

    
    const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
    return (
        <div className="bg-dark text-white">
            <div className="row">
                
                <div className="col-md-12 text-center">
                <div className="map d-flex align-items-center justify-content-center mt-3">
                  <div className="foter-phone-icon m-2 ">
                    {mapIcon}
                  </div>
                  <div>
                    <p>
                      107, Agrabad
                      <br /> CDA Avenue, Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
                </div>
            </div>
        <p className="text-center p-3">&copy;All copyrights reserved.</p>
        </div>
    );
};

export default Footer;