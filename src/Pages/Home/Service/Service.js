import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // const {service} =props;

    const { id, name, price, discription, img } = service;

    return (
        <div>
            <div className="service" >
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <p>Discription: {discription}</p>
                <h3 className="text-primary">Price:  {price}</h3>

                <Link to={`/booking/${id}`} >
                    <button className="btn btn-danger my-4 p-2">Booking Now</button>
                </Link>

            </div>
        </div>
    );
};

export default Service;