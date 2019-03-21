import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	updateCmdSizeModifier
} from "./js/actions/characterActions";
const mapDispatchtoProps = dispatch =>{
	return{
		updateCmdSizeModifier: modifier => dispatch(updateCmdSizeModifier(modifier))
	}
}

const mapStateToProps = state => {
	return{
		bab: state.character.baseAttackBonus,
		strengthMod: state.stat.stats.strMod,
		dexterityMod: state.stat.stats.strMod, 
		sizeModifier: state.character.cmdSizeModifier
	}
}

class Cmd extends Component {
	calcTotal = () =>{ 
		debugger;
		return ((10) + parseInt(this.props.bab) + parseInt(this.props.strengthMod) + parseInt(this.props.dexterityMod) + parseInt(this.props.sizeModifier))
	}
	render(){
		return(
			<div className="Cmd">

				<div className="CmdRow1 ui small input">
				<div className="CmdLabel ui small black button">CMD</div>
					<input className="CmdTotal" size="2" value={this.calcTotal()} readOnly />
					&nbsp; = &nbsp;
					<input className="CmdBaseAttackBonus" size="2" value={this.props.bab} readOnly />
					&nbsp; + &nbsp;
					<input className="CmdStrengthMod strength" size="2" value={this.props.strengthMod} readOnly />
					&nbsp; + &nbsp;
					<input className="CmdDexterity dexterity Mod" size="2" value={this.props.dexterityMod} readOnly />
					&nbsp; + &nbsp;
					<input className="CmdSizeModifier" size="2" value={this.props.sizeModifier} onChange={this.props.updateCmdSizeModifier} />
					&nbsp; + &nbsp;
					10
				</div>
				<div className="CmdRow2">
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
					Dex Modifier
					</div>					
					<div className="armorLabel MiscMod">
					Size Modifier
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchtoProps)(Cmd)