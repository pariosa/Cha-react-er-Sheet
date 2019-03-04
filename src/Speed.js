import React, { Component } from "React";
import { connect } from "react-redux";
import {
  UpdateBaseSpeed,
  UpdateBaseSpeedArmored,
  UpdateFlySpeed,
  UpdateFlyManeuverability,
  UpdateSwimSpeed,
  UpdateClimbSpeed,
  UpdateBurrowSpeed,
} from "./js/actions/movementActions";

const mapDispatchToProps = dispatch => {
  return {
    UpdateBaseSpeed: maxSpeed => dispatch(updateMaxSpeed(maxSpeed)),
    UpdateBaseSpeedArmored: baseSpeedArmored => dispatch(UpdateBaseSpeedArmored(baseSpeedArmored)),
    UpdateFlySpeed: flySpeed => dispatch(UpdateFlySpeed(flySpeed)),
    UpdateFlyManeuverability: flyManeuverability => dispatch(UpdateFlyManeuverability(flyManeuverability)),
    UpdateSwimSpeed: swimSpeed => dispatch(UpdateSwimSpeed(swimSpeed)),
    UpdateClimbSpeed: climbSpeed => dispatch(UpdateClimbSpeed(climbSpeed)),
    UpdateBurrowSpeed: burrowSpeed => dispatch(UpdateBurrowSpeed(burrowSpeed))
  };
};
const mapStateToProps = state => {
  return {
    baseSpeed: state.action.character.speed.baseSpeed,
    baseSpeedArmored: state.action.character.speed.baseSpeedArmored,
    flySpeed: state.action.character.speed.flySpeed,
    flyManeuverability: state.action.character.speed.flyManeuverability,
    swimSpeed: state.action.character.speed.swimSpeed,
    climbSpeed: state.action.character.speed.climbSpeed,
    burrowSpeed: state.action.character.speed.burrowSpeed
  };
};
class Speed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        base speed stuff goes here
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Speed);