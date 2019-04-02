import React, { Component } from "react";
import { connect } from "react-redux";
import Save from "./Save";
import { 

} from "../../js/actions/savesActions";
 
const mapStateToProps = state => {
  return {
    skills: state.skills,
    saves: state.saves
  };
};
class Saves extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  Saves(){
    const {
      saves,
      stats
    } = this.props;
    const savesArr = []; 
    saves.forEach(save => {
      savesArr.push(
        <Save
          key={save.id}
          id={save.id}
          title={save.title}
          stat={save.stat}
          miscMod={save.miscMod}
          stats={stats} 
        />
      );
    });
    return <div>{savesArr}</div>;
  }

  render() {
    return (
      <div className="Saves ui stackable grid row">
        {this.Saves()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps 
)(Saves);