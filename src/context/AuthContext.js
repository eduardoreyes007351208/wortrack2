import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import {auth} from '../firebase'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const verify = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
   
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    return (
        <UserContext.Provider value={{createUser, user, logout, signIn, resetPassword, verify, googleSignIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}