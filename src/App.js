import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import User from "./pages/User"
import {Routes, Route} from "react-router-dom"
/** function that create the app tree structure */
function App() { 
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/signin" element={<SignIn/>} />
        <Route path='/profil' element={<User/>} />      
        <Route path="/*" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
