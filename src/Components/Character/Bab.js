import React, { Component } from "react";
import { connect } from "react-redux";
import {
updateBaseAttackBonus,
updateSpellResistance,
} from "../../js/actions/babActions";

const mapDispatchToProps = { 
    updateBaseAttackBonus,
    updateSpellResistance 
};
const mapStateToProps = state => {
  return {
    baseAttackBonus:state.character.baseAttackBonus,
    spellResistance:state.character.spellResistance
  };
};
class Bab extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { 
      baseAttackBonus,
      updateSpellResistance,
      spellResistance,
      updateBaseAttackBonus,
    } = this.props;
    return (
      <div className="Bab ui twelve wide stackable grid row">
        <div className="ui black button medium baseAttackBonus">
          Base Attack Bonus 
        </div>  
        <input className="babInput" size="6" value={baseAttackBonus} onChange={updateBaseAttackBonus} />
      
        <div className="ui black button medium spellResistance">
          Spell Resistance 
        </div> 
        <input className="babInput" size="6" value={spellResistance} onChange={updateSpellResistance} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bab);