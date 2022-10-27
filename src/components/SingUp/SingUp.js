import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle,  } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const SingUp = () => {

    const {createUser, updateUserprofile, verifyEmail} = useContext(AuthContext);

    const [error, setError] = useState('');

    const {loginProvider} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSingin = () => {
        loginProvider(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    const handleFacebookSingin = () => {
        loginProvider(facebookProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(e => console.error(e))
    }
    const handleGitHubSingin = () => {
        loginProvider(gitHubProvider)
        .then(result => {
            const user = result.user;
        })
        .catch(e => console.error(e))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, name, photoURL, password)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError('')
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
            toast.success("Please verify your email address")
        })
        .catch(error => {
            console.error(error);
            setError(error.message)
        })

        
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name, 
            photoURL: photoURL
        }
        updateUserprofile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }
    const handleEmailVerification = () => {
        verifyEmail()
        .then(() =>{})
        .catch(e => console.error(e))
    }

    return (
       <div style={{minHeight: '100vh'}} className='mb-5'>
         <div  className='container d-flex justify-content-center '>
            <form onSubmit={handleSubmit} className="form login-form">
                    <h2>Sing Up Here</h2>
                    <input type="text" name="name" placeholder="Enter name Here" />
                    <input type="text" name="photo" placeholder="Enter PhotoURL Here" />
                    <input type="email" name="email" placeholder="Enter Email Here" required />
                    <input type="password" name="password" placeholder="Enter Password Here" required/>
                    <p className='text-danger mt-1'>{error}</p>
                    <button type='submit' className="btnn"><a href="#">Sing Up</a></button>

                    <p className="link text-white">Already have an account?<br/>
                    <Link to='/login'>Sign in </Link> here </p>
                    <p className="liw text-white">Log in with</p>

                    <div className="d-flex justify-content-between px-5 fs-2 icons">
                        <a onClick={handleGoogleSingin} className='me-3'><FaGoogle></FaGoogle> </a>
                        <a onClick={handleGitHubSingin} className='me-3'><FaGithub></FaGithub> </a>
                        <a onClick={handleFacebookSingin} className='me-3'><FaFacebook></FaFacebook> </a>
                        
                    </div>

                </form>
        </div>
       </div>
    );
};

export default SingUp;