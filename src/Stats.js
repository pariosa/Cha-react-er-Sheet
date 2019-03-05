import React, { Component } from "React";
import { connect } from "react-redux";
import {
  updateStat,
  updateTempStat
} from "./js/actions/statsActions";

const mapStateToProps = state => {
  return {
    strength: state.stat.stats.strength,
    dexterity: state.stat.stats.dexterity,
    constitution: state.stat.stats.constitution,
    wisdom: state.stat.stats.wisdom,
    intelligence: state.stat.stats.intelligence,
    charisma: state.stat.stats.charisma,
    strengthTemp: state.stat.statsTemporary.strength,
    dexterityTemp: state.stat.statsTemporary.dexterity,
    constitutionTemp: state.stat.statsTemporary.constitution,
    wisdomTemp: state.stat.statsTemporary.wisdom,
    intelligenceTemp: state.stat.statsTemporary.intelligence,
    charismaTemp: state.stat.statsTemporary.charisma,
    strengthMod: state.stat.stats.strMod,
    dexterityMod: state.stat.stats.dexMod,
    constitutionMod: state.stat.stats.conMod,
    wisdomMod: state.stat.stats.wisMod,
    intelligenceMod: state.stat.stats.intMod,
    charismaMod: state.stat.stats.chaMod,
    strengthTempMod: state.stat.statsTemporary.strMod,
    dexterityTempMod: state.stat.statsTemporary.dexMod,
    constitutionTempMod: state.stat.statsTemporary.conMod,
    wisdomTempMod: state.stat.statsTemporary.wisMod,
    intelligenceTempMod: state.stat.statsTemporary.intMod,
    charismaTempMod: state.stat.statsTemporary.chaMod
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateStat: stat => dispatch(updateStat(stat)), 
    updateTempStat: tempStat => dispatch(updateTempStat(tempStat)), 
  };
};

class Stats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Stats ui six wide stackable grid column ">
        <div className="statHeader">Stat</div>
        <div className="statHeader">Current</div>
        <div className="statHeader">Temporary</div>

        <div className="strength ui labeled button " tabIndex="0">
          <div className="ui one wide red button">
            <strong>STR</strong>
          </div>
          <div className="ui basic red button abilityScore">
            {this.props.strength}
            <div className="statButtons">
              <button
                className="strPos statPos"
                onClick={this.props.updateStat}
              >
                +
              </button>
              <button
                className="strNeg statNeg"
                onClick={this.props.updateStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic red label ">
            {this.props.strengthMod < 0 ? <span /> : <span>+</span>}
            {this.props.strengthMod}
          </a>
          <div className="ui inverted red button temp abilityScore">
            <strong>{this.props.strengthTemp}</strong>
            <div className="statButtons">
              <button
                className="strPos statPos"
                onClick={this.props.updateTempStat}
              >
                +
              </button>
              <button
                className="strNeg statNeg"
                onClick={this.props.updateTempStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic inverted red label">
            {this.props.strengthTempMod < 0 ? <span /> : <span>+</span>}
            {this.props.strengthTempMod}
          </a>
        </div>

        <div className="dexterity ui twelve wide labeled button" tabIndex="0">
          <div className="ui one wide teal button">
            <strong>DEX</strong>
          </div>
          <div className="ui basic teal button abilityScore">
            {this.props.dexterity}
            <div className="statButtons">
              <button
                className="dexPos statPos"
                onClick={this.props.updateStat}
              >
                +
              </button>
              <button
                className="dexNeg statNeg"
                onClick={this.props.updateStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic teal label">
            {this.props.dexterityMod < 0 ? <span /> : <span>+</span>}
            {this.props.dexterityMod}
          </a>
          <div className="ui inverted teal button temp abilityScore">
            <strong>{this.props.dexterityTemp}</strong>
            <div className="statButtons">
              <button
                className="dexPos statPos"
                onClick={this.props.updateTempStat}
              >
                +
              </button>
              <button
                className="dexNeg statNeg"
                onClick={this.props.updateTempStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic inverted teal label">
            {this.props.dexterityTempMod < 0 ? <span /> : <span>+</span>}
            {this.props.dexterityTempMod}
          </a>
        </div>

        <div className="strength ui twelve wide labeled button" tabIndex="0">
          <div className="ui orange button">
            <strong>CON</strong>
          </div>
          <div className="ui basic orange button abilityScore">
            {this.props.constitution}
            <div className="statButtons">
              <button
                className="conPos statPos"
                onClick={this.props.updateStat}
              >
                +
              </button>
              <button
                className="conNeg statNeg"
                onClick={this.props.updateStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic orange label">
            {this.props.constitutionMod < 0 ? <span /> : <span>+</span>}
            {this.props.constitutionMod}
          </a>
          <div className="ui inverted orange button temp abilityScore">
            <strong>{this.props.constitutionTemp}</strong>
            <div className="statButtons">
              <button
                className="conPos statPos"
                onClick={this.props.updateTempStat}
              >
                +
              </button>
              <button
                className="conNeg statNeg"
                onClick={this.props.updateTempStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic inverted orange label">
            {this.props.constitutionTempMod < 0 ? <span /> : <span>+</span>}
            {this.props.constitutionTempMod}
          </a>
        </div>

        <div className="strength ui twelve wide labeled button" tabIndex="0">
          <div className="ui  blue button">
            <strong>INT</strong>
          </div>
          <div className="ui basic blue button abilityScore">
            {this.props.intelligence}
            <div className="statButtons">
              <button
                className="intPos statPos"
                onClick={this.props.updateStat}
              >
                +
              </button>
              <button
                className="intNeg statNeg"
                onClick={this.props.updateStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic blue label">
            {this.props.intelligenceMod < 0 ? <span /> : <span>+</span>}
            {this.props.intelligenceMod}
          </a>
          <div className="ui inverted blue button temp abilityScore">
            <strong>{this.props.intelligenceTemp}</strong>
            <div className="statButtons">
              <button
                className="intPos statPos"
                onClick={this.props.updateTempStat}
              >
                +
              </button>
              <button
                className="intNeg statNeg"
                onClick={this.props.updateTempStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic inverted blue label">
            {this.props.intelligenceTempMod < 0 ? <span /> : <span>+</span>}
            {this.props.intelligenceTempMod}
          </a>
        </div>

        <div
          className="wisdom ui twelve purple wide labeled button"
          tabIndex="0"
        >
          <div className="ui button violet">
            <strong>WIS</strong>
          </div>
          <div className="ui basic violet button abilityScore">
            {this.props.wisdom}
            <div className="statButtons">
              <button
                className="wisPos statPos"
                onClick={this.props.updateStat}
              >
                +
              </button>
              <button
                className="wisNeg statNeg"
                onClick={this.props.updateStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic violet label">
            {this.props.wisdonMod < 0 ? <span /> : <span>+</span>}
            {this.props.wisdomMod}
          </a>
          <div className="ui inverted violet button temp abilityScore">
            <strong> {this.props.wisdomTemp}</strong>
            <div className="statButtons">
              <button
                className="wisPos statPos"
                onClick={this.props.updateTempStat}
              >
                +
              </button>
              <button
                className="wisNeg statNeg"
                onClick={this.props.updateTempStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic inverted violet label">
            {this.props.wisdomTempMod < 0 ? <span /> : <span>+</span>}
            {this.props.wisdomTempMod}
          </a>
        </div>

        <div
          className="charisma ui twelve pink wide labeled button"
          tabIndex="0"
        >
          <div className="ui button pink">
            <strong>CHA</strong>
          </div>
          <div className="ui basic pink button abilityScore">
            {this.props.charisma}
            <div className="statButtons">
              <button
                className="chaPos statPos"
                onClick={this.props.updateStat}
              >
                +
              </button>
              <button
                className="chaNeg statNeg"
                onClick={this.props.updateStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic pink label">
            {this.props.charismaMod < 0 ? <span /> : <span>+</span>}
            {this.props.charismaMod}
          </a>
          <div className="ui inverted pink button temp abilityScore">
            <strong>{this.props.charismaTemp}</strong>
            <div className="statButtons">
              <button
                className="chaPos statPos"
                onClick={this.props.updateTempStat}
              >
                +
              </button>
              <button
                className="chaNeg statNeg"
                onClick={this.props.updateTempStat}
              >
                -
              </button>
            </div>
          </div>
          <a className="ui basic inverted pink label">
            {this.props.charismaTempMod < 0 ? <span /> : <span>+</span>}
            {this.props.charismaTempMod}
          </a>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
