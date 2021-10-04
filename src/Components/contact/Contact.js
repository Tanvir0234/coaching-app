import React from 'react';
import contact from '../../images/contact.jpg'

const Contact = () => {
    return (
        <div>
            <div className="row">
                <div className="container col-md-6 text-center mt-5">
                    <img className="mx-auto" src={contact} alt="" />
                </div>
                <div className="col-md-6">
                    <h1 className="text-center">Contact Us</h1>
                    <form className="p-2">
                    <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInput" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="exampleInput" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="exampleInput" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Address</label>
                            <input type="text" className="form-control" id="exampleInput" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary mb-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;