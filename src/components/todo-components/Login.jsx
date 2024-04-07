import { useState } from "react";
import './css/Login.css';
import { useNavigate } from "react-router-dom";
import { useAuth} from "./security/AuthContext";

export default function Login(){
    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('password');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const authContext = useAuth();
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();



    function handleUsernameChange(event){
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(authContext.LoginingIn(username,password)){
            console.log('success');
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        }else{
            console.log('failed')
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    if(showErrorMessage){
        var message = (
            <div>
              <h2>Authenticated Failed. Please check your Credentials</h2>
            </div>
        )
    }else if(showSuccessMessage){
       var message = (
            <div>
              <h2>Authenticated Successfully</h2>
            </div>
        )
    }
 return(
<div className="Login">
{message}
 <div className="LoginForm">
     <div>
        <label>User Name</label>
        <input typr="text" name="username" value={username} onChange={handleUsernameChange}/>
     </div>
     <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
     </div>
     <div>
        <button type="submit" onClick={handleSubmit}>Login</button>
     </div>
 </div>
</div>
 );
};