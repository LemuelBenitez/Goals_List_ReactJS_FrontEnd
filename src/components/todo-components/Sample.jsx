import { useState } from "react";

export default function Sample(){
    const [count, setCount] = useState(1);
   function handleClick(){
    setCount(count + 1)
   }
    return(
        <div>
            <h1>My number is {count}</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}