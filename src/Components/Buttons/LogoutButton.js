import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { 
	logout
 } from '../../js/actions/authActions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
}; 

class LogoutButton extends Component{
  constructor(props){
    super(props)
    this.props = props;
  }

  render(){ 
    const { logout } = this.props;
		return( 
  <div className="logoutButton right menu"> 
    <a className="ui item" onClick={logout}>
			Logout~!
    </a>
  </div> 
		)
  }
}

export default connect( null, mapDispatchToProps) (LogoutButton);