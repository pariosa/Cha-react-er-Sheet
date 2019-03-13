import React, { Component } from 'react';
import Backdrop from './Backdrop'; 
import { connect } from 'react-redux';
const Fragment = React.Fragment;
const mapStateToProps = (state) =>{
    return{ 
       isVisible: state.ui.sideDrawerVisible
    }
} 
class SideDrawer extends Component {
    render(){
        if(!this.props.isVisible){
            return null;
        } 
        return (
            <div>
                <Backdrop type="sideDrawer" />
                <div className="SideDrawer"> 
                     Characters will go here
                </div>
            </div> 
        );
    }   
};

export default connect(mapStateToProps)(SideDrawer);