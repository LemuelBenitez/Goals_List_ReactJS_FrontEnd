export default function ListTodos () {
  const today = new Date();
  const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

  const todos = [
    { id: 1, description: 'FullStack Dev' , targetDate: targetDate , done: false},
    { id: 2, description: 'Java Dev' , targetDate: targetDate, done: false},
    { id: 3, description: 'ReactJs Dev' , targetDate: targetDate, done: false}
  ]

  return (
    <div className="container">
      <h1>Things you want to do!</h1>
      <div className="">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Description</th>
              <th scope="col">Target Date</th>
              <th scope="col">Is Done?</th>

            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id} scope="row">
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toDateString()}</td>
                <td>{todo.done.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
