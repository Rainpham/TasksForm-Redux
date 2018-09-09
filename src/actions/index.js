import * as Types from '../constants/ActionType';

export const listAll = ()=>{
    return{
        type:Types.LIST_ALL
    }
}

export const addTask = (task)=>{
    return {
        type:Types.ADD_TASK,
        task
    }
}

export const toggleForm = () => {
    return {
        type : Types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type : Types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type : Types.CLOSE_FORM
    }
}

export const upDateStatus = (id)=>{
    return{
        type:Types.UPDATE_STATUS_TASK,
        id
    }
}
export const DeleteTask = (id)=>{
    return {
        type:Types.DELETE_TASK,
        id //id:id
    }
}
export const EditTask = (task)=>{
    return{
        type:Types.EDIT_TASK,
        task
    }
}

export const searchTask = (filter)=>{
    return{
        type:Types.SEARCH_TASK,
        filter
    }
}
export const Search = (keyword)=>{
    return  {
        type:Types.SEARCH,
        keyword
    }
}

export const sortTask = (sort) => {
    return {
        type : Types.SORT,
        sort // sort : sort -> sort.by sort.value
    }
}