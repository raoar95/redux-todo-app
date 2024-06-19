// GETTING LOCAL STORAGE DATA ON INNITIAL STATE

const getTodoLocalStorageData = () => {

let TodoStorageData = localStorage.getItem("myTodoData");

   if (!TodoStorageData) {
       return [];
   }

   else {
       return JSON.parse(TodoStorageData)
   }

}

const initialState = getTodoLocalStorageData();



// TODO REDUCER

const todoReducer = (state = initialState, action) => {


    if (action.type === "addTask") {

      if (action.payload) {
        
         return [...state, action.payload];

       }

       return state; 
       
    }


    if (action.type === "deleteTask") {

      if (action.payload || action.payload === 0) {

        return state.filter((_, index) => index !== action.payload)
  
       }

      return state; 

    }


    return state;

}


export default todoReducer;