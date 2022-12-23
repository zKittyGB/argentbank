import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import User from "./pages/User"
import {Routes, Route} from "react-router-dom"

function App() {
   
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/signin" element={<SignIn/>} />
        <Route path='/profil' element={<User/>} />      
      </Routes>
    </div>
  );
}

export default App;
