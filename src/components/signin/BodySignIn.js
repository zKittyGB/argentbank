import "../../css/signin/BodySignIn.css"
import { fetchLogin } from '../services/loginFetch'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import { Navigate } from "react-router-dom";
/** function that create the body signIn area */
export default function BodySignIn(){
    //get value from the inputs
    const [loggin, setLoggin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const requestStatus = useSelector((state)=> state.login.fetch)
    const token = useSelector((state)=> state.login.token)
    /** function that put the input value in loggin and password state */
    function HandleClick(event){
        event.preventDefault()
        dispatch(fetchLogin(loggin,password))    
    }
    //check if fetch status is resolved
    if(requestStatus.status ==="resolved" || requestStatus.status ==="updating" ){
        //check if authentification is ok
        if(requestStatus.data.status === 200 && token != null){
            //redirect to the profil page      
            return <Navigate replace to="/profil" />;
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
                        {/* loggin input */}
                        <input type="text" id="loggin" onKeyUp={(event) =>{setLoggin(document.getElementById("loggin").value); setPassword(document.getElementById("password").value)}}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        {/* password input */}
                        <input type="password" id="password" onKeyUp={(event)=>{setLoggin(document.getElementById("loggin").value); setPassword(document.getElementById("password").value)}}/>
                    </div>
                    <div className="input-remember">
                        {/* remember me input */}
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* signin button */}
                    <button className="sign-in-button" onClick={HandleClick} >Sign In</button>
                </form>
            </section>
        </main>
    )
}