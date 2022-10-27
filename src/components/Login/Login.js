import React, {useContext, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaFacebook, FaGithub, FaGoogle,  } from "react-icons/fa";
import { AuthContext } from './../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {singIn, setLoading} = useContext(AuthContext);
    const [error , setError] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

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
            setError('')
            if(user.emailVerified){
                navigate(from, {replace: true})
            }else{
                toast.error('Your email is not verified. Please verify your email')
            }
        })
        .catch(e => {
        console.error(e)
        setError(e.message)
        })
        .finaly(() => {
            setLoading(false)
        })
    }

    return (
       <div style={{height: '90vh'}}>
         <div className='container d-flex justify-content-center '>
              <form  onSubmit={handleSubmit} className="form login-form">
                    <h2 className='mt-4'>Login Here</h2>
                    <input className='' type="email" name="email" placeholder="Enter Email Here" />
                    <input className='' type="password" name="password" placeholder="Enter Password Here" />
                    <p className='text-danger mt-1'>{error}</p>
                    <button className="btnn"><a href="#">Login</a></button>

                    <p className="link text-white">Don't have an account<br/>
                    <Link to='/singup'>Sign up </Link> here </p>
                    <p className="liw text-white">Log in with</p>

                   <div className="d-flex justify-content-between container px-5 icons">
                   <Link to='/singup' className='text-white fs-2'><FaGoogle></FaGoogle> </Link>
                   <Link to='/singup' className='text-white fs-2'><FaGithub></FaGithub> </Link>
                   <Link to='/singup' className='text-white fs-2'><FaFacebook></FaFacebook> </Link>
        
                 </div>
                </form>

               
        </div>
       </div>
    );
};

export default Login;