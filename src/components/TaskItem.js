import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskItem extends Component {


    onUpDate=()=>{
       this.props.upDateStatus(this.props.task.id);
    }

    onDelete=()=>{
        this.props.onDelete(this.props.task.id);
    }
    onEdit=()=>{
        this.props.onOpenForm();
        this.props.onEdit(this.props.task);
    }

    render() {

        var {task,index}=this.props;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={`label ${task.status===true ? ' label-success':'label-warning'}`}
                    onClick={this.onUpDate}
                    >
                       {task.status===true?'kich hoat':'ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEdit}>
                        <span className="fa fa-pencil mr-5" />Sửa
                        </button>
                    &nbsp;
                        <button type="button" className="btn btn-danger"  onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5" 
                        />Xóa
                        </button>
                </td>
            </tr>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        upDateStatus : (id) => {
            dispatch(actions.upDateStatus(id));
        },
        onDelete:(id)=>{
            dispatch(actions.DeleteTask(id))
        },
        onEdit:(task)=>{
            dispatch(actions.EditTask(task));
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        }
    };
  };
export default connect(null,mapDispatchToProps)(TaskItem);
