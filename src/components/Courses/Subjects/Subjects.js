import React, {useContext} from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Subjects.css'
import { AuthContext } from './../../../context/AuthProvider/AuthProvider';

const Subjects = ({subject}) => {
    const {achivment, banner, description, subject_name, id} = subject;
    const {myStyle} = useContext(AuthContext);
    return (
        <div style={myStyle}>
            <div style={myStyle} className="col subjects-card mb-3">
    <div style={myStyle} className="card h-100 p-2">
        <div className='d-flex justify-content-between'>
            <p>Course</p>
            <p className='bg-primary py-1 text-white px-3 rounded-pill'> {achivment}<FaGraduationCap className='ms-1 mb-1'></FaGraduationCap> </p>
        </div>
      <img className='w-100' style={{height: '170px'}} src={banner} class="card-img-top" alt="..."/>
      <div className="card-body p-0">
        
        <p style={myStyle} className="card-text">{description.length > 80 ?
        <p>{description.slice(0, 80) + '...'} <Link to={`/subjects/${id}`}>Explore more</Link> </p>
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