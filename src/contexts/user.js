import React, {createContext,useState,useEffect} from 'react';

import '../services/firebase';

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as signOutFirebase,
    onAuthStateChanged
} from 'firebase/auth';
import { async } from '@firebase/util';

const auth = getAuth();

const UsuarioContext = createContext ({});

const UsuarioProvider = ({children}) =>{

    const [user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        return onAuthStateChanged(auth,async(userState)=>{
            setUser(userState);
            setLoading(false);
        })
    },[])

    async function signIn(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then(resp => {
                console.log(resp);
            }).catch(err => {
                console.log(err);
            });
    }

    async function signOut() {
        signOutFirebase(auth)
            .then(resp => {
                console.log('Usuário Deslogado');
            }).catch(err => {
                console.log(err);
            });
    }

    async function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(resp => {
                console.log('cadastro concluído');
            }).catch(err => {
                console.log(err);
            });
    }
    
    return (
        <UsuarioContext.Provider value={{user,loading, signIn, signOut, signUp}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext,UsuarioProvider}
    