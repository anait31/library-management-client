import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
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
            if(currentUser?.email) {
                const user = {email: currentUser.email};
                axios.post('https://b10a11-server-side-anait31.vercel.app/jwt', user, {withCredentials: true})
                .then(data => {
                    setIsLoading(false)
                })
            }
            else {
                axios.get('https://b10a11-server-side-anait31.vercel.app/logout', {withCredentials: true})
                .then(data => {
                    setIsLoading(false)
                })
            }
            
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