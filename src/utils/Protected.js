import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
    console.log("tagade",isLoggedIn)
 if (!isLoggedIn) {
  return <Navigate to="/" replace />;
 }
 return children;
};
export default Protected;