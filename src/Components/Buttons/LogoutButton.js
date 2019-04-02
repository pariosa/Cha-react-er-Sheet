import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { 
	logout
 } from '../../js/actions/authActions';

const mapStateToProps = state => {
  	return {
  		
  	}
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
}; 

class LogoutButton extends Component{ 
	render(){ 
		return( 
  <div className="logoutButton right menu"> 
    <a className="ui item" onClick={this.props.logout}>

				    Logout~!
				
    </a>
  </div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (LogoutButton);