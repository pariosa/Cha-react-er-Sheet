import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	updateCmbModifiersField,
	updateCmbSizeModifier
} from "../../js/actions/characterActions";

const mapDispatchtoProps = { 
	updateCmbModifiersField,
	updateCmbSizeModifier 
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
	constructor(props){
		super(props);
		this.props = props;
	}

	calcTotal (){ 
		const {
			bab,
			strengthMod, 
			sizeModifier
		} = this.props;
		return (parseInt(bab,10) + parseInt(strengthMod,10) + parseInt(sizeModifier,10))
	}

	render(){
		const {
			bab,
			strengthMod,
			cmbModifiersField,
			sizeModifier,
			updateCmbModifiersField,
			updateCmbSizeModifier 
		} = this.props;
		return(
  <div className="Cmb">
    <div className="CmbRow1 ui small input">
      <div className="cmbLabel ui small black button">CMB</div>
      <input className="cmbTotal" size="2" value={this.calcTotal()} readOnly />
          &nbsp; = &nbsp;
      <input className="cmbBaseAttackBonus" size="2" value={bab} readOnly />
		&nbsp; + &nbsp;
      <input className="strength" size="2" value={strengthMod} readOnly />
		&nbsp; + &nbsp;
      <input className="cmbSizeModifier" size="2" value={sizeModifier} onChange={updateCmbSizeModifier} />
        &nbsp; &nbsp;
      <textarea className="cmbModifiersField" cols="6" rows="2" size="2" value={cmbModifiersField} onChange={updateCmbModifiersField} />
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