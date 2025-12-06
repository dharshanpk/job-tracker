import { createContext,useState } from "react";
const AuthContext=createContext();
export function AuthProvider({children}){

    const[user,setUser]=useState(null);
    const login=(email,password) => {
        setUser({
            email,
            role:email==="hrmanager@gmail.com"?"manager":"user"
        })
    };
    const logout=() => setUser(null);
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )


}

export default AuthContext;