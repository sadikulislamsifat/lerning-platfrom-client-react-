import React, {useContext} from 'react';
import Banner from '../../images/bg-banner.jpg'
import './Home.css';
import { FaFacebook, FaGithub, FaGoogle,  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';
import Courses from './../Courses/Courses';
import Subjects from '../Courses/Subjects/Subjects';
import Blog from './../Blog/Blog';
import Login from './../Login/Login';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div style={{backgroundImage: `url(${Banner})` }} className='home '>
           {/* <img className='home-banner' src={banner} alt=""/> */}
           <div className='container mt-md-5'>
           <div className="content">
          <div className='title'>
          <h1 className='slide-left'>Web Design & <br/><span>Development</span> <br/>Course</h1>
            <p className="par slide-left">Explore our structured learning paths to discover everything you need to know about building for the modern web.</p>

                <button className="cn slide-left"><a href="#">JOIN US</a></button>
          </div>

               {
                user?.uid ? 
                <>
                 <div className="form home-form d-none ">
                    <h2>Login Here</h2>
                    <input type="email" name="email" placeholder="Enter Email Here" />
                    <input type="password" name="" placeholder="Enter Password Here" />
                    <button className="btnn"><a href="#">Login</a></button>

                    <p className="link">Don't have an account<br/>
                    <Link to='/singup'>Sign up </Link> here </p>
                    <p className="liw">Log in with</p>

                    <div class="d-flex justify-content-between px-5 fs-2 icons">
                        <Link to='/singup' className='me-3'><FaGoogle></FaGoogle> </Link>
                        <Link to='/singup' className='me-3'><FaGithub></FaGithub> </Link>
                        <Link to='/singup' className='me-3'><FaFacebook></FaFacebook> </Link>
                        
                    </div>

                </div></>
                :
                <div className="form home-form d-none d-md-block">
                <h2>Login Here</h2>
                <input type="email" name="email" placeholder="Enter Email Here" />
                <input type="password" name="" placeholder="Enter Password Here" />
                <button className="btnn"><a href="#">Login</a></button>

                <p className="link">Don't have an account<br/>
                <Link to='/singup'>Sign up </Link> here </p>
                <p className="liw">Log in with</p>

                <div class="d-flex justify-content-between px-5 fs-2 icons">
                    <Link to='/singup' className='me-3'><FaGoogle></FaGoogle> </Link>
                    <Link to='/singup' className='me-3'><FaGithub></FaGithub> </Link>
                    <Link to='/singup' className='me-3'><FaFacebook></FaFacebook> </Link>
                    
                </div>

            </div>
               }
                    </div>
           </div>
        </div>
        <div>
            <Courses></Courses>
            <Blog></Blog>
           {/* <Login></Login> */}

        </div>
        </div>
    );
};

export default Home;