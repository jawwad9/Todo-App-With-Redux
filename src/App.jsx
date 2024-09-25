import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo } from './config/redux/reducers/todoSlice';

const App = () => {
  const todoVal = useRef();
  const dispatch = useDispatch()

  const selector = useSelector(state => state.todos.todo)
  console.log(selector);

  const addTodoInRedux = (event) => {
    event.preventDefault();
    console.log("todo added", todoVal.current.value);
    if (todoVal.current.value !== "") {dispatch(addTodo({
      title: todoVal.current.value
    }))
    todoVal.current.value = ''
  }
}
  

  const deleteItemFromRedux = (index) => {
    console.log("delete Item", index);
    dispatch(removeTodo({
      index 
    }))
    
  }

  const editItemFromRedux = (index) => {
    console.log("edit Item", index );
    const editVal = prompt("Enter Todo");
    if (editVal) {dispatch(editTodo({
      index,
      title: editVal
    }))  }
  }


  return (
    <>
      
      <div className=" d-flex flex-column align-items-center p-4 min-vh-100 bg-light">
        <div>
        <h1 className="text-center mt-3">Todo App</h1>
       <form>
        <input type="text" ref={todoVal} />
        <button className="btn btn-primary " onClick={addTodoInRedux}>add Todo</button>
       </form>
        </div>

       
          <div className=" bg-light text-center p-5 gap-3 list-group w-100 " style={{ maxWidth: '500px' }}>
           {selector.length > 0 ? selector.map((item , index) => {
            return <div key={item.id} className="d-flex justify-content-around align-items-center mb-2 p-2 rounded shadow-sm bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-cyan-500/50 rounded">{item.title}
            <div className="btn-group d-flex align-items-center justy-content-center flex-wrap">
            <button  className="btn btn-danger " onClick={()=>deleteItemFromRedux(index)}>Delete</button>
            <button className="btn btn-primary" onClick={()=>editItemFromRedux(index)}>Edit</button>
            </div>
            </div>
          }) : <h1>No data found</h1>}
        </div>
        </div>

    </>
  )
}

export default App