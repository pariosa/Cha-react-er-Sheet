import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import RegisterButton from './RegisterButton';
import Backdrop from './Backdrop';
import DrawerToggle from './DrawerToggle';

const mapStateToProps = ( state ) => {
	return {
		auth: state.firebase.auth
	}
}

class Header extends Component {
	render(){
	const link1 = this.props.auth.uid ?  <LogoutButton /> : <LoginButton /> ;
	const link2 = this.props.auth.uid ? null :  <RegisterButton />;
	const drawerToggle = this.props.auth.uid ? <DrawerToggle /> : null;
		return(
			<div>
				<div className="ui secondary pointing menu">
					<a className="active item">
				    	<span className="gray">Cha</span>react <span className="gray">er</span> &nbsp;Sheet 🧙
				  	</a> 
				  	{drawerToggle}
					{link1}
					{link2}
				</div> 
			</div>
		)
	}
}

export default connect(mapStateToProps) (Header);