import React, { Component } from 'react'; 
import { connect } from "react-redux";
import {
  updateGearName,  
  updateGearCharges,
  updateGearWeight, 
  removeGear
} from "../../js/actions/gearActions";

const mapDispatchToProps ={
	  updateGearName,
	  updateGearWeight, 
    removeGear,
    updateGearCharges
};
const mapStateToProps = (state, ownProps) => {
  
    return {
      id: ownProps.id,
      name:ownProps.name, 
      weight:ownProps.weight,
      charges:ownProps.charges
    };
  

};
class Gear extends Component { 
  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    const {
      id,
      name,
      weight,
      charges,
      updateGearName,
      updateGearCharges,
      updateGearWeight, 
      removeGear
    } = this.props;
    return (
      <div className="GearItem" id={id}> 
        <div className="ui weaponRowOne"> 
          <div className="ui input gearName">
            <input type="text" size="16" value={name} onChange={updateGearName} />
          </div> 
          <div className="ui input gearWeight">
            <input type="text" size="3" value={weight} onChange={updateGearWeight} />
          </div> 
          <div className="ui input gearCharges">
            <input type="text" size="3" value={charges} onChange={updateGearCharges} />
          </div> 
          <button type="button" className="red deleteGear" onClick={removeGear}>x</button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gear);