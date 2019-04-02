import React, { Component } from "react";
import { connect } from "react-redux";
import {
updateArmorBonus,
updateShieldBonus,
updateSizeModifier,
updateNaturalArmor,
updateDeflectionModifier,
updateArmorMiscModifier,
updateTouchArmorClass,
updateFlatFootedArmorClass,
updateAcModifiersField,
} from "../../js/actions/armorActions";

const mapDispatchToProps = {
    updateArmorBonus,
    updateShieldBonus,
    updateSizeModifier,
    updateNaturalArmor,
    updateDeflectionModifier,
    updateArmorMiscModifier,
    updateTouchArmorClass,
    updateFlatFootedArmorClass,
    updateAcModifiersField
};
const mapStateToProps = state => {
  return {
    dexMod:state.stat.stats.dexMod,
    armorBonus:state.armor.armorBonus,
    shieldBonus:state.armor.shieldBonus,
    sizeModifier:state.armor.sizeModifier,
    naturalArmor:state.armor.naturalArmor,
    deflectionModifier:state.armor.deflectionModifier,
    armorMiscModifier:state.armor.armorMiscModifier,
    touchArmorClass:state.armor.touchArmorClass,
    flatFootedArmorClass:state.armor.flatFootedArmorClass,
    acModifiersField:state.armor.acModifiersField
  };
};
class ArmorClass extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }
  
  getTotalArmor(){
    const {dexMod,armorBonus,shieldBonus,sizeModifier,naturalArmor,deflectionModifier,armorMiscModifier,touchArmorClass,flatFootedArmorClass,acModifiersField} = this.props

    return ( 10 + parseInt(armorBonus,10) + parseInt(shieldBonus,10) + parseInt(dexMod,10) + parseInt(sizeModifier,10)+ parseInt(naturalArmor,10)+ parseInt(deflectionModifier,10) + parseInt(armorMiscModifier,10))
  }

  getTouchAc(){
    const {dexMod,armorBonus,shieldBonus,sizeModifier,naturalArmor,deflectionModifier,armorMiscModifier,touchArmorClass,flatFootedArmorClass,acModifiersField} = this.props

    return 10 + parseInt(dexMod,10)
  }

  getFlatFooted(){
    const {dexMod,armorBonus,shieldBonus,sizeModifier,naturalArmor,deflectionModifier,armorMiscModifier,touchArmorClass,flatFootedArmorClass,acModifiersField} = this.props
    return ( 10 + parseInt(armorBonus,10) + parseInt(shieldBonus,10) + parseInt(sizeModifier,10)+ parseInt(naturalArmor,10)+ parseInt(deflectionModifier,10) + parseInt(armorMiscModifier,10))
  }

  render() {
    const {
      dexMod,
      armorBonus,
      shieldBonus,
      sizeModifier,
      naturalArmor,
      deflectionModifier,
      armorMiscModifier,
      touchArmorClass,
      flatFootedArmorClass,
      acModifiersField,
      updateArmorBonus,
      updateShieldBonus,
      updateSizeModifier,
      updateNaturalArmor,
      updateDeflectionModifier,
      updateArmorMiscModifier,
      updateTouchArmorClass,
      updateFlatFootedArmorClass,
      updateAcModifiersField
    } = this.props
    return (
      <div className="Armor ui ten wide stackable grid row">
        <div className="ui black button small ArmorDescriptor">
          AC
          <div className="subscript">Armor Class</div>
        </div> 
        <div className="ArmorFirstRow">
          <input size="2" value={this.getTotalArmor()} readOnly />
          <span className="plus"> = </span>
          <span className="plus"> 10 </span>
          <span className="plus"> + </span>
          <input size="2" value={armorBonus} onChange={updateArmorBonus} />
          <span className="plus"> + </span>
          <input size="2" value={shieldBonus} onChange={updateShieldBonus}  />
          <span className="plus"> + </span>
          <input size="2" className="dexterity" value={dexMod} readOnly  />
          <span className="plus"> + </span>
          <input size="2" value={sizeModifier} onChange={updateSizeModifier}  />
          <span className="plus"> + </span>
          <input size="2" value={naturalArmor} onChange={updateNaturalArmor}  />
          <span className="plus"> + </span>
          <input size="2" value={deflectionModifier} onChange={updateDeflectionModifier} />          
          <span className="plus"> + </span>
          <input size="2" value={armorMiscModifier} onChange={updateArmorMiscModifier}  />
        </div>
        <div className="ArmorSecondRow">
          <div className="armorLabel">Total</div>
          <div className="armorLabelBlank"/>
          <div className="armorLabel">Armor Bonus</div>
          <div className="armorLabel">Shield Bonus</div>
          <div className="armorLabel">Dex Modifier</div>
          <div className="armorLabel">Size Modifier</div>
          <div className="armorLabel">Natural Armor</div>
          <div className="armorLabel">Deflection Modifier</div>
          <div className="armorLabel">Misc. Modifier</div>
        </div>
        <div className="ArmorThirdRow">
          <div className="ui black button small TouchDescriptor">
             Touch
            <div className="subscript">Armor Class</div>
          </div>
          <input size="2" readOnly value={this.getTouchAc()} />
          <div className="ui black button small FlatDescriptor">
            Flat Footed
            <div className="subscript">Armor Class</div>
          </div>
          <input size="2" readOnly value={this.getFlatFooted()} />
          <textarea rows="1" cols="18" value={acModifiersField} onChange={updateAcModifiersField} />
          <span className="modifierText">modifier</span>
        </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArmorClass);