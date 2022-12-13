import "../css/pages/User.css"
import MenuTop from "../components/menu/MenuTop"
import BodyUser from "../components/user/BodyUser"
import Footer from "../components/footer/Footer"
import { useStore } from 'react-redux'
import {user} from '../utils/selectors'


/** function that create the complete home page */
function User(){
    const store = useStore();
    console.log(user(store.getState()))

    return(
        <div>
            <MenuTop/>
            <BodyUser/>
            <Footer/>
        </div>
    )
}

export default User