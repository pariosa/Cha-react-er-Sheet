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
const mapDispatchToProps = dispatch => {
  return {
    updateSpellsKnown: count => dispatch(updateSpellsKnown(count)),
    updateSpellDc: dc => dispatch(updateSpellDc(dc)),
    updateSpellsPerDay: spellsPerDay => dispatch(updateSpellsPerDay(spellsPerDay)),
    updateBonusSpells: bonus => dispatch(updateBonusSpells(bonus))
  };
};
class Skill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="spellSlotCapsule" id={this.props.id}> 
        <div className="slotName">
          level {this.props.id}
        </div>
        <input
          readOnly
          className="SpellsKnown"
          style={{maxWidth:'40px'}}
          type="number"
          value={
            this.props.spellsKnown
          }
          onChange={this.updateSpellsKnown}
        /> 
        <input
          className="ranks"
          style={{maxWidth:'40px'}}
          type="number"
          value={this.props.spellSaveDc}
          onChange={this.props.updateSpellDc}
        />
        <input
          className="spellsPerDay"
          style={{maxWidth:'40px'}}
          type="number"
          value={this.props.spellsPerDay}
          onChange={this.props.updateSpellsPerDay}
        />
       	<input
          className="BonusSpells"
          style={{maxWidth:'40px'}}
          type="number"
          value={this.props.spellsPerDay}
          onChange={this.props.updateSpellsPerDay}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
