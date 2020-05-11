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
    lightLoad: state.gear.lightLoad,
    mediumLoad: state.gear.mediumLoad,
    heavyLoad: state.gear.heavyLoad,
    liftOverHead: state.gear.liftOverHead,
    liftOffGround: state.gear.liftOffGround,
    dragOrPush: state.gear.dragOrPush
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

  gearItemsFn(gear){ 
    const gearItems = [];
    gear.forEach((item) => {
    gearItems.push(
      <Gear
        key={item.id}
        id={item.id}
        name={item.name} 
        weight={item.weight} 
        charges={item.charges}
      />
      );
    });
    return <div>{ gearItems }</div>;
  };


  render() {
    const {
      gear,
      lightLoad,
      mediumLoad,
      heavyLoad,
      liftOverHead,
      liftOffGround,
      dragOrPush,
      addGear,
      updateLightLoad,
      updateMediumLoad,
      updateHeavyLoad,
      updateLiftOverHead,
      updateLiftOffGround,
      updateDragOrPush
    } = this.props;

    return (
      <div className="GearItems">
        <div className="gearHeader">Gear</div>
        <div className="gearItemsHeader gearHeader1">Item name</div> 
        <div className="gearWeightHeader gearHeader2">Charges/Uses</div>

        <div className="gearWeightHeader gearHeader2">Weight</div>
        {this.gearItemsFn(gear)}
        <div className="addAnotherItem"><span>Add another item?</span></div>
        <button type="button" className="ui small button green addNewGear" onClick={addGear}> + </button>
        <span className="ui small input totalWeight"><input size="3" value={this.getTotalWeight()} readOnly /></span>
        <div className="loadCapacity">
          <div className="GearSubHeaders">
            <div className="GearSubHeader  ui small input">
              Light Load
              <input className="lightLoad" size="3" value={lightLoad} onChange={updateLightLoad} />
            </div>
            <div className="GearSubHeader ui small input">          
              Medium Load
              <input className="mediumLoad" size="3" value={mediumLoad} onChange={updateMediumLoad} />
            </div>
            <div className="GearSubHeader ui small input">
              Heavy Load 
              <input className="heavyLoad" size="3" value={heavyLoad} onChange={updateHeavyLoad} />
            </div>
          </div>
          <div className="gearSubHeader2">
            <div className="GearSubHeader2 ui small input">
              Lift Over Head
              <input className="liftOverHead" size="3" value={liftOverHead} onChange={updateLiftOverHead} />
            </div>
            <div className="GearSubHeader2 ui small input">
              Lift Off Ground
              <input className="liftOffGround" size="3" value={liftOffGround} onChange={updateLiftOffGround} />
            </div>
            <div className="GearSubHeader2 ui small input">
                Drag or Push
              <input className="dragOrPush" size="3" value={dragOrPush} onChange={updateDragOrPush} />
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