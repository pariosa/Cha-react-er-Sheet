import React, { Component } from "react";
import { connect } from "react-redux";
import {
	updateAbility,
	removeAbility
} from "../../js/actions/abilitiesActions"

const mapStateToProps = (state, ownProps) => {
	return {
		ability:ownProps.ability,
		id: ownProps.id
	}
}

const mapDispatchToProps = { 
	removeAbility,
	updateAbility
}

class Ability extends Component {
	constructor(props){
		super(props);
		this.props = props;
	}

	render(){
		const {
			id,
			ability,
			updateAbility,
			removeAbility
		} = this.props;
		return(

  <div className="Ability" id={id}>
    <textarea value={ability} cols="50" onChange={updateAbility} />
    <button type="button" className="red deleteWeapon deleteAbility" onClick={removeAbility}>x</button>
  </div>

		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Ability)