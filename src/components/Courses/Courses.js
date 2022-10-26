import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Subjects from './Subjects/Subjects';

const Courses = () => {
    // const [subjects, setSubjects] = useState([]);

    const allSubjects = useLoaderData();
    console.log(allSubjects);

    return (
        <div style={{minHeight: '100vh'}} className=''>

            <div style={{height: '35vh', width: '100%'}} className='bg-light d-flex  justify-content-center align-items-center'>
                <div className='text-center w-100 container'>
                    <p className='fs-1'>Learn</p>
                    <p className='fs-5'>Explore our structured learning paths to discover everything you need to know about building for the modern web.</p>
                </div>
            </div>

         <div className='container'>
         <div className=' row row-cols-1  row-cols-md-3 mt-5 g-4'>
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