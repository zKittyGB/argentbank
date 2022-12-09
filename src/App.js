import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/signin" element={<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
