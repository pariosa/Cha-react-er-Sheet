import React, { Component } from 'react';


class Header extends Component {
	render(){
		return(
			<div>
				<div className="ui secondary pointing menu">
					<a className="active item">
				    	<span className="gray">Cha</span>react <span className="gray">er</span> &nbsp;Sheet 🧙
				  	</a> 
				  	<div classaName="right menu">
				   		<a className="ui item">
				      		Login
				    	</a>
				  	</div>
				</div> 
			</div>
		)
	}
}

export default Header;