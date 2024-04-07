import AuthProvider, { useAuth } from "./security/AuthContext";
import Login from "./Login";
import LogOut from "./LogOut";
import WelcomePage from "./WelcomePage";
import ErrorPage from "./ErrorComponent";
import ListTodos from "./ListTodos";
import Header from "./redundantParts/Header";
import Footer from "./redundantParts/Footer";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function AuthenticatedRoutes({children}){
    const authContext = useAuth();
    if(authContext.isAuthenticated)
    return children
    else
    return(
   <Navigate to="/" />
        )
}
export default function TodoApp(){
    return(
        <div className="TodoApp">
        <AuthProvider>
        <BrowserRouter>
        <Header />
        <Routes>
                 <Route path='/' element={<Login />}></Route>
                 </Routes>
                 <AuthenticatedRoutes>
                 <Routes>
                 <Route path='/welcome/:username' element={<WelcomePage />}></Route>
                 <Route path='/list' element={<ListTodos />}></Route>
                 <Route path='/loggedout' element={<LogOut />}></Route>
                 <Route path='*' element={<ErrorPage />}></Route>
                 </Routes>
                 </AuthenticatedRoutes>
            <Footer />
        </BrowserRouter>
        </AuthProvider>
        
        </div>
         );
}