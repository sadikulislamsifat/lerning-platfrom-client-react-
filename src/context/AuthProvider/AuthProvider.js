import React, { createContext, useEffect, useState } from 'react';
import app from './../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState("sifat");
    const [loading, setLoading] = useState(true);
    
    const [darkMode, setDarkMode] = useState({
        color: 'white',
        backgroundColor: 'black'
    });


    const loginProvider = (provider) => {
        setLoading(true);

        return signInWithPopup(auth, provider);
    }

    const verifyEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserprofile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified)
            {
                setUser(currentUser);
            }
        setLoading(false);

        });
        return () => {
            unsubscribe();
        }
    },[])
    console.log( "user" ,  user)
    const authInfo = {
        user,
        loginProvider,
        logOut,
        createUser, 
        updateUserprofile, 
        singIn,
        darkMode,
        verifyEmail,
        setLoading,
        loading

    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;