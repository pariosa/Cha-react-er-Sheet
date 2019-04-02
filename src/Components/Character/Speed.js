import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateBaseSpeed,
  updateBaseSpeedArmored,
  updateBaseSpeedSq,
  updateBaseSpeedArmoredSq,
  updateFlySpeed,
  updateFlyManeuverability,
  updateSwimSpeed,
  updateClimbSpeed,
  updateBurrowSpeed,
  updateSpeedTempMod,
} from "../../js/actions/movementActions";

const mapDispatchToProps = {
    updateBaseSpeed,
    updateBaseSpeedArmored,
    updateBaseSpeedSq,
    updateBaseSpeedArmoredSq,
    updateFlySpeed,
    updateFlyManeuverability,
    updateSwimSpeed,
    updateClimbSpeed,
    updateBurrowSpeed,
    updateSpeedTempMod
};
const mapStateToProps = state => {
  return {
    baseSpeed: state.speed.baseSpeed,
    baseSpeedSq: state.speed.baseSpeedSq,
    baseSpeedArmored: state.speed.baseSpeedArmored,
    baseSpeedArmoredSq: state.speed.baseSpeedArmoredSq,
    flySpeed: state.speed.flySpeed,
    flyManeuverability: state.speed.flyManeuverability,
    swimSpeed: state.speed.swimSpeed,
    climbSpeed: state.speed.climbSpeed,
    burrowSpeed: state.speed.burrowSpeed,
    tempMod: state.speed.tempMod
  };
};
class Speed extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      baseSpeed,
      updateBaseSpeed,
      baseSpeedSq,
      updateBaseSpeedSq,
      baseSpeedArmored,
      updateBaseSpeedArmored,
      baseSpeedArmoredSq,
      updateBaseSpeedArmoredSq,
      flySpeed,
      updateFlySpeed,
      flyManeuverability,
      swimSpeed,
      updateSwimSpeed,
      climbSpeed,
      updateClimbSpeed,
      burrowSpeed,
      updateBurrowSpeed,
      tempMod,
      updateSpeedTempMod
    } = this.props;

    return (
      <div className="Speed stackable grid row">
        <div className="ui black two wide button small speedDescriptor">
          <strong>Speed</strong>
          <div className="subscript">land</div>
        </div>
        <div className="speedGroup">
          <input className="speedFieldFt" size="1" value={baseSpeed} onChange={updateBaseSpeed} />
          <span className="subtext">ft.</span>
          <input className="speedFieldSq" size="1" value={baseSpeedSq} onChange={updateBaseSpeedSq}  />
          <span className="subtext">sq.</span> 
        </div>
        <div className="speedGroup">
          <input size="1" className="speedFieldFt" value={baseSpeedArmored} onChange={updateBaseSpeedArmored} />
          <span className="subtext">ft.</span>
          <input size="1" className="speedFieldSq" value={baseSpeedArmoredSq} onChange={updateBaseSpeedArmoredSq} />
          <span className="subtext">sq.</span>
        </div>
        <div className="inline-block subscript baseSpeed">
            base speed
        </div>
        <div className="inline-block subscript withArmor">
            with armor
        </div> 
        <div className="speedSecondRow">
          <div className="speedGroupFly">
            <input size="1" className="speedFieldFt" value={flySpeed} onChange={updateFlySpeed} />
            <span className="subtext">ft.</span>
            <input size="4" className="speedFieldSq" value={flyManeuverability} onChange={updateFlyManeuverability} /> 
          </div>
          <div className="speedGroupThree">
            <input size="1" value={swimSpeed} onChange={updateSwimSpeed} />
            <span className="subtext3">ft.</span>
            <input size="1" value={climbSpeed} onChange={updateClimbSpeed} />
            <span className="subtext3">ft.</span>
            <input size="1" value={burrowSpeed} onChange={updateBurrowSpeed} />
            <span className="subtext3">ft.</span>
          </div>
          <div className="speedGroupTemp inline-block">
            <div className="speedTempModifierHeadline">Temp Modifiers</div>
            <textarea cols="5" rows="2" value={tempMod} onChange={updateSpeedTempMod} />
          </div>
          <div>
            <div className="inline-block subscript fly">
              Fly
            </div>
            <div className="inline-block subscript maneuverability">
              Maneuverability
            </div>  
            <div className="inline-block subscript swim">
              Swim
            </div>
            <div className="inline-block subscript climb">
              Climb
            </div> 
            <div className="inline-block subscript burrow">
              Burrow
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
)(Speed);