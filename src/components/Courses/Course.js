import React, {useContext} from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';

const Course = () => {

    const course = useLoaderData();
    const {achivment, banner, description, subject_name, id} = course; 
    const {myStyle} = useContext(AuthContext);
    return (
       <div style={myStyle}>
         <div style={{minHeight: '100vh'}} className='container py-5'>
         <Card style={myStyle} >
          <Card.Img variant="top" src={banner} />
            <Card.Body>
              <Card.Title> Wellcome to {subject_name}</Card.Title>
                 <Card.Text>
                  {description}
                   </Card.Text>
                 </Card.Body>
              </Card>
        </div>
       </div>
    );
};

export default Course;