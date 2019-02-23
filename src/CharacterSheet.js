import React, {Component} from 'React';
import CharacterInfo from './CharInfo';
import Stats from './Stats';

class CharacterSheet extends Component{
	render(){
		return (
			<div className="CharacterSheet ui grid" >
				
				<CharacterInfo className="six wide" />
				
				<Stats className="six wide" />

			
			</div>
		);
	}
}

export default CharacterSheet;