import React, { Component } from "React";
import { connect } from "react-redux";
import {
updateBaseAttackBonus,
updateSpellResistance,
} from "./js/actions/babActions";

const mapDispatchToProps = dispatch => {
  return {
    updateBaseAttackBonus: bab => dispatch(updateBaseAttackBonus(bab)),
    updateSpellResistance: spellResistance => dispatch(updateSpellResistance(spellResistance)),
  };
};
const mapStateToProps = state => {
  return {
    baseAttackBonus:state.action.character.baseAttackBonus,
    spellResistance:state.action.character.spellResistance
  };
};
class Bab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Bab goes here
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bab);