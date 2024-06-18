import { React, useRef  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask } from './action/action';

function App() {

  const originalState = useSelector((state) => state.todoApp); 
  console.log(originalState)

  const dispatch = useDispatch()

  const inputRef = useRef(null);

  // const task = inputRef.current.value;
  // console.log(task);`


  const getInputText = () => {

    const task = inputRef.current.value.trim();
    console.log(task)

    if (task !== "") {
      dispatch(addTask(task));
      inputRef.current.value = "";
    }

    dispatch(addTask(task));

  }



  return (
    <>
       <h1>Redux Todo App</h1>
       <hr />
       <br />
       <input type="text" ref={inputRef} /><button onClick={getInputText}>Add Task</button>
       <br />
       <h3>Tasks List:</h3>
       <ul>
        {originalState.map((data, index) => {
            return <li key={index}>{data} <button onClick={() => dispatch(deleteTask(index))}>Delete Task</button></li>;
        })}
         {/* <li>Task 1 <button>Delete Task</button></li> */}
       </ul>
    </>
  )
}

export default App
