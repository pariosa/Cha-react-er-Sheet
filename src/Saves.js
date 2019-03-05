import React, { Component } from "React";
import { connect } from "react-redux";
import Save from "./Save";
import { 

} from "./js/actions/savesActions";

const mapDispatchToProps = dispatch => {
  return {
   
  };
};
const mapStateToProps = state => {
  return {
    skills: state.skills,
    saves: state.saves
  };
};
class Saves extends Component {
  constructor(props) {
    super(props);
  }
  Saves = () => {
    let saves = []; 
    this.props.saves.forEach((save, i) => {
      saves.push(
        <Save
          key={i}
          id={i}
          title={save.title}
          stat={save.stat}
          miscMod={save.miscMod}
          stats={this.props.stats} 
        />
      );
    });
    return <div>{saves}</div>;
  }

  render() {
    return (
      <div>
      {this.Saves()}
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Saves);