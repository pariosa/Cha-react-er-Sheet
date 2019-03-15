import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { saveCharacter } from './js/actions/saveCharacterAction';

const mapStateToProps = state => {
  return { 
  	isSynched: false
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveCharacter: character => dispatch(saveCharacter(character))
  };
};

class RegisterButton extends Component{ 
	render(){ 
		return( 
			<div className="registerButton" > 
				<button className="ui item green" onClick={this.props.saveCharacter}>
				    Save Character
				</button>
			</div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterButton);