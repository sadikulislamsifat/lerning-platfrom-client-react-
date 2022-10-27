import React, { useState , useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Subjects from './Subjects/Subjects';

const Courses = () => {
    // const [subjects, setSubjects] = useState([]);

    const allSubjects = useLoaderData();
    console.log(allSubjects);
    const {darkMode} = useContext(AuthContext);

    return (
        <div style={darkMode} className=''>

           <div style={{height: '35vh', width: '100%'}} className= " d-flex   justify-content-center align-items-center {darkMode.backgroudColor === 'black' ? 'bg-light' : 'bg-dark'}">
           <div >
                <div className='text-center w-100 container'>
                    <p className='fs-1'>Learn</p>
                    <p className='fs-5'>Explore our structured learning paths to discover everything you need to know about building for the modern web.</p>
                </div>
            </div>
           </div>

         <div className='container mt-5'>
            <h3>Our Courses</h3>
         <div  className=' row row-cols-1 mt-1 row-cols-md-3  g-4'>
          {
            allSubjects.map(subject => <Subjects
            key={subject.id}
            subject={subject}
            ></Subjects>)
          }
          </div>
         </div>
        </div>
    );
};

export default Courses;