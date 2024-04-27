
import axios from 'axios';
import { Component} from 'react';
class HelloWorldAPIService extends Component{

    constructor(){
        super();
        this.state={ message: null}
    }
retrieveHelloWorldBean = () => {
    return  axios.get('http://localhost:8080/helloWorld_Bean')
    .then((response)=> this.successfulResponseBean(response))
    .catch((error)=> this.errorResponse(error))
    .finally(()=> console.log('cleanup'))
}

retrieveHelloWorld(){
    return  axios.get('http://localhost:8080/helloWorld')
    .then((response)=> this.successfulResponse(response))
    .catch((error)=> this.errorResponse(error))
    .finally(()=> console.log('cleanup'))
}

retrieveHelloWorldPathVariable(username){
    return  axios.get(`http://localhost:8080/helloWorld_Bean/${username}`)
    .then((response)=> this.successfulResponseBean(response))
    .catch((error)=> this.errorResponse(error))
    .finally(()=> console.log('cleanup'))
}

successfulResponseBean(response){
    console.log(response)
    this.setState({message: response.data.s})
  }

  successfulResponse(response){
    console.log(response)
    this.setState({message: response.data})
  }

  errorResponse(response){
    console.log(response)
    this.setState({message:response.message})
  }
  
  callRestApi= ()=>{
    let num = Math.floor(Math.random()* 11)
    console.log(num)
    if(num % 2== 0)
        this.retrieveHelloWorld()
    else
        this.retrieveHelloWorldBean()
  }

  callRestApiParam= ()=>{
    this.retrieveHelloWorldPathVariable('Lemuel')
  }
  
  render(){
    const{message} = this.state
    return(
        <div>
        <button className="btn btn-success"
        onClick={this.callRestApi}>
        REST API CALL 
        </button>
        <button className="btn btn-success"
        onClick={this.callRestApiParam}>
        REST API Param CALL 
        </button>
        <h2 className="text-primary">{message}</h2>
     </div>
    )
  }
}

export default HelloWorldAPIService