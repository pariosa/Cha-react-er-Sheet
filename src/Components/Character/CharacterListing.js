import React, { Component } from 'react'; 
import { componse, connect } from 'react-redux';
import { loadCharacter } from '../../js/actions/loadCharacterAction';
import { firestoreConnect } from 'react-redux-firebase'   

const CharactertDetails = (props) => {
  const { character, auth } = props;
   if (character) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{character.character.name}</span>
           </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {character.owner_id} </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}  

const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.character.id;
   
	return{
		test:null

	}
}

const mapDispatchToProps = {  
	loadCharacter	 
}

class CharacterListing extends Component{ 

  constructor(props){
    super(props)
    this.props = props;
  }

  render(){  
	const {character} = this.props;
	return(
  <div className="character-list section">
      <a onClick={this.props.loadCharacter.bind(this, character)}>
      {`${character.character.name} of ${character.character.homeland}`}
    </a>
  </div>  
	)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListing);