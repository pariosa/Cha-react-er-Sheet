import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateWeaponName,
  updateWeaponAttackBonus,
  updateWeaponCritical,
  updateWeaponType,
  updateWeaponRange,
  updateWeaponAmmunition,
  updateWeaponDamage, 
  removeWeapon
} from "../../js/actions/weaponActions";

const mapDispatchToProps = {
    updateWeaponName,
    updateWeaponAttackBonus,
    updateWeaponCritical,
    updateWeaponType,
    updateWeaponRange,
    updateWeaponAmmunition,
    updateWeaponDamage,
    removeWeapon
};

const mapStateToProps = (state, ownProps) => {
  return {
      id: ownProps.id,
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
    this.props = props;
  }

  render() {
    const {
      id,
      name,
      attackBonus,
      critical,
      type,
      range,
      ammunition,
      damage,
      updateWeaponName,
      updateWeaponAttackBonus,
      updateWeaponCritical,
      updateWeaponType,
      updateWeaponRange,
      updateWeaponAmmunition,
      updateWeaponDamage,
      removeWeapon
    } = this.props;
    return (
      <div className="Weapon" id={id}>
        <div className="weaponRowZero">
          <div className="weaponHeader inline">Weapon</div>
          <div className="attackBonusHeader inline">Attack Bonus</div>
          <div className="criticalHeader inline"> Critical</div>
          <button type="button" className="red deleteWeapon" onClick={removeWeapon}>x</button>
        </div>
        <div className="ui weaponRowOne">
          <div className="ui input weaponName">
            <input type="text" size="16" value={name} onChange={updateWeaponName} />
          </div>
          <div className="ui input weaponAttackBonus">
            <input type="text" size="13" value={attackBonus} onChange={updateWeaponAttackBonus} />
          </div>
          <div className="ui input weaponCritical">
            <input type="text" size="13" value={critical} onChange={updateWeaponCritical} />
          </div>
        </div>
        <div className="weaponRowTwo">
          <div className="typeHeader inline">Type</div>
          <div className="rangeHeader inline">Range</div>
          <div className="ammunitionHeader inline">Ammunition</div>
          <div className="damageHeader inline">Damage</div>
        </div>
        <div className="ui weaponRowThree">
          <div className="ui input weaponType">
            <input type="text" size="12" value={type} onChange={updateWeaponType} />
          </div>
          <div className="ui input weaponRange">
            <input type="text" size="6" value={range} onChange={updateWeaponRange} />
          </div>
          <div className="ui input weaponAmmunition">
            <input type="text" size="10" value={ammunition} onChange={updateWeaponAmmunition} />
          </div>
          <div className="ui input weaponDamage">
            <input type="text" size="9" value={damage} onChange={updateWeaponDamage} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapon);