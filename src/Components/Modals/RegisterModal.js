import React, { Component } from 'react';
import { connect } from "react-redux";
import { register } from '../../js/actions/authActions';
import { toggleRegisterModal } from '../../js/actions/uiActions';
import Backdrop from '../UIComponents/Backdrop';

const mapStateToProps = state => {
  return { 
  	showRegisterModal: state.ui.registerModalVisible,
  	authError: state.auth.authError,
	auth: state.firebase.auth
  };
};
const mapDispatchToProps = {
  	register,
    toggleRegisterModal
}; 

class RegisterModal extends Component { 
	state = { 
		email:'',
		password:'',
		username:'', 
	}

	handleChange = (e) =>{ 
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log('input changed');
	}
	handleSubmit = (e) =>{
		e.preventDefault(); 
		this.props.register(this.state); 
		console.log(this.state);
		console.log('input submitted');
	}
	 
	render(){
		const { authError, auth } = this.props;
		//Do not render if the 'show' prop is false
		if(!this.props.showRegisterModal){
			return null;
		} 
		//the gray background 
		return( 
				<div>
					<Backdrop type="registerModal" />
					<div className="registerModal modal" >
						<div className="header">
						Register
						</div>
 
						<form onSubmit={this.handleSubmit}>
							<div className="description">
						     Hello, Please enter your registration details below~!  
						    </div>
							<div className="field">
								<div class="ui left icon input">
									<input id="username" type="text"  onChange={this.handleChange} placeholder="Username" />
									<i className="user icon"></i>
								</div>
							</div>
							<div className="field">
								<div class="ui left icon input">
									<input id="email" type="email"  onChange={this.handleChange}  placeholder="Email Address" />
									<i className="at icon"></i>
								</div>
							</div>
							<div className="field">
								<div class="ui left icon input"> 
									<input type="password" id="password" name="password" className="" onChange={this.handleChange} placeholder="Password" />
									<i className="key icon"></i>
								</div>
							</div>
							<div className="field">
								<div class="ui left icon input">
									<input type="password" id="passwordVerify" name="password" className="" onChange={this.handleChange} placeholder="Verify Password" />
									<i className="lock icon"></i>
								</div>
							</div>
							{ authError ? 
								<div className="ui error message">
							    	<div className="header">Action Forbidden</div>
							    	<p>{authError}</p>
								 </div>
							: 
								<div className="ui Spacer">
								</div>	
							 } 
							<div className="footer"> 
								<button type="cancel" className="ui button green" onClick={this.props.register} >
					 				Sign me up! 
								</button> 
								<button type="cancel" className="ui button red" onClick={this.props.toggleRegisterModal} > 
									Oops! I didn't mean to click this 
								</button>
							</div>
						</form>
						
					</div> 
				</div> 	
		)
	}
} 
export default connect(mapStateToProps, mapDispatchToProps) (RegisterModal)