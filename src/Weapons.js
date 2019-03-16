import React, { Component } from "React";
import { connect } from "react-redux";
import Weapon from './Weapon';
import {
addWeapon
} from "./js/actions/weaponActions";

const mapDispatchToProps = dispatch => {
  return {
    addWeapon: weapon => dispatch(addWeapon(weapon))
  };
};
const mapStateToProps = state => {
  return {
    weapons: state.weapons
  };
};
class Weapons extends Component {
  constructor(props) {
    super(props);
  }
  weapons = () => {
    let weapons = [];
    this.props.weapons.forEach((weapon, i) => {
      weapons.push(
        <Weapon 
          key={i}
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
    return <div>{weapons}</div>;
  };
  render() {
    return (
      <div className="Weapons">
       {this.weapons()}
       <button className="ui small button green addNewWeapon" onClick={this.props.addWeapon} > + </button>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weapons);