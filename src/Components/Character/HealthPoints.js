import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateMaxHp,
  updateCurrentHp,
  updateNonLethal,
  updateInitiativeMod,
  updateDr
} from "../../js/actions/hpActions";

const MapStateToProps = state => {
  return {
    max: state.health.max,
    current: state.health.current,
    nonLethal: state.health.nonLethal,
    dr: state.health.DR,
    initiativeModifier: state.health.initiativeModifier,
    dexterityMod: state.stat.stats.dexMod
  };
};

const MapDispatchToProps = { 
    updateMaxHp,
    updateCurrentHp,
    updateNonLethal,
    updateInitiativeMod,
    updateDr 
};

class HealthPoints extends Component {

  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    const {
      max,
      updateMaxHp,
      dr,
      updateDr,
      current,
      updateCurrentHp,
      nonLethal,
      updateNonLethal,
      dexterityMod,
      initiativeModifier,
      updateInitiativeMod
    } = this.props;
    return (
      <div className="HealthPoints">
        <div className="ui labeled button small " tabIndex="0">
          <div className="ui black button small">
            <strong>Hit Points</strong>
          </div>
          <div className="ui three wide left labeled input">
            <div className="ui left corner label">total</div>
            <input
              size="5"
              type="text"
              value={max}
              onChange={updateMaxHp}
            />
          </div>
          <div className="input ui three wide left labeled input">
            <div className="ui left corner label">DR</div>
            <input
              size="13"
              type="text"
              value={dr}
              onChange={updateDr}
            />
          </div>
          <br />
        </div>
        <div className="ui form">
          <div className="">
            <label>Wounds/Current HP</label>
            <textarea
              rows="1"
              cols="6"
              value={current}
              onChange={updateCurrentHp}
            />
          </div>
        </div>
        <div className="ui form">
          <div className="">
            <label>Nonlethal Damage</label>
            <textarea
              value={nonLethal}
              onChange={updateNonLethal}
              rows="1" 
              cols="6"
            />
          </div>
        </div>
        <div className=" ui labeled button small" tabIndex="0">
          <div className="ui black button small">
            <strong>Initiative</strong>
          </div>
          <div className="input ui three wide left labeled input">
            <div className="ui left corner label">total</div>
            <input
              size="4"
              readOnly
              type="text"
              value={
                parseInt(dexterityMod,10) +
                parseInt(initiativeModifier,10)
              }
            />
          </div>

          =
          <div className="ui three wide left labeled input">
            <div className="ui left corner label">Dex mod</div>
            <input
              readOnly
              size="4"
              type="text"
              value={dexterityMod}
            />
          </div>

          +
          <div className="input ui three wide left labeled input">
            <div className="ui left corner label">Misc mod</div>
            <input
              size="4"
              type="text"
              value={initiativeModifier}
              onChange={updateInitiativeMod}
            />
          </div>
          <br />
        </div>
      </div>
    );
  }
}
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(HealthPoints);
