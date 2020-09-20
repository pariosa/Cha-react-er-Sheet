import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from '../Buttons/LoginButton';
import LogoutButton from '../Buttons/LogoutButton';
import RegisterButton from '../Buttons/RegisterButton';
import DrawerToggle from './DrawerToggle';
import SaveCharacterButton from '../Buttons/SaveCharacterButton';
import NewCharacterButton from "../Buttons/NewCharacterButton";
import DarkModeToggle from "../Buttons/DarkModeToggle";
const mapStateToProps = ( state ) => {
	return {
    auth: state.firebase.auth,
    darkMode:state.ui.darkMode
	}
}

class Header extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

	render(){
  const {auth, darkMode} = this.props;
	const link1 = auth.uid ?  <SaveCharacterButton /> : <LoginButton /> ;
  const linkNew = <NewCharacterButton />;
  const darkModeToggle = <DarkModeToggle />;
	const link2 = auth.uid ? <LogoutButton /> :  <RegisterButton />;
  const drawerToggle = auth.uid ? <DrawerToggle /> : null;
  const darkModeFn = (dark) =>{ 
    return dark ? "Header dark" : "Header light";
  }
  
		return(
  <div className={darkModeFn(darkMode)}>
    <div className="ui Header secondary pointing menu">
      <a className="active item">
        <span className="gray">Cha</span>
react
        <span className="gray">er</span>
        {' '}
&nbsp;Sheet 🧙
				  	
      </a> 
      {drawerToggle}
      {linkNew}
      {link1}
      {darkModeToggle}
      {link2}
    </div> 
  </div>
		)
	}
}

export default connect(mapStateToProps) (Header);