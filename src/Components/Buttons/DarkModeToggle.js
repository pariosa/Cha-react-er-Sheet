import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { toggleDarkMode } from '../../js/actions/uiActions';

const mapStateToProps = state => {
  return { 
  	darkMode: state.ui.darkMode
  }
};

const mapDispatchToProps = {
    toggleDarkMode
}; 

class DarkModeToggle extends Component{ 
  constructor(props){
    super(props);
    this.props = props;
  }
  
	render(){ 
	  const { toggleDarkMode, darkMode } = this.props;
  	return( 
    <div className="darkModeToggle right menu"> 
         <input 
          type="checkbox"   
          onChange={toggleDarkMode} 
          checked={darkMode}
        /> 
        <div className="darkMode" onClick={toggleDarkMode}>
        Dark Mode(new!!~)
        </div>
      
    </div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (DarkModeToggle);