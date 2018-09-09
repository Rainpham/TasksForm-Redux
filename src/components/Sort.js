import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class Sort extends Component {

    onSortTask = (sortBy,sortValue)=>{
        this.props.sortTask({
            by:sortBy,
            value:sortValue
        })
    }
    render() {
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a role="button"
                            className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5"
                                onClick={()=>this.onSortTask('name',1)}
                                >
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li>
                            <a role="button"
                            className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5"
                                onClick={()=>this.onSortTask('name',-1)}
                                >
                                    Tên Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li
                        onClick={()=>this.onSortTask('status',1)}
                        ><a role="button"
                        className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort_selected' : ''}
                        >Trạng Thái Kích Hoạt</a></li>
                        <li
                        onClick={()=>this.onSortTask('status',-1)}
                        ><a role="button"
                        className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort_selected' : ''}
                        >Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        sort : state.sortTaskReducer
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
     sortTask :(sort)=>{
         dispatch(action.sortTask(sort));
     }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Sort);
