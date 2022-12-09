import "../css/pages/Home.css"
import MenuTop from "../components/menu/MenuTop"
import BodyHome from "../components/home/BodyHome"
import Footer from "../components/footer/Footer"



/** function that create the complete home page */
function Home(){

    return(
        <div>
            <MenuTop/>
            <BodyHome/>
            <Footer/>
        </div>
    )
}

export default Home