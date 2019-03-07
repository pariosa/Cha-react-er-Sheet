import React, { Component } from "React";
import { connect } from "react-redux";
import CharacterInfo from "./CharInfo";
import Stats from "./Stats";
import Skills from "./Skills";
import Saves from "./Saves";
import Speed from './Speed';
import Bab from "./Bab";
import ArmorClass from "./ArmorClass";
import Weapons from "./Weapons";
import HealthPoints from "./HealthPoints";
import css from "./css/CharacterSheet.css";

const mapStateToProps = state => {
  return {
    name: state.character.name,
    homeland: state.character.homeland
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updatePlayerName: playerName => dispatch(updatePlayerName(playerName))
  };
};

class CharacterSheet extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div className="CharacterSheet">
        <div className="ui stackable grid column six wide">
            <h2 className="characterTitle">
              {this.props.name} of {this.props.homeland}
            </h2>
            <CharacterInfo />   
            <div className="ui stackable grid column six wide">  
              <Stats />
              <ArmorClass />
              <Saves />  
              <Bab />
            </div>
            <div className="ui stackable grid column five wide">
              <HealthPoints />
            </div>
            <div className="ui stackable grid column six wide">
              <Speed />
              <Skills /> 
            </div> 
        </div>    
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterSheet);
