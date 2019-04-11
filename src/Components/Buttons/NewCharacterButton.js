import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { newCharacter } from '../../js/actions/saveCharacterAction';

const mapStateToProps = state => {
  return { 
  	isSynched: false
  }
};

const mapDispatchToProps = {
    newCharacter
};

class NewCharacterButton extends Component{

  constructor(props){
    super(props)
    this.props = props;
  }

	render(){ 
    const { newCharacter }  = this.props
		return( 
  <div className="newCharacterButton"> 
    <button type="button" className="ui item green" onClick={newCharacter}>
			 New Character
    </button>
  </div> 
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (NewCharacterButton);