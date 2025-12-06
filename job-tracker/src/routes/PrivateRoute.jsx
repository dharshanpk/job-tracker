import { useContext } from "react"; 
import AuthContext from "../context/AuthContext"; 
import { Navigate, Outlet, useLocation } from "react-router-dom"; 
function PrivateRoute() { 
const { user } = useContext(AuthContext); 
const location = useLocation(); 
if (!user) { 
return <Navigate to="/login" replace state={{ from: location }} />; 
} 
return <Outlet />; 
} 
export default PrivateRoute;