import React, { useContext } from 'react';
import './Home.css'
import { userContext } from '../../App';
import banner from '../../Banner/education_illust_hero.jpg'
import Service from '../services/Service';

const Home = () => {
    const {services}=useContext(userContext);
    return (
        <div>
            <div className="row">
            <div className="col-md-6  my-auto text-center">
                <p>Better Education</p>
                <h1>For a Better World</h1>
                <p></p>
                <button className="btn btn-primary">Check Our Class</button>
            </div>
            <div className="col-md-6 my-2">
                <img src={banner} alt="" />
            </div>
        </div>
        <div className="container mt-2">
            <h1 className="text-center mt-3 mb-3">OUR <span className="title">SERVICES</span></h1>
            <div className="row">
                  {
                      services.map(service =><Service
                      key={service.id}
                      service={service} 
                      >

                      </Service>).slice(0,4)
                  }
            </div>
        </div>
            
        </div>
    );
};

export default Home;