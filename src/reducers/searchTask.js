import *as Types from '../constants/ActionType';

var initialState = {
    name:'',
    status:-1
};
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case Types.SEARCH_TASK:
            return {
                name:action.filter.name,
                status:parseInt(action.filter.status,10)
            };
        default: return state;
    }
};

export default myReducer;
