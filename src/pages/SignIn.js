import "../css/pages/SignIn.css"
import MenuTop from "../components/menu/MenuTop"
import BodySignIn from "../components/signin/BodySignIn"
import Footer from "../components/footer/Footer"

/** function that create the complete home page */
export default function SignIn(){
    return(
        <div className="body-signIn">
            <MenuTop/>
            <BodySignIn/>
            <Footer/>
        </div>
    )
}