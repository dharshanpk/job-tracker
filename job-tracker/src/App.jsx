import { Routes, Route } from "react-router-dom"; 
import Login from "./pages/Login"; 
import Dashboard from "./pages/Dashboard"; 
import Applications from "./pages/Applications"
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";


import Addapplication from "./pages/Add-applications";
import Navbar from "./components/Navbar";
 
function App() { 
  return ( 
    <>
    <Navbar/>
    <Routes> 
       
      <Route path="/login" element={<Login />} /> 
 
      {/* Protected Routes */} 
      <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application" element={<Applications />} />
          <Route path="/add-applications" element={<Addapplication />} />
        </Route>
      
          {/* Default */} 
      
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<h2>Not Found</h2>} /> 
 
    </Routes> 
    </>
  ); 
}
export default App;