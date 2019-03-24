import React, { Component } from "react";
import { connect } from "react-redux";
import {
	updateAbility,
	removeAbility
} from "./js/actions/abilitiesActions"

const mapStateToProps = (state, ownProps) => {
	return {
		ability:ownProps.ability,
		id: ownProps.id
	}
}

const mapDispatchToProps = dispatch => {
	return{
		removeAbility: ability => dispatch(removeAbility(ability)),
		updateAbility: ability => dispatch(updateAbility(ability))
	}
}

class Ability extends Component {
	render(){
		return(

			<div className="Ability" id={this.props.id}>

				<textarea value={this.props.ability} cols="50" onChange={this.props.updateAbility} />

         		<button className="red deleteWeapon deleteAbility" onClick={this.props.removeAbility}>x</button>

			</div>

		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Ability)