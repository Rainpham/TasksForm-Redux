import *as Types from '../constants/ActionType';


var initialState = {
    id : '',
    name : '',
    status : false
};
const myReducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.EDIT_TASK:
            return action.task;
        default:
            return state;
    }
}
export default myReducer;