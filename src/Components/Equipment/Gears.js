import React, { Component } from "react";
import { connect } from "react-redux";
import Gear from './Gear';
import {
addGear,
updateLightLoad,
updateMediumLoad,
updateHeavyLoad,
updateLiftOverHead,
updateLiftOffGround,
updateDragOrPush
} from "../../js/actions/gearActions";

const mapDispatchToProps = {
    addGear,
    updateLightLoad,
    updateMediumLoad,
    updateHeavyLoad,
    updateLiftOverHead,
    updateLiftOffGround,
    updateDragOrPush
};

const mapStateToProps = state => {
  return {
    gear: state.gear.gear,
  };
};


class Gears extends Component { 
  constructor(props){
    super(props);
    this.props = props;
  }

  getTotalWeight(){
    const gears = this;
    let x = 0;
    gears.props.gear.forEach(gear=>{
      if(gear.weight !== ''){
        x += parseInt(gear.weight,10.00);
      }
    }); 
    return x;
  }

  gearItemsFn(){
    const gears = this;
    const gearItems = [];
    gears.props.gear.forEach((item) => {
    gearItems.push(
      <Gear
        key={item.id}
        id={item.id}
        name={item.name} 
        weight={item.weight} 
      />
      );
    });
    return <div>{ gearItems }</div>;
  };


  render() {
    const gears = this;
    return (
      <div className="GearItems">
        <div className="gearHeader">Gear</div>
        <div className="gearItemsHeader gearHeader1">Item name</div> 
        <div className="gearWeightHeader gearHeader2">Weight</div>
        {this.gearItemsFn()}
        <div className="addAnotherItem"><span>Add another item?</span></div>
        <button type="button" className="ui small button green addNewGear" onClick={gears.props.addGear}> + </button>
        <span className="ui small input totalWeight"><input size="3" value={gears.getTotalWeight()} readOnly /></span>
        <div className="loadCapacity">
          <div className="GearSubHeaders">
            <div className="GearSubHeader  ui small input">
              Light Load
              <input className="lightLoad" size="3" value={gears.props.gear.lightLoad} onChange={gears.props.updateLightLoad} />
            </div>
            <div className="GearSubHeader ui small input">          
              Medium Load
              <input className="mediumLoad" size="3" value={gears.props.gear.mediumLoad} onChange={gears.props.updateMediumLoad} />
            </div>
            <div className="GearSubHeader ui small input">
              Heavy Load 
              <input className="heavyLoad" size="3" value={gears.props.gear.heavyLoad} onChange={gears.props.updateHeavyLoad} />
            </div>
          </div>
          <div className="gearSubHeader2">
            <div className="GearSubHeader2 ui small input">
              Lift Over Head
              <input className="liftOverHead" size="3" value={gears.props.gear.liftOverHead} onChange={gears.props.liftOverHead} />
            </div>
            <div className="GearSubHeader2 ui small input">
              Lift Off Ground
              <input className="liftOffGround" size="3" value={gears.props.gear.liftOffGround} onChange={gears.props.liftOffGround} />
            </div>
            <div className="GearSubHeader2 ui small input">
                Drag or Push
              <input className="dragOrPush" size="3" value={gears.props.gear.dragOrPush} onChange={gears.props.dragOrPush} />
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gears);