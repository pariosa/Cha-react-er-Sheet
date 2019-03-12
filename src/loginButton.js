import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginModal from "./LoginModal";
import { toggleLoginModal } from './js/actions/uiActions';

const mapStateToProps = state => {
  return { 
  	isOpen: false
  }
};
const mapDispatchToProps = dispatch => {
  return {
    toggleLoginModal: bool => dispatch(toggleLoginModal(bool))
  };
};


class LoginButton extends Component{
	/*addLoginPrompt = () => {
		console.log("login button pressed!");
		this.setState({
			isOpen: !this.props.isOpen
		});
	}*/
	render(){ 
		return( 
			<div className="loginButton right menu" > 
				<a className="ui item" onClick={this.props.toggleLoginModal}>
				    Login~!
				</a>
			</div> 
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (LoginButton);