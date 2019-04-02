import React, { Component } from "React";
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
  }

  render() {
    return (
      <div className="Bab ui twelve wide stackable grid row">
        <div className="ui black button medium baseAttackBonus">

          Base Attack Bonus 
        </div>  
        <input className="babInput" size="6" value={this.props.baseAttackBonus} onChange={this.props.updateBaseAttackBonus} />
      
        <div className="ui black button medium spellResistance">

          Spell Resistance 
        </div> 
        <input className="babInput" size="6" value={this.props.spellResistance} onChange={this.props.updateSpellResistance} />
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bab);