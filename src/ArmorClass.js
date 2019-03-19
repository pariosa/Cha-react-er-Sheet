import React, { Component } from "React";
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
} from "./js/actions/armorActions";

const mapDispatchToProps = dispatch => {
  return {
    updateArmorBonus: armorBonus => dispatch(updateArmorBonus(armorBonus)),
    updateShieldBonus: shieldBonus => dispatch(updateShieldBonus(shieldBonus)),
    updateSizeModifier: sizeModifier => dispatch(updateSizeModifier(sizeModifier)),
    updateNaturalArmor: naturalArmor => dispatch(updateNaturalArmor(naturalArmor)),
    updateDeflectionModifier: deflectionModifier => dispatch(updateDeflectionModifier(deflectionModifier)),
    updateArmorMiscModifier: armorMiscModifier => dispatch(updateArmorMiscModifier(armorMiscModifier)),
    updateTouchArmorClass: touchArmorClass => dispatch(updateTouchArmorClass(touchArmorClass)),
    updateFlatFootedArmorClass: flatFootedArmorClass => dispatch( updateFlatFootedArmorClass(flatFootedArmorClass)),
    updateAcModifiersField: acModifiersField => dispatch(updateAcModifiersField(acModifiersField))
  };
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
  }
  
  getTotalArmor = () =>{
    return ( 10 + parseInt(this.props.armorBonus) + parseInt(this.props.shieldBonus) + parseInt(this.props.dexMod) + parseInt(this.props.sizeModifier)+ parseInt(this.props.naturalArmor)+ parseInt(this.props.deflectionModifier) + parseInt(this.props.armorMiscModifier))
  }
  getTouchAc = () =>{
    return 10 + parseInt(this.props.dexMod)
  }
  getFlatFooted = () =>{
    return ( 10 + parseInt(this.props.armorBonus) + parseInt(this.props.shieldBonus) + parseInt(this.props.sizeModifier)+ parseInt(this.props.naturalArmor)+ parseInt(this.props.deflectionModifier) + parseInt(this.props.armorMiscModifier))
  }

  render() {
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
        <input size="2" value={this.props.armorBonus} onChange={this.props.updateArmorBonus} />
          <span className="plus"> + </span>
        <input size="2" value={this.props.shieldBonus} onChange={this.props.updateShieldBonus}  />
          <span className="plus"> + </span>
        <input size="2" className="dexterity" value={this.props.dexMod} readOnly  />
          <span className="plus"> + </span>
        <input size="2" value={this.props.sizeModifier} onChange={this.props.updateSizeModifier}  />
          <span className="plus"> + </span>
        <input size="2" value={this.props.naturalArmor} onChange={this.props.updateNaturalArmor}  />
          <span className="plus"> + </span>
        <input size="2" value={this.props.deflectionModifier} onChange={this.props.updateDeflectionModifier} />          
            <span className="plus"> + </span>
        <input size="2" value={this.props.armorMiscModifier} onChange={this.props.updateArmorMiscModifier}  />
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
          <textarea rows="1" cols="18" value={this.props.acModifiersField} onChange={this.props.updateAcModifiersField} />
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