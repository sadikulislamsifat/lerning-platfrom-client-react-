import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Subjects from './Subjects/Subjects';

const Courses = () => {
    // const [subjects, setSubjects] = useState([]);

    const allSubjects = useLoaderData();
    console.log(allSubjects);

    return (
        <div style={{minHeight: '100vh'}}>
          {
            allSubjects.map(subject => <Subjects
            key={subject.id}
            subject={subject}
            ></Subjects>)
          }
        </div>
    );
};

export default Courses;