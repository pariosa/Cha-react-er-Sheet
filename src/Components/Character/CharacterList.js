import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { loadCharacter } from '../../js/actions/loadCharacterAction';
 
const mapStateToProps = state =>{
	return{
		test:null
	}
}
const mapDispatchToProps = {  
	loadCharacter	 
}

class CharacterList extends Component{ 

  constructor(props){
    super(props)
    this.props = props;
  }

  render(){  
	const {characters} = this.props;
	return(
  <div className="character-list section">
    { 
	  characters && 
	  characters.map(character =>{ 
	    return (
  <div key={character.id}>
    <a onClick={this.props.loadCharacter.bind(this, character)}>
      {`${character.character.name} of ${character.character.homeland}`}
    </a>
  </div>
        );
      })
    }
  </div>
	)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);