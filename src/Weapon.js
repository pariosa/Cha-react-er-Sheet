import React, { Component } from "React";
import { connect } from "react-redux";
import {

} from "./js/actions/weaponActions";

const mapDispatchToProps = dispatch => {
  return {
  
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
      name:ownProps.name,
      attackBonus:ownProps.attackBonus,
      critical:ownProps.critical,
      type:ownProps.type,
      range:ownProps.range,
      ammunition:ownProps.ammunition,
      damage:ownProps.damage
  };
};
class Weapon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
        {this.props.name}
        </div>
        <div>
        {this.props.attackBonus}
        </div>
        <div>
        {this.props.critical}
        </div>
        <div>
        {this.props.type}
        </div>
        <div>
        {this.props.range}
        </div>
        <div>
        {this.props.ammunition}
        </div>
        <div>
        {this.props.damage}
        </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapon);