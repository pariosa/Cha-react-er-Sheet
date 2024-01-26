import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateSkillDescription, updateSkillIsClass, updateSkillMiscMod, updateSkillRank
} from "../../js/actions/skillActions";
const mapStateToProps = (state, ownProps) => { 
  return {
    isClassSkill: state.skills[ownProps.id].isClass,
    title: state.skills[ownProps.id].title,
    stat: state.skills[ownProps.id].stat,
    ranks: state.skills[ownProps.id].ranks,
    miscMod: state.skills[ownProps.id].miscMod,
    skillDescription: state.skills[ownProps.id].skillDescription,
    stats: state.stat.stats,
    id: state.skills[ownProps.id].id
  }; 
};
const mapDispatchToProps = {
    updateSkillRank,
    updateSkillIsClass,
    updateSkillDescription,
    updateSkillMiscMod
};
class Skill extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  statModifier(){
    const {
      stat,
      stats
    } = this.props;
    let statAttr;
    switch (stat) {
      case "dexterity":
          statAttr = stats.dexMod;
        break;
      case "strength":
          statAttr = stats.strMod;
        break;
      case "intelligence":
          statAttr = stats.intMod;
        break;
      case "wisdom": 
          statAttr = stats.wisMod; 
        break;
      case "constitution":
          statAttr = stats.conMod;
        break;
      case "charisma": 
          statAttr = stats.chaMod; 
        break;
      default:
        break;
    }
    return <input readOnly className={stat} size="2" value={statAttr} />;
  };

  statModifierOnly(){
    let statAttr;
    const { 
      stat,
      stats
    } = this.props; 
    switch (stat) {
      case "dexterity":
        statAttr = stats.dexMod;
        break;
      case "strength":
        statAttr = stats.strMod;
        break;
      case "intelligence":
        statAttr = stats.intMod;
        break;
      case "wisdom":
        statAttr = stats.wisMod;
        break;
      case "constitution":
        statAttr = stats.conMod;
        break;
      case "charisma": 
          statAttr = stats.chaMod;
        break;
      default:
        break;
    }
    return statAttr;
  };

  skillDescription(){
    const{
      skillDescription,
      updateSkillDescription
    } = this.props;
    if (skillDescription !== undefined) {
      return (
        <input
          size="9"
          className="skillDescription"
          value={skillDescription}
          onChange={updateSkillDescription}
        />
      );
    }
  }; 
  classSkillModifier(isClassSkill,rank){
    return (isClassSkill && (rank > 1) ) ? 3 : 0;
  }
  render() {
    const {
      id,
      isClassSkill,
      title,
      ranks,
      miscMod,
      updateSkillRank,
      updateSkillDescription,
      updateSkillIsClass,
      updateSkillMiscMod
    } = this.props;
    return (
      <div className="skillCapsule" id={id}>
        
        <input 
          type="checkbox"   
          onChange={updateSkillIsClass} 
          checked={isClassSkill}
        />
        <div className="statName">
          {title}
          {this.skillDescription()}
        </div>
        <input
          readOnly
          className="total"
          size="4"
          type="text"
          value={
            `+ ${(
              parseInt(ranks,10) +
              parseInt(miscMod,10) +
              parseInt(this.statModifierOnly(),10) +
              parseInt(this.classSkillModifier(isClassSkill, parseInt(ranks,10)))
            )}`
          }
        />
        {this.statModifier()}
        <input
          className="ranks"
          size="2"
          type="text"
          value={ranks}
          onChange={updateSkillRank}
        />
        <input
          className="miscMod"
          size="2"
          type="text"
          value={miscMod}
          onChange={updateSkillMiscMod}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
