import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class App extends Component {
	constructor(props){
		super(props)
	}
	render() {
		console.log(this.props);
	    return (
	      <div>
	        Click Count: {this.props.count}
	        hello world AWDHJAKIODHAUIWDHAIOUWDHIUAWDHUIh
	      </div>
    	);
  }
}


const mapStateToProps = (state) => {
  return {
    count: state.count,
    race: state.race
  };
};

export default connect(mapStateToProps)(App);
