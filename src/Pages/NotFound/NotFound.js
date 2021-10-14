import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../images/404.svg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="notFound-image" src={notFoundImage} alt="" />
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default NotFound;