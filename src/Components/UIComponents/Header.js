import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from '../Buttons/LoginButton';
import LogoutButton from '../Buttons/LogoutButton';
import RegisterButton from '../Buttons/RegisterButton';
import DrawerToggle from './DrawerToggle';
import SaveCharacterButton from '../Buttons/SaveCharacterButton';

const mapStateToProps = ( state ) => {
	return {
		auth: state.firebase.auth
	}
}

class Header extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

	render(){
  const {auth} = this.props;
	const link1 = auth.uid ?  <SaveCharacterButton /> : <LoginButton /> ;
	const link2 = auth.uid ? <LogoutButton /> :  <RegisterButton />;
	const drawerToggle = auth.uid ? <DrawerToggle /> : null;
		return(
  <div>
    <div className="ui Header secondary pointing menu">
      <a className="active item">
        <span className="gray">Cha</span>
react
        <span className="gray">er</span>
        {' '}
&nbsp;Sheet 🧙
				  	
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