import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtname: '',
            txtstatus: -1
        }
    }
    searchTast = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        var filter = {
            name: name === 'txtname' ? value : this.state.txtname,
            status: name === 'txtstatus' ? value : this.state.txtstatus
        }
        this.props.searchTask(filter);
        this.setState({
            [name]: value
        })
    }


    render() {
        var { task, filterTable, keyword, sort } = this.props;
        if (filterTable.name) {
            task = task.filter((item) => {
                return item.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
            })
        };

        task = task.filter((item) => {
            if (filterTable.status === -1) {
                return item;
            } else {
                return item.status === (filterTable.status === 1 ? true : false)
            }
        });

        task = task.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });
        if (sort.by === 'name') {
            task.sort((a, b) => {
                if (a.name > b.name) return -sort.value;
                else if (a.name < b.name) return sort.value;
                else return 0;
            });
        } else {
            task.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }

        var { txtname, txtstatus } = this.state;
        var elmTask = task.map((task, index) => {
            return <TaskItem
                key={index}
                index={index}
                task={task}
            />
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td />
                                <td>
                                    <input type="text" className="form-control"
                                        name="txtname"
                                        value={txtname}
                                        onChange={this.searchTast}
                                    />
                                </td>
                                <td>
                                    <select className="form-control"
                                        name="txtstatus"
                                        value={txtstatus}
                                        onChange={this.searchTast}
                                    >
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td />
                            </tr>
                            {/* TaskItem */}
                            {elmTask}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProsp = state => {
    return {
        task: state.TasksReducer,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sortTaskReducer
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        searchTask: (filter) => {
            dispatch(action.searchTask(filter))
        }
    }
}
export default connect(mapStateToProsp, mapDispatchToProps)(TaskList);
