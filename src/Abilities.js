import React, { Component } from "react";
import { connect } from "react-redux"
import Ability from "./Ability"
import {
	addAbility
} from "./js/actions/abilitiesActions"

const mapStateToProps = state => {
	return {
		abilities:state.abilities
	}
}

const mapDispatchToProps = dispatch => {
	return{
		updateAbility: ability => dispatch(updateAbility(ability)),
		addAbility: ability => dispatch(addAbility(ability))
	}
}

class Abilities extends Component {
  getAbilities = () => {
    let abilities = [];
    if(this.props.abilities.length > 0){
	    this.props.abilities.forEach((ability, i) => {
	      abilities.push(
	        <Ability 
	          key={i}
	          id={ability.id}
	          ability={ability.ability}
	          
	        />
	      );
	    });
	}
    return <div>{abilities}</div>;
  };
	render(){
		return(

			<div className="Abilities">
			<div className="AbilitiesTitle">
			Special Abilities
			</div>
				{this.getAbilities()}

			 	<button className="ui small button green addNewAcItem" onClick={this.props.addAbility} > + </button>

			</div>

		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Abilities)