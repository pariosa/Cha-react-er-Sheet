import React, {Component} from 'React';
import CharacterInfo from './CharInfo';
import Stats from './Stats';
import HealthPoints from './HealthPoints';
import css from './css/CharacterSheet.css'

class CharacterSheet extends Component{
	render(){
		return (
			<div className="CharacterSheet ui stackable grid column" >
				<img src="img/pathfinder-logo.png" className="pathfinder-logo" /> 
				<CharacterInfo />
				<Stats />
				<HealthPoints />
				
			</div>
		);
	}
}

export default CharacterSheet;