import React, { Component } from "react";
import { connect } from "react-redux";
import SpellSlot from "./SpellSlot";

const mapStateToProps = state => {
  return {
   spellslots: state.spellslots
  };
};  


class SpellSlots extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  spellSlots(){
    const { spellslots } = this.props;
    const spellSlotsArr = []; 
    spellslots.forEach(slot => {
      spellSlotsArr.push(
        <SpellSlot 
          key={slot.level}
          id={slot.level}
          level={slot.level} 
          spellsKnown={slot.spellsKnown}
          spellSaveDc={slot.spellSaveDc}
          spellsPerDay={slot.spellsPerDay}
          bonusSpells={slot.bonusSpells} 
        />
      );
    });
    return <div>{spellSlotsArr}</div>;
  };

  render() { 
    const{
      spellslots
    } = this.props;
    return (
      <div className="SpellSlots">
        {this.spellSlots()}
      </div>
    );
  }
}
export default connect(
  mapStateToProps 
)(SpellSlots);