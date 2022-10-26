import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/no-found.webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div style={{minHeight: '100vh'}}  className='not-found-container'>
            <div className='noFoundBody'>
            <img src={banner}/>
            <div className='descripton'>
                <p>We're sorry, the page you requested could not be found Please go back to the homepage</p>
                <Link to='/home'><button className='goHomeBtn'>Go Home</button></Link>
            </div>
            </div>
        </div>
    );
};

export default NotFound;