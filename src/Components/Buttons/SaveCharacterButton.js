import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { saveCharacter } from '../../js/actions/saveCharacterAction';

const mapStateToProps = state => {
  return { 
  	isSynched: false
  }
};

const mapDispatchToProps = {
    saveCharacter
};

class SaveCharacterButton extends Component{

  constructor(props){
    super(props)
    this.props = props;
  }

	render(){ 
    const { saveCharacter }  = this.props
		return( 
  <div className="registerButton"> 
    <button type="button" className="ui item green" onClick={saveCharacter}>
			Save Character
    </button>
  </div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (SaveCharacterButton);