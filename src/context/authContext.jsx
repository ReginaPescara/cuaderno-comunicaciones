import React, {useState, useEffect} from "react";
import { auth } from "../firebase";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider, onAuthStateChanged} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context){
        console.log("error creating auth context");
    }
    return context
}

export function AuthProvider ({children}){
    const [user, setUser] = useState("")
    useEffect(()=>{
        const suscribed = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log("No hay usuario logeado")
                setUser("")
            } else {
                setUser(currentUser)
            }
        })
        return () => suscribed()
    },[])
    
    const register = async (email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)
    }
    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response)
    }
    const LoginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    }
    const logout = async() => {
        const response = await signOut(auth)
        console.log(response)
    } 
    const LoginWithGithub = async () => {
        const githubProvider = new GithubAuthProvider()
         return await signInWithPopup(auth, githubProvider)
    }
    
    return (
    <authContext.Provider value={{
        register,
        login,
        LoginWithGoogle,
        LoginWithGithub,
        logout,
        user
    }}>{children}</authContext.Provider>);
}