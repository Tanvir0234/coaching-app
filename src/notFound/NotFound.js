import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="text-center not-found" >
            <h1 className="text-danger error">404</h1>
            <h2 className="text-danger my-auto">Page Not Found !!!</h2><br />
            <p className="fw-bold">You are in wrong path......</p>
        </div>
    );
};

export default NotFound;