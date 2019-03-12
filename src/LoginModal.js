import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleLoginModal } from './js/actions/uiActions';
import { Login } from './js/actions/authActions';

import Backdrop from './Backdrop';

const mapStateToProps = state => {
  return { 
  	showLoginModal: state.ui.loginModalVisible
  };
};
const mapDispatchToProps = dispatch => {
  return {
  	login: auth => dispatch(login(auth)),
    toggleLoginModal: bool => dispatch(toggleLoginModal(bool))
  };
};

class LoginModal extends Component { 
	 
	render(){
		//Do not render if the 'show' prop is false
		if(!this.props.showLoginModal){
			return null;
		}

		//the gray background
		const backdropStyle = {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			height:'100%',
			width:'100%',
			right: 0,
			backgroundColor: 'rgba(0,0,0,0.3)',
			padding: 50,
		};

		const modalStyle = {
			backgroundColor: '#fff',
			borderRadius: 5,
			height:300,
			width:300,
			maxWidth: 500,
			maxHeight: 300,
			margin: '0 auto',
			padding: 30,
		};

		return( 
				<div >
					<Backdrop />
					<div className="loginModal"  >


						Hello, Welcome back~! 
						<div>
						Username: <input />
						</div>
						<div>
						Password: <input />
						</div>
						<div className="footer">

							<button onClick={this.props.Login} >

								Log me in!

							</button>
							<button onClick={this.props.toggleLoginModal} >

								Oops! didn't mean to click this

							</button>
						</div>
					</div> 
				</div> 	
		)
	}
}
LoginModal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool,
	children: PropTypes.node
}
export default connect(mapStateToProps, mapDispatchToProps) (LoginModal)