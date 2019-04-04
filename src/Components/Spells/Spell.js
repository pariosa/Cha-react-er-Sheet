import React, { Component } from 'react';
import { connect } from "react-redux";
import{
  updateSpell,
  removeSpell,
} from '../../js/actions/spellsActions';


const mapStateToProps = (state, ownProps) => { 
  return {   
      id:ownProps.id,
      level:ownProps.level, 
      title:ownProps.title,
      description:ownProps.description,
      isPrepared:ownProps.isPrepared,
      pageReference:ownProps.pageReference,
      school:ownProps.school, 
      usedSlot0:ownProps.usedSlot0,
      usedSlot1:ownProps.usedSlot1,
      usedSlot2:ownProps.usedSlot2,
      usedSlot3:ownProps.usedSlot3,
      usedSlot4:ownProps.usedSlot4,
      usedSlot5:ownProps.usedSlot5,
      usedSlot6:ownProps.usedSlot6,
      usedSlot7:ownProps.usedSlot7,
      usedSlot8:ownProps.usedSlot8
  };
};  

const mapDispatchToProps = {
	updateSpell,
	removeSpell
}

class Spell extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() { 
    const{
     id,
     level,
     title,
     description,
     isPrepared,
     pageReference,
     school,
     usedSlot0,
     usedSlot1,
     usedSlot2,
     usedSlot3,
     usedSlot4,
     usedSlot5,
     usedSlot6,
     usedSlot7,
     usedSlot8,
     updateSpell,
     removeSpell,
    } = this.props;
    return (
      <div className="ui input small Spell" id={id}> 
        <input type="checkbox" checked={isPrepared} onChange={updateSpell} target="isPrepared" />
        <input type="text" size="20" placeholder="Spell Name" value={title} onChange={updateSpell} target="title" />
        <textarea rows="2" cols="80" type="text" placeholder="Description" value={description} onChange={updateSpell} target="description" /> 
        <input type="text" size="8" placeholder="page #" value={pageReference} onChange={updateSpell} target="pageReference" />
        <input type="school" size="15" placeholder="School" value={school} onChange={updateSpell} target="school"  /> 
        <input type="checkbox" checked={usedSlot0} onChange={updateSpell} target="usedSlot0" />
        <input type="checkbox" checked={usedSlot1} onChange={updateSpell} target="usedSlot1" />
        <input type="checkbox" checked={usedSlot2} onChange={updateSpell} target="usedSlot2" />
        <input type="checkbox" checked={usedSlot3} onChange={updateSpell} target="usedSlot3" />
        <input type="checkbox" checked={usedSlot4} onChange={updateSpell} target="usedSlot4" />
        <input type="checkbox" checked={usedSlot5} onChange={updateSpell} target="usedSlot5" />
        <input type="checkbox" checked={usedSlot6} onChange={updateSpell} target="usedSlot6" />
        <input type="checkbox" checked={usedSlot7} onChange={updateSpell} target="usedSlot7" />
        <input type="checkbox" checked={usedSlot8} onChange={updateSpell} target="usedSlot8" /> 
        <button type="button" onClick={removeSpell} className="removeSpell">x</button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spell);