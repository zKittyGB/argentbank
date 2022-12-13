import "../../css/signin/BodySignIn.css"
import { fetchOrUpdateUser } from '../../features/loginRedux'
import { useEffect, useState } from 'react'
import { useStore, useSelector } from 'react-redux'
import React from 'react';
import { Navigate } from "react-router-dom";


/** function that create the body signIn area */
function BodySignIn(){
    //get value from the inputs
    const [loggin, setLoggin] = useState('');
    const [password, setPassword] = useState('');
    /** function that put the input value in loggin and password state */
    function HandleClick(event){
        event.preventDefault()
        setLoggin(document.getElementById("loggin").value);
        setPassword(document.getElementById("password").value);
    }

   
    //Call the fetch protocol if store's / loggin's or password's value change
    const store = useStore();
    useEffect(() => {
        fetchOrUpdateUser(store, loggin,password)
    }, [store, loggin, password])
    //check if fetch status is resolved
    const requestStatus = useSelector((state)=> state).user.login
    console.log("p",requestStatus)

    if(requestStatus.status ==="resolved" || requestStatus.status ==="updating" ){
        console.log("pez")
        //check if authentification is ok
        if(requestStatus.data.status === 200){
            //redirect to the profil page      
            return <Navigate replace to="/user" />;
        }
    }
    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                    <form>
                    <div className="input-wrapper">
                        <label htmlFor="loggin">Username</label>
                        <input type="text" id="loggin" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" onClick={HandleClick} >Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default BodySignIn