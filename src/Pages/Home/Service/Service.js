import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // const {service} =props;

    const { name, price, discription, img } = service;

    return (
        <div>
            <div className="service" >
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <p>Discription: {discription}</p>
                <h3>Price:  {price}</h3>
            </div>
        </div>
    );
};

export default Service;