import React, { Component } from "react";
import { connect } from "react-redux";
import Weapon from './Weapon';
import {
addWeapon
} from "../../js/actions/weaponActions";

const mapDispatchToProps = { 
    addWeapon 
};

const mapStateToProps = state => {
  return {
    weapons: state.weapons
  };
};

class Weapons extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  weapons (weapons){
    let weaponsArr = [];
    weapons.forEach(weapon => {
      weaponsArr.push(
        <Weapon 
          key={weapon.id}
          id={weapon.id}
          name={weapon.name}
          attackBonus={weapon.attackBonus}
          critical={weapon.critical}
          type={weapon.type}
          range={weapon.range}
          ammunition={weapon.ammunition}
          damage={weapon.damage}
        />
      );
    });
    return <div>{weaponsArr}</div>;
  };

  render() {
    const{ 
      weapons,
      addWeapon 
    } = this.props
    return (
      <div className="Weapons">
        {this.weapons(weapons)}
        <button type="button" className="ui small button green addNewWeapon" onClick={addWeapon}> + </button>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapons);