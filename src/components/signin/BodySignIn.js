import "../../css/signin/BodySignIn.css"
import { fetchOrUpdateUser } from '../../features/userRedux'
import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { useState } from 'react';

    // const store = useStore();
    // useEffect(() => {
    //     fetchOrUpdateUser(store)
    //   }, [store])






/** function that create the body signIn area */
function BodySignIn(){
    //get value from the inputs
    const [loggin, setLoggin] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = (event) => {
        if(event.target.id ==="loggin"){
            setLoggin(event.target.value);
        }
        if(event.target.id ==="password"){
            setPassword(event.target.value);
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
                        <input type="text" id="loggin" onChange={handleChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={handleChange} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" >Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default BodySignIn