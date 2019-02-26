import React, {Component} from 'React';
import CharacterInfo from './CharInfo';
import Stats from './Stats';
import { connect } from 'react-redux';
import HealthPoints from './HealthPoints';
import css from './css/CharacterSheet.css'

const mapStateToProps = (state) => {
	return{
		name: state.action.character.name,
		homeland:state.action.character.homeland
	}
}
const mapDispatchToProps = (dispatch) => {
	return{ 
		updatePlayerName: (playerName) => dispatch(updatePlayerName(playerName)),
	}
}

class CharacterSheet extends Component{
	constructor(props){
		super(props); 
	}
	render(){
		return (
			<div className="CharacterSheet">
				<div className="ui stackable grid column">
					<h2 className="characterTitle">{this.props.name} of {this.props.homeland}</h2>
					<CharacterInfo />
					<Stats />
					<HealthPoints />
				</div>
				
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (CharacterSheet);