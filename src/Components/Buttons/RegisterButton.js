import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { toggleRegisterModal } from '../../js/actions/uiActions';

const mapStateToProps = state => {
  return { 
  	isOpen: false
  }
};

const mapDispatchToProps = {
    toggleRegisterModal
};

class RegisterButton extends Component{
  constructor(props){
    super(props)
    this.props = props;
  }
	
  render(){ 
    const { toggleRegisterModal } = this.props
		return(  
  <div className="registerButton"> 
    <a className="ui item" onClick={toggleRegisterModal}>
		  Register
    </a>
  </div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterButton);