import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleRegisterModal, toggleLoginModal, toggleSideDrawer } from '../../js/actions/uiActions';

const mapDispatchToProps = {
    toggleLoginModal,
    toggleRegisterModal,
    toggleSideDrawer
};

const mapStateToProps = (state, initialState) =>{ 
	return{
		type: initialState.type
	}
}

class Backdrop extends Component{ 
	render(){
		if(this.props.type === "registerModal"){
			return( 
  <div className="Backdrop" onClick={this.props.toggleRegisterModal} />
			)
		}if(this.props.type === "loginModal"){
			return( 
  <div className="Backdrop" onClick={this.props.toggleLoginModal} />	
			)
		}if(this.props.type === "sideDrawer"){
			return( 
  <div className="Backdrop" onClick={this.props.toggleSideDrawer} />	
			)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);