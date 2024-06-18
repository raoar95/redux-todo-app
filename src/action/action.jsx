export const addTask = (task) => {

    return {
        type: "addTask",
        payload: task,
    }

}

export const deleteTask = (id) => {

    return {
        type: "deleteTask",
        payload: id,
    }

}