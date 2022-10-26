import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaFacebook, FaGithub, FaGoogle,  } from "react-icons/fa";
import { AuthContext } from './../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {singIn} = useContext(AuthContext);
    const [error , setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(e => {
        console.error(e)
        setError(e.message)
        })
    }

    return (
       <div style={{height: '90vh'}}>
         <div className='container d-flex justify-content-center '>
              <form  onSubmit={handleSubmit} className="form login-form">
                    <h2>Login Here</h2>
                    <input type="email" name="email" placeholder="Enter Email Here" />
                    <input type="password" name="password" placeholder="Enter Password Here" />
                    <p className='text-danger mt-1'>{error}</p>
                    <button className="btnn"><a href="#">Login</a></button>

                    <p className="link text-white">Don't have an account<br/>
                    <Link to='/singup'>Sign up </Link> here </p>
                    <p className="liw text-white">Log in with</p>

                   <div className="d-flex justify-content-between container px-5 icons">
                   <a  className='text-white fs-2'><FaGoogle></FaGoogle> </a>
                   <a  className='text-white fs-2'><FaGithub></FaGithub> </a>
                   <a  className='text-white fs-2'><FaFacebook></FaFacebook> </a>
        
                 </div>
                </form>

               
        </div>
       </div>
    );
};

export default Login;