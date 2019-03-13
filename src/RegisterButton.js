import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { toggleRegisterModal } from './js/actions/uiActions';

const mapStateToProps = state => {
  return { 
  	isOpen: false
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleRegisterModal: bool => dispatch(toggleRegisterModal(bool))
  };
};

class RegisterButton extends Component{ 
	render(){ 
		return( 
			<div className="registerButton" > 
				<a className="ui item" onClick={this.props.toggleRegisterModal}>
				    Register
				</a>
			</div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterButton);