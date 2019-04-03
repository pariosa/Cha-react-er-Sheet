import React, { Component } from "react";
import { connect } from "react-redux";
import Spell from "./Spell";
import{
  addSpell,
  removeSpell,
} from '../../js/actions/spellsActions';

const mapStateToProps = (state, ownProps) => {
  return {
   spells: state.spells[ownProps.id].spells,
   level:ownProps.level,
  };
};  


const mapDispatchToProps = {
  addSpell,
  removeSpell 
}

class SpellLevel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  spells(){
    const { spells } = this.props;
    const spellArr = [];  
    spells.forEach(spell => {
      spellArr.push(
        <Spell
          key={spell.id}
          id={spell.id}
          level={spell.level} 
          title={spell.title}
          description={spell.description}
          isPrepared={spell.isPrepared}
          pageReference={spell.pageReference}
          school={spell.school} 
          usedSlot0={spell.usedSlot0}
          usedSlot1={spell.usedSlot1}
          usedSlot2={spell.usedSlot2}
          usedSlot3={spell.usedSlot3}
          usedSlot4={spell.usedSlot4}
          usedSlot5={spell.usedSlot5}
          usedSlot6={spell.usedSlot6}
          usedSlot7={spell.usedSlot7}
          usedSlot8={spell.usedSlot8}
        />
      );
    });
    return <div>{spellArr}</div>;
  };

  render() { 
    const{
      spellLevels,
      level,
      addSpell
    } = this.props;
    return (
      <div className="SpellLevel" level={level}> 
        {`level -  ${level}`}
        {this.spells()}
        <button type="button" className="ui small button green addSpellButton" onClick={addSpell}> + </button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellLevel);