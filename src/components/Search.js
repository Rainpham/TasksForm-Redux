import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
        keyword : ''
    }
}

  onchange=(event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value
    this.setState({
      [name]:value
    });
   
  }

  btn_seach=()=>{
    this.props.searchKeyword(this.state.keyword);
  }
    render(){
        return(
         
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="input-group">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Nhập từ khóa..." 
                    name="keyword" 
                    value={this.state.name}
                    onChange={this.onchange}
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="button" onClick={this.btn_seach}>
                        <span className="fa fa-search mr-5" />Tìm
                    </button>
                    </span>
                  </div>
                </div>
            
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      searchKeyword: (keyword) => {
          dispatch(action.Search(keyword))
      }
  }
}
export default connect(null,mapDispatchToProps)(Search);
