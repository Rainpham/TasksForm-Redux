import *as Types from '../constants/ActionType';

var initialState = {
    by:'name',
    value:1
};
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case Types.SORT:
            return {
                by:action.sort.by,
                value:action.sort.value
            };
        default: return state;
    }
};

export default myReducer;
