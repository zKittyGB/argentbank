import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import User from "./pages/User"
import {Routes, Route} from "react-router-dom"
import { useStore } from 'react-redux'
import Protected from "./utils/Protected";
import {login} from './utils/selectors'

function App() {
  // const store = useStore();
 
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/signin" element={<SignIn/>} />
        <Route path='/user'
          element={
            // <Protected isLoggedIn={login(store.getState()).connected} >
              <User/>
            // </Protected>
          }
        />      
      </Routes>
    </div>
  );
}

export default App;
