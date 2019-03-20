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
        <div className="gearItemsHeader gearHeader1">Item name</div> 
        <div className="gearPropertiesheader gearHeader2">Weight</div>
         {this.gearItemsFn()}
        <button className="ui small button green addNewGear" onClick={this.props.addGear} > + </button>
        <div className="GearSubHeaders ui small input">
          <input className="lightLoad" size="3" value={this.props.gear.lightLoad} onChange={this.props.updateLightLoad} />
          <input className="mediumLoad" size="3" value={this.props.gear.mediumLoad} onChange={this.props.updateMediumLoad} />
          <input className="heavyLoad" size="6" value={this.props.gear.heavyLoad} onChange={this.props.updateHeavyLoad} />
          <input className="liftOverHead" size="6" value={this.props.gear.liftOverHead} onChange={this.props.liftOverHead} />
          <input className="liftOffGround" size="4" value={this.props.gear.liftOffGround} onChange={this.props.liftOffGround} />
          <input className="dragOrPush" size="9"  value={this.props.gear.dragOrPush} onChange={this.props.dragOrPush} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gears);