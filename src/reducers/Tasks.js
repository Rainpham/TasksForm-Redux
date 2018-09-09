import *as Types from '../constants/ActionType';


var randomID = () => {
    return Math.random();
}

var data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
    //tim vi phan tu can thay the
    let id = action.id;
    let index = state.findIndex((item) => {
        return item.id === id
    });
    /**********************/
    switch (action.type) {
        case Types.LIST_ALL:
            return state;
        //hàm add_task dùng chung co add nea và update
        //nên sưa tên hàm SAVE_TASK
        case Types.ADD_TASK:
            let task = {
                id:action.task.id,
                name: action.task.name,
                status: action.task.status === true ? true : false
            }
            if (!task.id) {
                task.id=randomID();
                state.push(task);
            } else {
                id = action.task.id;
                index = state.findIndex(item=>{
                    return item.id===id;
                });
                state[index]=task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_STATUS_TASK:
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case Types.DELETE_TASK:
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default myReducer;