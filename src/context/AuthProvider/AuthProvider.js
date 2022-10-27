import React, { createContext, useEffect, useState } from 'react';
import app from './../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState("sifat");
    
    const [darkMode, setDarkMode] = useState({
        color: 'white',
        backgroundColor: 'black'
    });


    const loginProvider = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserprofile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
        });
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loginProvider,
        logOut,
        createUser, 
        updateUserprofile, 
        singIn,
        darkMode,
        verifyEmail
        
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