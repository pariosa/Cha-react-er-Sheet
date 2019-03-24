import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	updateCmbModifiersField,
	updateCmbSizeModifier
} from "./js/actions/characterActions";
const mapDispatchtoProps = dispatch =>{
	return{
		updateCmbModifiersField : modifier => dispatch(updateCmbModifiersField(modifier)),
		updateCmbSizeModifier: modifier => dispatch(updateCmbSizeModifier(modifier))
	}
}

const mapStateToProps = state => {
	return{
		bab: state.character.baseAttackBonus,
		strengthMod: state.stat.stats.strMod,
		cmbModifiersField:state.character.cmbModifiersField,
		sizeModifier: state.character.cmbSizeModifier
	}
}

class Cmb extends Component {
	calcTotal = () =>{ 
		return (parseInt(this.props.bab) + parseInt(this.props.strengthMod) + parseInt(this.props.sizeModifier))
	}
	render(){
		return(
			<div className="Cmb">

				<div className="CmbRow1 ui small input">
				<div className="cmbLabel ui small black button">CMB</div>
					<input className="cmbTotal" size="2" value={this.calcTotal()} readOnly />
					&nbsp; = &nbsp;
					<input className="cmbBaseAttackBonus" size="2" value={this.props.bab} readOnly />
					&nbsp; + &nbsp;
					<input className="strength" size="2" value={this.props.strengthMod} readOnly />
					&nbsp; + &nbsp;
					<input className="cmbSizeModifier" size="2" value={this.props.sizeModifier} onChange={this.props.updateCmbSizeModifier} />
					 &nbsp; &nbsp;
					<textarea className="cmbModifiersField" cols="6" rows="2" size="2" value={this.props.cmbModifiersField} onChange={this.props.updateCmbModifiersField} 	/>
					<span className="modifierText">modifier</span>
				</div>
				<div className="CmbRow2">
					<div className="subLabel Total armorLabel">
					Total
					</div>		
					<div className="bab armorLabel">
					Base attack Bonus
					</div>					
					<div className="armorLabel StrengthMod">
					Strength Modifier
					</div>
					<div className="armorLabel SizeMod">
					Size Modifier
					</div>	 
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchtoProps)(Cmb)