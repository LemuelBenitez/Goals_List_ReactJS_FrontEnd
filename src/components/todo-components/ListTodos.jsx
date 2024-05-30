import { useEffect, useState } from "react";
import { deleteItem, retrieveListForUsername } from "./api/TodoListAPi";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodos () {
  //Dates
  const today = new Date();
  const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

  // Hooks
  const[todos, setTodo] = useState([]);
  const[message, setMessage] = useState(null);
  const navigate = useNavigate()
  const authContext = useAuth()
  const username = authContext.username
  useEffect(()=> refreshList(),[])

  // Logic

  // const todos = [
  //   { id: 1, description: 'FullStack Dev' , targetDate: targetDate , done: false},
  //   { id: 2, description: 'Java Dev' , targetDate: targetDate, done: false},
  //   { id: 3, description: 'ReactJs Dev' , targetDate: targetDate, done: false}
  // ]

  const refreshList = () =>{
  retrieveListForUsername(username)
  .then(response => {
    setTodo(response.data)
  })
  .catch(error => console.log(error))
  }

  const deleteListItem = (id) =>{
    deleteItem(id)
    .then(() =>{
      setMessage(`Deleted List Item ${id}`)
      refreshList();
    })
    .catch(error => console.log(error))
  }

  const updateListItem = (id) =>{
      navigate(`/updateItem/${id}`)
  }

  return (
    <div className="container">
      <h1>Things you want to do!</h1>
      {message && 
      <div className="alert alert-warning">{message}</div>
      }
      <div className="">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Description</th>
              <th scope="col">Target Date</th>
              <th scope="col">Is Done?</th>
              <th scope="col">Delete?</th>
              <th scope="col">Update?</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id} scope="row">
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.targetDate}</td>
                <td>{todo.done ?
                <button type="button" className="btn btn-success">True</button> : 
                <button type="button" className="btn btn-danger">False</button>}
                </td>
                <td>
                  <button 
                  type="button" className="btn btn-info"
                  onClick={() => deleteListItem(todo.id)}>
                  Delete
                  </button>
                </td>
                <td>
                  <button 
                  type="button" className="btn btn-warning"
                  onClick={() => updateListItem(todo.id)}>
                  Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className = "container">
            <button type="button" className="btn btn-primary"
             onClick={()=> navigate('/addItem')}>
            Add A Goal
            </button>
        </div>
      </div>
    </div>
  )
}
