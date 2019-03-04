import React, { Component } from "React";
import { connect } from "react-redux";
import Weapon from './Weapon';
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
class Weapons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Weapon/>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapons);