import { Link, useParams } from "react-router-dom";

export default function WelcomePage(){
    const  {username} = useParams();

 return(
 <div className="WelcomePage">
   <h1> Welcome {username}</h1>
   <h2> Your List of Goals: <Link to="/list">Here</Link></h2>
</div>
 )
}