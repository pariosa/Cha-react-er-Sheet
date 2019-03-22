import React, { Component } from "react";
import { connect } from "react-redux"
import Ability from "./Ability"
import {
	updateAbility,
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
    this.props.abilities.forEach((ability, i) => {
      abilities.push(
        <Ability 
          key={i}
          id={i}
          ability={ability}
          
        />
      );
    });
    return <div>{abilities}</div>;
  };
	render(){
		return(

			<div className="Abilities">

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