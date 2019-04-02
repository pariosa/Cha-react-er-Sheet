import React, { Component } from 'react'; 
import { connect } from "react-redux";
import {
  updateGearName,  
  updateGearWeight, 
  removeGear
} from "../../js/actions/gearActions";

const mapDispatchToProps = dispatch => {
  return {
	  updateGearName: name => dispatch(updateGearName(name)),
	  updateGearWeight: weight => dispatch(updateGearWeight(weight)), 
    removeGear: gear => dispatch(removeGear(gear)), 
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
      id: ownProps.id,
      name:ownProps.name, 
      weight:ownProps.weight
  };
};
class Gear extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="GearItem" id={this.props.id}> 
        <div className="ui weaponRowOne"> 
          <div className="ui input gearName">
            <input type="text" size="16" value={this.props.name} onChange={this.props.updateGearName} />
          </div> 
          <div className="ui input gearWeight">
            <input type="text" size="3" value={this.props.weight} onChange={this.props.updateGearWeight} />
          </div> 
          <button className="red deleteGear" onClick={this.props.removeGear}>x</button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gear);