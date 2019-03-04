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
    armorBonus:state.action.character.armor.armorBonus,
    shieldBonus:state.action.character.armor.shieldBonus,
    sizeModifier:state.action.character.armor.sizeModifier,
    naturalArmor:state.action.character.armor.naturalArmor,
    deflectionModifier:state.action.character.armor.deflectionModifier,
    armorMiscModifier:state.action.character.armor.armorMiscModifier,
    touchArmorClass:state.action.character.armor.touchArmorClass,
    flatFootedArmorClass:state.action.character.armor.flatFootedArmorClass,
    acModifiersField:state.action.character.armor.acModifiersField
  };
};
class ArmorClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Armor Class stuff goes here
      </div>

    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArmorClass);