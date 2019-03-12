import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLoginModal } from './js/actions/uiActions';

const mapDispatchToProps = dispatch => {
  return { 
    toggleLoginModal: bool => dispatch(toggleLoginModal(bool))
  };
};
const mapStateToProps = state =>{
	return{

	}
}

class Backdrop extends Component{

	render(){
		return(
			<div className="Backdrop" onClick={this.props.toggleLoginModal}>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);