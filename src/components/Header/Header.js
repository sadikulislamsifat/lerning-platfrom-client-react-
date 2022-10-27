import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUser, FaUserPlus, FaWindowClose } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';
import './Header.css';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
  const [darkBtn , setDarkBtn] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {user, logOut} = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

    return (
        <div  className='header'>
             <Navbar bg="transparent" expand="lg">
      <Container >
        <Link to='/'  className='text-decoration-none fs-3 text-white fw-bold'>E-School</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto  my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/home' className='fw-semibold nav-link     ms-2' href="#action1">Home</Link>
            <Link to='/courses' className='fw-semibold nav-link  ms-2' href="#action2">Couses</Link>
            <Link to='/blog' className='fw-semibold nav-link     ms-2' href="/">Blog</Link>  

            {
              user?.uid ?
              <Link  onClick={handleLogOut} className='fw-semibold nav-link me-4' href="#">Sing Out</Link>
              :
              <Link to='/singup'  className='fw-semibold nav-link me-4' href="#">Login</Link>

            }
           
              
            
          </Nav>
          <div className='mt-2 pb-3'>
            <span className='fs-3 me-3 ms-2 ' type=""> <HiSun className='text-warning'></HiSun> </span>
          </div>
          <div onClick={handleShow}>
            {
             user?.photoURL ? 
             <Image roundedCircle style={{height: '40px', width: '40px'}}
              
             src={user?.photoURL}></Image>
             :
             <FaUser></FaUser>
            }
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal
        className='mt-5 '
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        onClick={handleClose}
      >
         <Modal.Footer className=''>
          <Button variant="" onClick={handleClose}>
            <FaWindowClose className='fs-2'></FaWindowClose>
          </Button>
          
        </Modal.Footer>
        <Modal.Header className='d-flex justify-content-center mt- border-0'>
        <div className='text-center'>
        {
             user?.photoURL ? 
             <Image style={{height: '80px', width: '80px'}}
             roundedCircle 
             src={user?.photoURL}></Image>
             :
             <FaUser className='fs-1 border border-1 p-1 rounded-circle'></FaUser>
            }
          <h5 className='mb-1 mt-3'>{user?.uid ? user?.displayName : "User Name: N/A"}</h5>
          <p className=''>{user?.uid ? user?.email : "User Email: N/A"}</p>
          <button type="" className='btn btn-outline-secondary  rounded-pill'>Manage Your Account</button>
         
        </div>
        </Modal.Header>
        <div>
        <div className='p-2 mt- border text-center border-secondary border-start-0 border-end-0' onClick={handleClose}>
            <Link className='text-decoration-none text-secondary' to='/register'><FaUserPlus className='me-2 mb-1 '></FaUserPlus> Add Another Account</Link>
          </div>
          <div onClick={handleClose} className='mt-4 text-center'>
            {
              user?.uid ?
              <button onClick={handleLogOut} className='btn btn-outline-secondary'  >Sing Out</button>
              :
              <Link to='/login'  className='btn btn-outline-secondary'  >Login</Link>

            }
          </div>
        </div>
       <div className='text-center mb-2 mt-3 border border-secondary border-end-0 border-start-0 p-2 border-bottom-0'>
        <Link className='text-decoration-none text-secondary' to='/terms' >Privacy Policy • Terms of Service </Link>
       </div>
      </Modal>
        </div>
    );
};

export default Header;