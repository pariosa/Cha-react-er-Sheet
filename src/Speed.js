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
    baseSpeed: state.speed.baseSpeed,
    baseSpeedArmored: state.speed.baseSpeedArmored,
    flySpeed: state.speed.flySpeed,
    flyManeuverability: state.speed.flyManeuverability,
    swimSpeed: state.speed.swimSpeed,
    climbSpeed: state.speed.climbSpeed,
    burrowSpeed: state.speed.burrowSpeed
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