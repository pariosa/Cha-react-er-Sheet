import React, { Component } from 'react';
import LoginButton from './LoginButton';
import Backdrop from './Backdrop';

class Header extends Component {
	render(){

		return(
			<div>
				<div className="ui secondary pointing menu">
					<a className="active item">
				    	<span className="gray">Cha</span>react <span className="gray">er</span> &nbsp;Sheet 🧙
				  	</a> 
					<LoginButton />
				</div> 
			</div>
		)
	}
}

export default Header;