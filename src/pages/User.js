import "../css/pages/User.css"
import MenuTop from "../components/menu/MenuTop"
import BodyUser from "../components/user/BodyUser"
import Footer from "../components/footer/Footer"

/** function that create the complete home page */
export default function User(){
    return(
        <div className="body-user">
            <MenuTop/>
            <BodyUser/>
            <Footer/>
        </div>
    )
}