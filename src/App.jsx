import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const todoVal = useRef();

  const selector = useSelector(state => state.todos)
  console.log(selector);

  const addTodoInRedux = (event) => {
    event.preventDefault();
    console.log("todo added", todoVal.current.value);
    
  }
  
  return (
    <>
      
      <div>App</div>

       <form>
        <input type="text" ref={todoVal} />
        <button onClick={addTodoInRedux}>add Todo</button>
       </form>

          <ul>
           {selector.length > 0 ? selector.map((item , index) => {
            return <li key={item.id}>{item.title}
            </li>
          }) : <h1>No data found</h1>}
        </ul>

    </>
  )
}

export default App