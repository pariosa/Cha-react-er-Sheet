import React, { Component } from "react";
import { connect } from "react-redux";
import {
	removeAbility
} from "./js/actions/abilitiesActions"

const mapStateToProps = (state, ownProps) => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return{
		removeAbility: ability => dispatch(removeAbility(ability))
	}
}

class Ability extends Component {
	render(){
		return(

			<div className="Abilities">

				Ability will go here!

         		<button className="red deleteWeapon" onClick={this.props.removeAbility}>x</button>

			</div>

		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Ability)