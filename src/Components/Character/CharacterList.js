import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { loadCharacter } from '../../js/actions/loadCharacterAction';
import CharacterListing from './CharacterListing';
 
const mapStateToProps = (state, ownProps) =>{  
  const characters = ownProps.characters ? ownProps.characters : null
	return{
		test:null,
    characters:characters
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
  <CharacterListing 
    key={`${character.owner_uid}-${character.character.name}`}
    character={character} >
    <a onClick={this.props.loadCharacter.bind(this, character)}>
      {`${character.character.name} of ${character.character.homeland}`}
    </a>
  </CharacterListing>
        );
      })
    }
  </div>
	)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);