import React, { Component } from 'react'; 
import { connect } from "react-redux";
import {
  updateGearName,  
  updateGearWeight, 
  removeGear
} from "../../js/actions/gearActions";

const mapDispatchToProps ={
	  updateGearName,
	  updateGearWeight, 
    removeGear
};
const mapStateToProps = (state, ownProps) => {
  return {
      id: ownProps.id,
      name:ownProps.name, 
      weight:ownProps.weight
  };
};
class Gear extends Component { 
  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    const gear = this;
    return (
      <div className="GearItem" id={gear.props.id}> 
        <div className="ui weaponRowOne"> 
          <div className="ui input gearName">
            <input type="text" size="16" value={gear.props.name} onChange={gear.props.updateGearName} />
          </div> 
          <div className="ui input gearWeight">
            <input type="text" size="3" value={gear.props.weight} onChange={gear.props.updateGearWeight} />
          </div> 
          <button type="button" className="red deleteGear" onClick={gear.props.removeGear}>x</button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gear);