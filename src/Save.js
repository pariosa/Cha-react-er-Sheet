import React, { Component } from "React";
import { connect } from "react-redux";
import { 

} from "./js/actions/savesActions";

const mapDispatchToProps = dispatch => {
  return {
   
  };
};
const mapStateToProps = state => {
  return {
    skills: state.action.character.skills,
    saves: state.action.character.saves
  };
};
class Save extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          save goes here
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Save);