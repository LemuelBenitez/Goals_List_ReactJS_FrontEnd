import { createContext, useContext, useState } from "react";



export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext) ; // hook created so that if any other class wants to use AuthContext

export default function AuthProvider({children}){
    const[number, setNumber] = useState(0);
    const[isAuthenticated, setAuth] = useState(false);
    
    function LoginingIn(username, password){
        if(username === 'user' && password === 'password'){
            setAuth(true);
            return true;
        }else{
            setAuth(false);
            return false;
        }
    }
    
    function LogingOut(){
      setAuth(false);
    }
    
    return(
<AuthContext.Provider value={{number , isAuthenticated, setAuth, LoginingIn, LogingOut}}>
    {children}
</AuthContext.Provider>
    );
}
