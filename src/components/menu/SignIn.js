import "../../css/menu/SignIn.css"
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react';
import * as profilFetch from '../../features/loginSlice'

/** function that create the logo area */
export default function SignIn() {
    const dispatch = useDispatch();
    const token = useSelector((state)=> state.login.token)
    const name = useSelector((state)=> state.profil.user.firstName)
    /** function that logout the user */
    function logout(){
        dispatch(profilFetch.logout())
    }    
    return(
        <nav>
            {token != null
            ? <div className="menu-top-signIn">
                {/* profil are */}
                <Link to='/profil'> 
                    <div className="menu-top-signin-profil">
                        <i className="fa fa-user-circle"></i>        
                        <p className="menu-top-name">{name}</p>
                    </div>
                </Link>
                {/* sign in area */}
                <Link to ='/'>
                    <div className="menu-top-signin-logout" onClick={logout}>
                        <i className="fa fa-sign-out"></i>
                        <p>Sign Out</p>
                    </div>
                </Link>
            </div>  
            :<Link to='/signin'>{/* sign in area */}
                <div className="menu-top-signIn">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </div>
            </Link>
            }
        </nav>
    )
}