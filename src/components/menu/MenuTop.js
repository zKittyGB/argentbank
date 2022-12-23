import "../../css/menu/MenuTop.css"
import Logo from "./Logo"
import SignIn from "./SignIn"
/** function that create the top menu area */
export default function MenuTop(){
    return(
        <nav className="menuTop">
            <Logo/>
            <SignIn/>
        </nav>
    )
}

