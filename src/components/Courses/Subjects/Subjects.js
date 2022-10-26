import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Subjects.css'

const Subjects = ({subject}) => {
    const {achivment, banner, description, subject_name} = subject;
    return (
        <div>
            <div style={{height: '310px'}} className="col subjects-card mb-3">
    <div className="card h-100 p-2">
        <div className='d-flex justify-content-between'>
            <p>Course</p>
            <p className='bg-primary py-1 text-white px-3 rounded-pill'> {achivment}<FaGraduationCap className='ms-1 mb-1'></FaGraduationCap> </p>
        </div>
      <img style={{height: '170px'}} src={banner} class="card-img-top" alt="..."/>
      <div className="card-body p-0">
        
        <p className="card-text">{description.length > 200 ?
        <p>{description.slice(0, 80) + '...'} <Link>Explore more</Link> </p>
        :
        <p>{description}</p>
    }</p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Subjects;