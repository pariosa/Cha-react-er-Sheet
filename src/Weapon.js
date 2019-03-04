import React, { Component } from "React";
import { connect } from "react-redux";
import {

} from "./js/actions/weaponActions";

const mapDispatchToProps = dispatch => {
  return {
  
  };
};
const mapStateToProps = state => {
  return {
    
  };
};
class Weapon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapon);