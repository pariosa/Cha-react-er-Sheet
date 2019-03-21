import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { toggleSideDrawer } from './js/actions/uiActions';

const mapDispatchToProps = (dispatch) => {
	return{
    	toggleSideDrawer: bool => dispatch(toggleSideDrawer(bool))
    }
}
const mapStateToProps = (state) =>{
	return{
		isOpen:false
	}
}
class DrawerToggle extends Component{
	render(){
		return(
  <div className="DrawerToggle" onClick={this.props.toggleSideDrawer}>
    <div className="DrawerToggleItem" />
    <div className="DrawerToggleItem" />
    <div className="DrawerToggleItem" />
  </div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerToggle);