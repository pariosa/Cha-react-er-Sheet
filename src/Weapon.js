import React, { Component } from "React";
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
} from "./js/actions/weaponActions";

const mapDispatchToProps = dispatch => {
  return {
    updateWeaponName: name => dispatch(updateWeaponName(name)),
    updateWeaponAttackBonus:attackBonus => dispatch(updateWeaponAttackBonus(attackBonus)),
    updateWeaponCritical: critical => dispatch(updateWeaponCritical(critical)),
    updateWeaponType:type => dispatch(updateWeaponType(type)),
    updateWeaponRange: range => dispatch(updateWeaponRange(range)),
    updateWeaponAmmunition: ammunition => dispatch(updateWeaponAmmunition(ammunition)),
    updateWeaponDamage: damage => dispatch(updateWeaponDamage(damage)),
    removeWeapon: weapon => dispatch(removeWeapon(weapon)) 
  };
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
  }

  render() {
    return (
      <div className="Weapon" id={this.props.id} >
        <div className="weaponRowZero">
          <div className="weaponHeader inline">Weapon</div>
          <div className="attackBonusHeader inline">Attack Bonus</div>
          <div className="criticalHeader inline"> Critical</div>
                  <button className="red deleteWeapon" onClick={this.props.removeWeapon} >x</button>

        </div>

        <div className="ui weaponRowOne">
          <div className="ui input weaponName">
            <input type="text" size="16" value={this.props.name} onChange={this.props.updateWeaponName} />
          </div>
          <div className="ui input weaponAttackBonus">
            <input type="text" size="13" value={this.props.attackBonus} onChange={this.props.updateWeaponAttackBonus} />
          </div>
          <div className="ui input weaponCritical">
            <input type="text" size="13" value={this.props.critical} onChange={this.props.updateWeaponCritical} />
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
            <input type="text" size="12" value={this.props.type} onChange={this.props.updateWeaponType} />
          </div>
          <div className="ui input weaponRange">
            <input type="text" size="6" value={this.props.range} onChange={this.props.updateWeaponRange} />
          </div>
          <div className="ui input weaponAmmunition">
            <input type="text" size="10" value={this.props.ammunition} onChange={this.props.updateWeaponAmmunition} />
          </div>
          <div className="ui input weaponDamage">
            <input type="text" size="9" value={this.props.damage} onChange={this.props.updateWeaponDamage} />
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