import React, { Component } from "react";
import { connect } from "react-redux";
import { 
	updateSpellsKnown,
	updateSpellDc,
	updateSpellsPerDay,
	updateBonusSpells 
} from "../../js/actions/spellSlotsActions";

const mapStateToProps = (state, ownProps) => { 
  return {
    id:state.spellslots[ownProps.level].id,
    level:state.spellslots[ownProps.level].level,
   	spellsKnown: state.spellslots[ownProps.level].spellsKnown,
   	spellSaveDc: state.spellslots[ownProps.level].spellSaveDc,
    spellsPerDay: state.spellslots[ownProps.level].spellsPerDay,
    bonusSpells: state.spellslots[ownProps.level].bonusSpells,
  };
};
const mapDispatchToProps = { 
    updateSpellsKnown,
    updateSpellDc,
    updateSpellsPerDay,
    updateBonusSpells
};

class SpellSlot extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() { 
    const { 
      level,
      spellsKnown,
      spellSaveDc,
      spellsPerDay,
      bonusSpells,
      updateSpellsKnown,
      updateSpellDc,
      updateSpellsPerDay,
      updateBonusSpells
    } = this.props;
    return (
      <div className="spellSlotCapsule" id={level}> 
        <div className="slotName">
          {`level ${level}`}
        </div>
        <input 
          className="SpellsKnown"
          style={{maxWidth:'40px'}}
          type="number"
          min="0"
          value={spellsKnown}
          onChange={updateSpellsKnown}
        /> 
        <input
          className="spellSaveDc"
          style={{maxWidth:'40px'}}          
          type="number"
          min="0"
          value={this.props.spellSaveDc}
          onChange={updateSpellDc}
        />
        <input
          className="spellsPerDay"
          style={{maxWidth:'40px'}}          
          type="number"
          min="0"
          value={this.props.spellsPerDay}
          onChange={updateSpellsPerDay}
        />
        <input
          className="BonusSpells"
          style={{maxWidth:'40px'}}          
          type="number"
          min="0"
          value={this.props.bonusSpells}
          onChange={updateBonusSpells}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellSlot);
