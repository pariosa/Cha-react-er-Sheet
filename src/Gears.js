import React, { Component } from "React";
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
} from "./js/actions/gearActions";

const mapDispatchToProps = dispatch => {
  return {
    addGear: item => dispatch(addGear(item)),
    updateLightLoad: load => dispatch(updateLightLoad(load)),
    updateMediumLoad: load => dispatch(updateMediumLoad(load)),
    updateHeavyLoad: load => dispatch(updateHeavyLoad(load)),
    updateLiftOverHead: load => dispatch(updateLiftOverHead(load)),
    updateLiftOffGround: load => dispatch(updateLiftOffGround(load)),
    updateDragOrPush: load => dispatch(updateDragOrPush(load))
  };
};
const mapStateToProps = state => {
  return {
    gear: state.gear.gear,
  };
};
class Gears extends Component {
  constructor(props) {
    super(props);
  };
  getTotalWeight = () =>{
    let x = 0;
    this.props.gear.forEach(gear=>{
      if(gear.weight !== ''){
        x = x + parseInt(gear.weight);
      }
    }); 
    return x;
  }
  gearItemsFn = () => {
    let gearItems = [];
    this.props.gear.forEach((item, i) => {
    gearItems.push(
        <Gear
          key={i}
          id={item.id}
          name={item.name} 
          weight={item.weight} 
        />
      );
    });
    return <div>{gearItems}</div>;
  };
  render() {
    return (
      <div className="GearItems">
        <div className="gearHeader">Gear</div>
        <div className="gearItemsHeader gearHeader1">Item name</div> 
        <div className="gearWeightHeader gearHeader2">Weight</div>
         {this.gearItemsFn()}
         <div className="addAnotherItem"><span>Add another item?</span></div>
        <button className="ui small button green addNewGear" onClick={this.props.addGear} > + </button>
        <span className="ui small input totalWeight"><input size="3" value={this.getTotalWeight()} readOnly /></span>
        <div className="loadCapacity">
          <div className="GearSubHeaders">
            <div className="GearSubHeader  ui small input">
              Light Load
              <input className="lightLoad" size="3" value={this.props.gear.lightLoad} onChange={this.props.updateLightLoad} />
            </div>
            <div className="GearSubHeader ui small input">          
              Medium Load
              <input className="mediumLoad" size="3" value={this.props.gear.mediumLoad} onChange={this.props.updateMediumLoad} />
            </div>
            <div className="GearSubHeader ui small input">
              Heavy Load 
              <input className="heavyLoad" size="3" value={this.props.gear.heavyLoad} onChange={this.props.updateHeavyLoad} />
            </div>
          </div>
          <div className="gearSubHeader2">
            <div className="GearSubHeader2 ui small input">
              Lift Over Head
              <input className="liftOverHead" size="3" value={this.props.gear.liftOverHead} onChange={this.props.liftOverHead} />
            </div>
            <div className="GearSubHeader2 ui small input">
              Lift Off Ground
              <input className="liftOffGround" size="3" value={this.props.gear.liftOffGround} onChange={this.props.liftOffGround} />
            </div>
            <div className="GearSubHeader2 ui small input">
                Drag or Push
               <input className="dragOrPush" size="3"  value={this.props.gear.dragOrPush} onChange={this.props.dragOrPush} />
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