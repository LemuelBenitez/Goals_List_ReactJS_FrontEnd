import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import HelloWorldAPIService from "./api/HelloWorldAPIService";
export default function WelcomePage(){
    const  {username} = useParams();

    function callRestApi(){
    console.log('called')
    }


 return(
 <div className="WelcomePage">
   <h1> Welcome {username}</h1>
   <h2> Your List of Goals: <Link to="/list">Here</Link></h2>
  <HelloWorldAPIService />
</div>
 )
}