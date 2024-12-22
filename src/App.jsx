import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./action/action";

function App() {
  const originalState = useSelector((state) => state.todoApp);

  const dispatch = useDispatch();

  // SETTING LOCAL STORAGE DATA

  useEffect(() => {
    localStorage.setItem("myTodoData", JSON.stringify(originalState));
  }, [originalState]);

  // GETTING INPUT DATA

  const inputRef = useRef(null);

  const getInputText = () => {
    const task = inputRef.current.value.trim();

    if (task !== "") {
      dispatch(addTask(task));
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <h1>Redux Todo App</h1>
      <hr />
      <br />
      <input type="text" ref={inputRef} />
      <button onClick={getInputText}>Add Task</button>
      <br />
      <h3>Tasks List:</h3>
      {originalState.length === 0 ? (
        <p>
          <strong>No Task to Show (Add new task)</strong>
        </p>
      ) : (
        <ul>
          {originalState.map((data, index) => {
            return (
              <li key={index}>
                {`${data} `}
                <button onClick={() => dispatch(deleteTask(index))}>
                  Delete Task
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;
