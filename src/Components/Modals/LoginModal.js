import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { toggleLoginModal } from '../../js/actions/uiActions';
import { login } from '../../js/actions/authActions';

import Backdrop from '../UIComponents/Backdrop';

const mapStateToProps = state => {
  return { 
  	showLoginModal: state.ui.loginModalVisible,
  	authError: state.auth.authError,
  	auth: state.firebase.auth
  };
};

const mapDispatchToProps = { 
  	login,
    toggleLoginModal 
};

class LoginModal extends Component {  
	
	state = { 
		email:'',
		password:''
	}

	constructor(props){
		super(props);
		this.props = props;
	}

	handleChange = (e) =>{ 
			this.setState({
				[e.target.id]: e.target.value
			}); 
		}
	handleSubmit = (e) =>{
		e.preventDefault(); 
		this.props.login(this.state); 
		console.log(this.state); 
	}
	render(){ 
		const { 
			authError, 
			auth,
			login,
			toggleLoginModal
		} = this.props;
		if(!this.props.showLoginModal){
			return null;
		} 
		return( 
			<div >
				<Backdrop type="loginModal" />
				<div className="loginModal modal"  >  
					<div className="header">
				    	Login
				  	</div>
					<form onSubmit={this.handleSubmit}>
						<div className="description">
							Hello, Welcome back~! 
						</div>
						<div className="field">
							<div className="ui left icon input">
								<input id="email" type="email"  onChange={this.handleChange}  placeholder="Email Address" />
								<i className="at icon"></i>
							</div>
						</div>
						<div className="field">
							<div className="ui left icon input"> 
								<input type="password" id="password" name="password" className="" onChange={this.handleChange} placeholder="Password" />
								<i className="key icon"></i>
							</div>
						</div>
							{ authError ? 
								<div className="ui error message">
								    <div className="header">Error!</div>
								     <p>{authError}</p>
								</div>
							: 
								<div className="ui Spacer">
								</div>	 
							} 
						<div className="footer"> 
							<button type="submit" className="ui button green" onClick={this.props.login} > 
								Log me in! 
							</button>
							<button type="submit" className="ui button red" onClick={this.props.toggleLoginModal} >  
								Oops! didn't mean to click this 
							</button>
						</div>

					</form>

				</div> 
			</div> 	
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginModal)