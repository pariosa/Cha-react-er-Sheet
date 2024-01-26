import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  removeAcItem, updateAcItemBonus,
  updateAcItemCheckPenalty, updateAcItemName, updateAcItemProperties, updateAcItemSpellFailure, updateAcItemType, updateAcItemWeight
} from "../../js/actions/acItemsActions";

const mapDispatchToProps = {
	  updateAcItemName,
	  updateAcItemBonus,
	  updateAcItemCheckPenalty,
	  updateAcItemType,
	  updateAcItemSpellFailure,
	  updateAcItemWeight,
	  updateAcItemProperties, 
	  removeAcItem
};
const mapStateToProps = (state, ownProps) => {
  return {
      id: ownProps.id,
      name:ownProps.name,
      bonus:ownProps.bonus,
      checkPenalty:ownProps.checkPenalty,
      type:ownProps.type,
      spellFailure:ownProps.range,
      weight:ownProps.weight,
      properties:ownProps.properties
  };
};

class AcItem extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      id,
      name,
      updateAcItemName,
      bonus,
      updateAcItemBonus,
      type,
      updateAcItemType,
      checkPenalty,
      updateAcItemCheckPenalty,
      spellFailure,
      updateAcItemSpellFailure,
      weight,
      updateAcItemWeight,
      properties,
      updateAcItemProperties,
      removeAcItem
    } = this.props;
    return (
      <div className="acItem" id={id}> 
        <div className="ui acItemRowOne"> 
          <div className="ui input acItemName">
            <input type="text" size="16" value={name} onChange={updateAcItemName} />
          </div>
          <div className="ui input acItemBonus">
            <input type="text" size="3" value={bonus} onChange={updateAcItemBonus} />
          </div>
          <div className="ui input acItemType">
            <input type="text" size="3" value={type} onChange={updateAcItemType} />
          </div>
          <div className="ui input acItemCheckPenalty">
            <input type="text" size="6" value={checkPenalty} onChange={updateAcItemCheckPenalty} />
          </div> 
          <div className="ui input acItemSpellFailure">
            <input type="text" size="6" value={spellFailure} onChange={updateAcItemSpellFailure} />
          </div>
          <div className="ui input acItemWeight">
            <input type="text" size="3" value={weight} onChange={updateAcItemWeight} />
          </div>
          <div className="ui input acItemProperties">
            <input type="text" size="8" value={properties} onChange={updateAcItemProperties} />
          </div>
          <button type="button" className="red deleteAcItem" onClick={removeAcItem}>x</button> 
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcItem);