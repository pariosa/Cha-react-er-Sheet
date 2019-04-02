import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateName,
  updateAlignment,
  updatePlayerName,
  updatePlayerClass,
  updateLevel,
  updateDiety,
  updateHomeland,
  updateRace,
  updateSize,
  updateGender,
  updateAge,
  updateHeight,
  updateWeight,
  updateHair,
  updateEyes
} from "../../js/actions/characterActions";

const mapDispatchToProps = {
    updateName,
    updateAlignment,
    updatePlayerName,
    updatePlayerClass,
    updateLevel,
    updateDiety,
    updateHomeland,
    updateRace,
    updateSize,
    updateGender,
    updateAge,
    updateHeight,
    updateWeight,
    updateHair,
    updateEyes
};
const mapStateToProps = state => {
  return {
    name: state.character.name,
    alignment: state.character.alignment,
    playerName: state.character.playerName,
    playerClass: state.character.playerClass,
    level: state.character.level,
    diety: state.character.diety,
    homeland: state.character.homeland,
    race: state.character.race,
    size: state.character.size,
    gender: state.character.gender,
    age: state.character.age,
    height: state.character.height,
    weight: state.character.weight,
    hair: state.character.hair,
    eyes: state.character.eyes
  };
};
class CharacterInfo extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
    name,
    alignment,
    playerName,
    playerClass,
    level,
    diety,
    homeland,
    race,
    size,
    gender,
    age,
    height,
    weight,
    hair,
    eyes,   
    updateName,
    updateAlignment,
    updatePlayerName,
    updatePlayerClass,
    updateLevel,
    updateDiety,
    updateHomeland,
    updateRace,
    updateSize,
    updateGender,
    updateAge,
    updateHeight,
    updateWeight,
    updateHair,
    updateEyes
    } =  this.props;

    return (
      <div className="charinfo ui ten wide stackable grid column">
        <div className="ui six wide left labeled input">
          <div className="ui left corner label">name </div>
          <input
            size="26"
            type="text"
            value={name}
            onChange={updateName}
          />
        </div>

        <div className="ui two wide left  labeled input">
          <div className="ui left corner label">Align </div>
          <input
            size="10"
            type="text"
            value={alignment}
            onChange={updateAlignment}
          />
        </div>

        <div className="ui left  labeled input">
          <div className="ui left corner label">player </div>
          <input
            size="26"
            type="text"
            value={playerName}
            onChange={updatePlayerName}
          />
        </div>
        <div className="ui left four wide  labeled input">
          <div className="ui left corner label">class </div>
          <input
            size="18"
            type="text"
            value={playerClass}
            onChange={updatePlayerClass}
          />
        </div>
        <div className="ui left six wide  labeled input">
          <div className="ui left corner label">level </div>
          <input
            size="1"
            type="text"
            value={level}
            onChange={updateLevel}
          />
        </div>
        <div className="ui left three wide labeled input">
          <div className="ui left corner label">diety </div>
          <input
            size="13"
            type="text"
            value={diety}
            onChange={updateDiety}
          />
        </div>
        <div className="ui left eight wide labeled input">
          <div className="ui left corner label">homeland </div>
          <input
            size="22"
            type="text"
            value={homeland}
            onChange={updateHomeland}
          />
        </div>
        <div className="ui left three wide  labeled input">
          <div className="ui left corner label">race </div>
          <input
            type="text"
            size="8"
            value={race}
            onChange={updateRace}
          />
        </div>
        <div className="ui left two wide labeled input">
          <div className="ui left corner label">size </div>
          <input
            type="text"
            size="4"
            value={size}
            onChange={updateSize}
          />
        </div>
        <div className="ui left two wide labeled input">
          <div className="ui left corner label">gender </div>
          <input
            type="text"
            size="4"
            value={gender}
            onChange={updateGender}
          />
        </div>
        <div className="ui left two wide labeled input">
          <div className="ui left corner label">age </div>
          <input
            type="text"
            size="4"
            value={age}
            onChange={updateAge}
          />
        </div>
        <div className="ui left two wide labeled input">
          <div className="ui left corner label">height </div>
          <input
            type="text"
            size="6"
            value={height}
            onChange={updateHeight}
          />
        </div>
        <div className="ui left two wide labeled input">
          <div className="ui left corner label">weight </div>
          <input
            type="text"
            size="6"
            value={weight}
            onChange={updateWeight}
          />
        </div>
        <div className="ui left one wide labeled input">
          <div className="ui left corner label">hair </div>
          <input
            type="text"
            size="6"
            value={hair}
            onChange={updateHair}
          />
        </div>
        <div className="ui left one wide labeled input">
          <input
            type="text"
            size="6"
            value={eyes}
            onChange={updateEyes}
          />
          <div className="ui left corner label">eyes </div>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterInfo);
