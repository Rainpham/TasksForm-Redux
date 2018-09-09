import {combineReducers} from 'redux';
import TasksReducer from './Tasks';
import isDisplayForm from './isDisplayForm';
import taskEditing from './TaskEditing';
import filterTable from './searchTask';
import search  from './searchKeyword';
import sortTaskReducer from './sortTaskReducer';

const myReducer = combineReducers({
    TasksReducer,
    isDisplayForm,
    taskEditing,
    filterTable,
    search,
    sortTaskReducer
});
export default myReducer;