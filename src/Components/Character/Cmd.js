import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	updateCmdSizeModifier
} from "../../js/actions/characterActions";

const mapDispatchtoProps = {
	updateCmdSizeModifier
}

const mapStateToProps = state => { 
	return{
		bab: state.character.baseAttackBonus,
		strengthMod: state.stat.stats.strMod,
		dexterityMod: state.stat.stats.dexMod, 
		sizeModifier: state.character.cmdSizeModifier
	}
}

class Cmd extends Component {
	
	constructor(props) {
      super(props);
      this.props = props;
    }

	calcTotal(){ 
	 	const {
			bab,
			strengthMod,
			dexterityMod, 
			sizeModifier
		} = this.props;
		return ((10) + parseInt(bab,10) + parseInt(strengthMod,10) + parseInt(dexterityMod,10) + parseInt(sizeModifier,10))
	}

	render(){ 
		const {
			bab,
			strengthMod,
			dexterityMod, 
			sizeModifier,
			updateCmdSizeModifier
		} = this.props;
		return(
  <div className="Cmd">
    <div className="CmdRow1 ui small input">
      <div className="CmdLabel ui small black button">CMD</div>
      <input className="CmdTotal" size="2" value={this.calcTotal()} readOnly />
      &nbsp; = &nbsp;
      <input className="CmdBaseAttackBonus" size="2" value={bab} readOnly />
      &nbsp; + &nbsp;
      <input className="CmdStrengthMod strength" size="2" value={strengthMod} readOnly />
      &nbsp; + &nbsp;
      <input className="CmdDexterity dexterity Mod" size="2" value={dexterityMod} readOnly />
      &nbsp; + &nbsp;
      <input className="CmdSizeModifier" size="2" value={sizeModifier} onChange={updateCmdSizeModifier} />
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