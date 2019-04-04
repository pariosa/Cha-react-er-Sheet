import React, { Component } from "react";
import { connect } from "react-redux";
import SpellLevel from "./SpellLevel";

const mapStateToProps = state => {
  return {
   spellLevels: state.spells
  };
};  



class SpellList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  spellLevels(){
    const { spellLevels } = this.props;
    const spellLevelsArr = [];  
    spellLevels.forEach(slot => {
      spellLevelsArr.push(
        <SpellLevel
          key={slot.level}
          id={slot.level}
          level={slot.level} 
        />
      );
    });
    return <div>{spellLevelsArr}</div>;
  };

  render() { 
    const{
      spellLevels
    } = this.props;
    return (
      <div className="SpellList">
        <div className="SpellListHeader">Spells </div>
        {this.spellLevels()}
      </div>
    );
  }
}
export default connect(
  mapStateToProps
)(SpellList);