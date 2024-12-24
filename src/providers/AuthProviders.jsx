import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import { use } from "react";

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log(user)
    
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignInWithPopup = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const handleSignOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])

    const authInf = {
        user,
        isLoading,
        handleGoogleSignInWithPopup,
        handleSignOut
    }

    return (
        <AuthContext.Provider value={authInf}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;