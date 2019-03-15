import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { loadCharacter } from './js/actions/loadCharacterAction'; 
const mapStateToProps = dispatch =>{
	return{
		test:null
	}
}
const mapDispatchToProps = dispatch =>{
	return{
		loadCharacter: character => dispatch(loadCharacter(character)) 
	}
}

class CharacterList extends Component{ 
	render(){  
		const characters = this.props.characters;
		return(

			<div className="character-list section">
	 			{ 
	 				characters && characters.map(character =>{ 
						return (
							<div key={character.id} >
								<a onClick={this.props.loadCharacter.bind(this, character)}>
									{character.character.name} of {character.character.homeland}
								</a>
							</div>
						)
	 				})
	 			}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);