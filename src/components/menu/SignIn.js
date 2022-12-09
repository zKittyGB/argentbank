import "../../css/menu/SignIn.css"
import {Link} from 'react-router-dom'

/** function that create the logo area */
function SignIn() {
    return(
        <nav>
            <Link to='/signin'>
                <div className="menu-top-signIn">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </div>
            </Link>
        </nav>
    )
}

export default SignIn