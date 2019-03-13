import React from 'react'; 

const CharacterList = ({characters}) => {
	return(
		<div className="character-list section">
 			{ 
 				characters && characters.map(character =>{
					return (
						<div key={character.id} >
							{character.character.name} of {character.character.homeland}
						</div>
					)
 				})
 			}
		</div>
	)
}

export default CharacterList;