import "../../css/menu/Logo.css"
import logo from "../../assets/argentBankLogo.png"
import {Link} from 'react-router-dom'

/** function that create the logo area */
function Logo() {
    return(
        <div className="menu-top-logoArea">
            <nav>
                <Link to='/'><img src={logo} alt ="ArgentBank" className='menu-top-logoArea-logo'/></Link>
            </nav>
            <h1 className="sr-only">Argent Bank</h1>
        </div>
    )
}

export default Logo