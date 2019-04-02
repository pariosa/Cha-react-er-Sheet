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
   	spellsKnown: state.spellslots[ownProps.id].spellsKnown,
   	spellSaveDc: state.spellslots[ownProps.id].spellSaveDc,
    spellsPerDay: state.spellslots[ownProps.id].spellsPerDay,
    bonusSpells: state.spellslots[ownProps.id].bonusSpells,
    id: state.spellslots[ownProps.id].level
  };
};
const mapDispatchToProps = { 
    updateSpellsKnown,
    updateSpellDc,
    updateSpellsPerDay,
    updateBonusSpells
};

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const {
      id,
      spellsKnown,
      spellSaveDc,
      spellsPerDay,
      bonusSpells,
      updateSpellsKnown,
      updateSpellDc,
      updateSpellsPerDay,
      updateBonusSpells
  } = this.state;
    return (
      <div className="spellSlotCapsule" id={id}> 
        <div className="slotName">
          {`level ${id}`}
        </div>
        <input
          readOnly
          className="SpellsKnown"
          style={{maxWidth:'40px'}}
          type="number"
          value={spellsKnown}
          onChange={updateSpellsKnown}
        /> 
        <input
          className="ranks"
          style={{maxWidth:'40px'}}
          type="number"
          value={spellSaveDc}
          onChange={updateSpellDc}
        />
        <input
          className="spellsPerDay"
          style={{maxWidth:'40px'}}
          type="number"
          value={spellsPerDay}
          onChange={updateSpellsPerDay}
        />
        <input
          className="BonusSpells"
          style={{maxWidth:'40px'}}
          type="number"
          value={spellsPerDay}
          onChange={updateSpellsPerDay}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
