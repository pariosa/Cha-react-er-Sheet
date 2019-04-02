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
  }

  render() {
    return (
      <div className="Speed stackable grid row">
        <div className="ui black two wide button small speedDescriptor">
          <strong>Speed</strong>
          <div className="subscript">land</div>
        </div>
        <div className="speedGroup">
          <input className="speedFieldFt" size="1" value={this.props.baseSpeed} onChange={this.props.updateBaseSpeed} />
          <span className="subtext">ft.</span>
          <input className="speedFieldSq" size="1" value={this.props.baseSpeedSq} onChange={this.props.updateBaseSpeedSq}  />
          <span className="subtext">sq.</span> 
        </div>

        <div className="speedGroup">
          <input size="1" className="speedFieldFt" value={this.props.baseSpeedArmored} onChange={this.props.updateBaseSpeedArmored} />
          <span className="subtext">ft.</span>
          <input size="1" className="speedFieldSq" value={this.props.baseSpeedArmoredSq} onChange={this.props.updateBaseSpeedArmoredSq} />
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
            <input size="1" className="speedFieldFt" value={this.props.flySpeed} onChange={this.props.updateFlySpeed} />
            <span className="subtext">ft.</span>
            <input size="4" className="speedFieldSq" value={this.props.flyManeuverability} onChange={this.props.updateFlyManeuverability} /> 
          </div>
          <div className="speedGroupThree">
            <input size="1" value={this.props.swimSpeed} onChange={this.props.updateSwimSpeed} />
            <span className="subtext3">ft.</span>
            <input size="1" value={this.props.climbSpeed} onChange={this.props.updateClimbSpeed} />
            <span className="subtext3">ft.</span>
            <input size="1" value={this.props.burrowSpeed} onChange={this.props.updateBurrowSpeed} />
            <span className="subtext3">ft.</span>

          </div>
          <div className="speedGroupTemp inline-block">
            <div className="speedTempModifierHeadline">Temp Modifiers</div>
            <textarea cols="5" rows="2" value={this.props.tempMod} onChange={this.props.updateSpeedTempMod} />

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