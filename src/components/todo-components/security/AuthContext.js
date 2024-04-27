import { createContext, useContext, useState } from "react";



export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext) ; // hook created so that if any other class wants to use AuthContext

export default function AuthProvider({children}){
    const[number, setNumber] = useState(0);
    const[isAuthenticated, setAuth] = useState(false);
    const[username, setUsername] = useState(null);

    function LoginingIn(username, password){
        if(username === 'lemuel' && password === 'password'){
            setAuth(true);
            setUsername(username)
            return true;
        }else{
            setAuth(false);
            setUsername(null)
            return false;
        }
    }
    
    function LogingOut(){
      setAuth(false);
    }
    
    return(
<AuthContext.Provider value={{number , isAuthenticated, setAuth, LoginingIn, LogingOut, username}}>
    {children}
</AuthContext.Provider>
    );
}
