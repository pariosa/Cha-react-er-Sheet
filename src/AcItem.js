import React, { Component } from 'react'; 
import { connect } from "react-redux";
import {
  updateAcItemName,
  updateAcItemBonus,
  updateAcItemCheckPenalty,
  updateAcItemType,
  updateAcItemSpellFailure,
  updateAcItemWeight,
  updateAcItemProperties, 
  removeAcItem
} from "./js/actions/acItemsActions";

const mapDispatchToProps = dispatch => {
  return {
	  updateAcItemName: name => dispatch(updateAcItemName(name)),
	  updateAcItemBonus: bonus => dispatch(updateAcItemBonus(bonus)),
	  updateAcItemCheckPenalty: checkPenalty => dispatch(updateAcItemCheckPenalty(checkPenalty)),
	  updateAcItemType: type => dispatch(updateAcItemType(type)),
	  updateAcItemSpellFailure: failure => dispatch(updateAcItemSpellFailure(failure)),
	  updateAcItemWeight: weight => dispatch(updateAcItemWeight(weight)),
	  updateAcItemProperties: properties => dispatch(updateAcItemProperties(properties)), 
	  removeAcItem: item => dispatch(removeAcItem(item))
  };
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
  }

  render() {
    return (
      <div className="acItem" id={this.props.id} > 
        <div className="ui acItemRowOne"> 
          <div className="ui input acItemName">
            <input type="text" size="16" value={this.props.name} onChange={this.props.updateAcItemName} />
          </div>
          <div className="ui input acItemBonus">
            <input type="text" size="3" value={this.props.bonus} onChange={this.props.updateAcItemBonus} />
          </div>
          <div className="ui input acItemType">
            <input type="text" size="3" value={this.props.type} onChange={this.props.updateAcItemType} />
          </div>
          <div className="ui input acItemCheckPenalty">
            <input type="text" size="6" value={this.props.checkPenalty} onChange={this.props.updateAcItemCheckPenalty} />
          </div> 

          <div className="ui input acItemSpellFailure">
            <input type="text" size="6" value={this.props.spellFailure} onChange={this.props.updateAcItemSpellFailure} />
          </div>
          <div className="ui input acItemWeight">
            <input type="text" size="3" value={this.props.weight} onChange={this.props.updateAcItemWeight} />
 		  </div>
 		  <div className="ui input acItemProperties">
            <input type="text" size="8" value={this.props.properties} onChange={this.props.updateAcItemProperties} />
 		  </div>
 		  <button className="red deleteAcItem" onClick={this.props.removeAcItem} >x</button> 
       </div>
     </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcItem);