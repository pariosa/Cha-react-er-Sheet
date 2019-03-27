import React, { Component } from "react";
import { connect } from "react-redux";
import SpellSlot from "./SpellSlot";

const mapStateToProps = state => {
  return {
   spellslots: state.spellslots
  };
};
const mapDispatchToProps = dispatch => {
  return {
  
  };
};
let skills = [];
class SpellSlots extends Component {
  constructor(props) {
    super(props);
  }
  spellSlots = () => {
    let spellSlots = []; 
    this.props.spellslots.forEach((slot, i) => {
      spellSlots.push(
        <SpellSlot 
          key={i}
          id={i}
          level={slot.level} 
          spellsKnown={slot.spellsKnown}
		  spellSaveDc={slot.spellSaveDc}
		  spellsPerDay={slot.spellsPerDay}
		  bonusSpells={slot.bonusSpells} 
        />
      );
    });
    return <div>{spellSlots}</div>;
  };
  render() { 
    return (
      <div className="SpellSlots">
        {this.spellSlots()}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellSlots);