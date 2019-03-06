import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateSkillRank,
  updateSkillDescription,
  updateSkillMiscMod,
  updateSkillIsClass
} from "./js/actions/skillActions";
const mapStateToProps = (state, ownProps) => {
  return {
    isClassSkill: state.skills[ownProps.id].isClass,
    title: state.skills[ownProps.id].title,
    stat: state.skills[ownProps.id].stat,
    ranks: state.skills[ownProps.id].ranks,
    miscMod: state.skills[ownProps.id].miscMod,
    skillDescription:
      state.skills[ownProps.id].skillDescription,
    stats: state.stat.stats,
    id: state.skills[ownProps.id].id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateSkillRank: skill => dispatch(updateSkillRank(skill)),
    updateSkillIsClass: isClass => dispatch(updateSkillIsClass(isClass)),
    updateSkillDescription: skillDescription =>
      dispatch(updateSkillDescription(skillDescription)),
    updateSkillMiscMod: skillMiscMod =>
      dispatch(updateSkillMiscMod(skillMiscMod))
  };
};
class Skill extends Component {
  constructor(props) {
    super(props);
  }
  statModifier = () => {
    let stat;
    switch (this.props.stat) {
      case "dexterity":
        stat = this.props.stats.dexMod;
        break;
      case "strength":
        stat = this.props.stats.strMod;
        break;
      case "intelligence":
        stat = this.props.stats.intMod;
        break;
      case "wisdom":
        stat = this.props.stats.wisMod;
        break;
      case "constitution":
        stat = this.props.stats.conMod;
        break;
      case "charisma":
        stat = this.props.stats.chaMod;
        break;
      default:
        break;
    }
    return <input readOnly className={this.props.stat} size="2" value={stat} />;
  };
  statModifierOnly = () => {
    let stat;
    switch (this.props.stat) {
      case "dexterity":
        stat = this.props.stats.dexMod;
        break;
      case "strength":
        stat = this.props.stats.strMod;
        break;
      case "intelligence":
        stat = this.props.stats.intMod;
        break;
      case "wisdom":
        stat = this.props.stats.wisMod;
        break;
      case "constitution":
        stat = this.props.stats.conMod;
        break;
      case "charisma":
        stat = this.props.stats.chaMod;
        break;
      default:
        break;
    }
    return stat;
  };
  skillDescription = () => {
    if (this.props.skillDescription !== undefined) {
      return (
        <input
          size="9"
          className="skillDescription"
          value={this.props.skillDescription}
          onChange={this.props.updateSkillDescription}
        />
      );
    }
  };
  skillIsClassCheck = () =>{
    if(this.props.isClassSkill === true){  
      return (
        <input type="checkbox"   
          onChange={this.props.updateSkillIsClass} 
          checked
        />
      );
    }else{
      return (
        <input type="checkbox"   
          onChange={this.props.updateSkillIsClass}  
        />
      );
    }
  }
  render() {
    return (
      <div className="skillCapsule" id={this.props.id}>
        {this.skillIsClassCheck()} 
        <div className="statName">
          {this.props.title}
          {this.skillDescription()}
        </div>
        <input
          readOnly
          className="total"
          size="4"
          type="text"
          value={
            "+" +
            (parseInt(this.props.ranks) +
              parseInt(this.props.miscMod) +
              parseInt(this.statModifierOnly()))
          }
        />
        {this.statModifier()}
        <input
          className="ranks"
          size="2"
          type="text"
          value={this.props.ranks}
          onChange={this.props.updateSkillRank}
        />
        <input
          className="miscMod"
          size="2"
          type="text"
          value={this.props.miscMod}
          onChange={this.props.updateSkillMiscMod}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
