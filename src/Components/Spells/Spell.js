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
     usedSlot8
    } = this.props;
    return (
      <div className="ui input small Spell"> 
      <input type="text" size="30" placeholder="Spell Name" value={title} onChange={updateSpell} />
      <textarea type="text" placeholder="Description" value={description} onChange={updateSpell} /> 
      <input type="text" size="8" placeholder="page #" value={title} onChange={updateSpell} />

      <input type="school" size="15" placeholder="School" value={school} onChange={updateSpell} />
      <br />
      <input type="checkbox" checked={usedSlot0} onChange={updateSpell} />
      <input type="checkbox" checked={usedSlot1} onChange={updateSpell} />
      <input type="checkbox" checked={usedSlot2} onChange={updateSpell} />
      <input type="checkbox" checked={usedSlot3} onChange={updateSpell} />
      <input type="checkbox" checked={usedSlot4} onChange={updateSpell} />
      <input type="checkbox" checked={usedSlot5} onChange={updateSpell} />
      <input type="checkbox" checked={usedSlot6} onChange={updateSpell} />
      <input type="checkbox" checked={usedSlot7} onChange={updateSpell} />
      <input type="checkbox" checked={usedSlot8} onChange={updateSpell} /> 

       
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spell);