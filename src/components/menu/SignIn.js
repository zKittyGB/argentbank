import "../../css/menu/SignIn.css"
import {Link} from 'react-router-dom'
import { useSelector, useStore, useDispatch } from 'react-redux'
import React from 'react';
// import { logout } from "../logout";
import * as profilFetch from '../../features/loginSlice'

/** function that create the logo area */
function SignIn() {
    const store = useStore();
    const dispatch = useDispatch();
    const token = useSelector((state)=> state.login.token)
    const name = useSelector((state)=> state.profil.user.firstName)

    function logout(){
        dispatch(profilFetch.logout())
    }
    
    return(
        <nav>
            {token != null
            ? <div className="menu-top-signIn">
                <Link to='/user'> 
                    <div className="menu-top-signin-profil">
                        <i className="fa fa-user-circle"></i>        
                        <p className="menu-top-name">{name}</p>
                    </div>
                </Link>
                <Link to ='/'>
                    <div className="menu-top-signin-logout" onClick={logout}>
                        <i className="fa fa-sign-out"></i>
                        <p>Sign Out</p>
                    </div>
                </Link>
            </div>  
            : <Link to='/signin'>
                <div className="menu-top-signIn">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </div>
            </Link>
            }
        </nav>
    )
}

export default SignIn