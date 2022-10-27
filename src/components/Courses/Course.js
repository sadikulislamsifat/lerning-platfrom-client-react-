import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {

    const course = useLoaderData();
    const {achivment, banner, description, subject_name, id} = course; 
    return (
        <div className='container my-5'>
         <Card >
          <Card.Img variant="top" src={banner} />
            <Card.Body>
              <Card.Title> Wellcome to {subject_name}</Card.Title>
                 <Card.Text>
                  {description}
                   </Card.Text>
                 </Card.Body>
              </Card>
        </div>
    );
};

export default Course;