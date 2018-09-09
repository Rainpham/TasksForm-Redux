import React, { Component } from 'react';
import TaskFrom from './components/TaskFrom';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: '',
        status: -1 // xac dinh la minh lay tất ca
      },
      keyword: ''
    }
  }


  isshowTaskFrom = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.clearTask({
      id: '',
      name: '',
      status: false
    })
  }


  btn_seach = (name) => {
    this.setState({
      keyword: name
    })
  }

  render() {
    var { isDisplayForm } = this.props;
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            {/* cho nay la cua task from */}
            <TaskFrom />

            <div className={isDisplayForm === false ? 'col-xs-12 col-sm-12 col-md-12 col-lg-12' : 'col-xs-8 col-sm-8 col-md-8 col-lg-8'}>
              <button type="button"
                className={isDisplayForm === false ? 'btn btn-primary' : 'btn btn-danger'}
                onClick={this.isshowTaskFrom}>
                <span className="fa fa-plus mr-5" />
                Thêm Công Việc
              </button>
              {/* control */}
              <Control />
              {/* tasklist */}
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.taskEditing
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    clearTask: (task) => {
      dispatch(actions.EditTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
