import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class TaskFrom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    }
  }

  closeFromtask = () => {
    this.props.onCloseForm();
    this.onClear();
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();//loai bo submit mac dinh cua form
    this.props.addTask(this.state);
    this.props.onCloseForm();
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      })
    } else {
      this.onClear();
    }
  }
  onClear = () => {
    this.setState({
      id: '',
      name: '',
      status: true
    })
  }

  render() {
    var { isDisplayForm, itemEditing } = this.props;

    if (!isDisplayForm) return null;
    return (
      <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">{itemEditing.id === '' ? 'Thêm Công Việc' : 'chỉnh sửa công việc'}
              <span className="fa fa-times-circle text-right" onClick={this.closeFromtask}
              ></span>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Tên :</label>
                <input type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <label>Trạng Thái :</label>
              <select
                className="form-control"
                required="required" name="status"
                onChange={this.onChange}
                value={this.state.status}
              >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-warning">{itemEditing.id === '' ? 'Thêm' : 'Cập nhật Công việc'}</button>&nbsp;
                    <button type="submit" className="btn btn-danger" onClick={this.closeFromtask}>Hủy Bỏ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.taskEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTask: (task) => {
      dispatch(action.addTask(task));
    },
    onCloseForm: () => {
      dispatch(action.closeForm());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskFrom);
