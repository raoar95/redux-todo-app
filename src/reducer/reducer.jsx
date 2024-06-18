// const initialState = [];


const todoApp = (state=['Arun'], action) => {

    console.log(state)
    console.log(action.payload)


    if (action.type="addTask") {
        
       state.push(action.payload);
    //    console.log(state);
       return state;
       
       
    }

   

    // if (action.type="deleteTask") {

    //   state.slice(action.payload, 0)

    // }

    // else {return state;}

}

export default todoApp;