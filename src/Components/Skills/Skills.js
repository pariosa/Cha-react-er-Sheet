import React, { Component } from "react";
import { connect } from "react-redux";
import Skill from "./SkillDetail";

const mapStateToProps = state => { 
  return {
    skills: state.skills,
    stats: state.stats
  };
}; 

class Skills extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  classSkills(){
    const {
      skills, 
      stats
    } = this.props;
    const skillsArr = []; 

    skills.forEach(skill  => {
      skillsArr.push(
        <Skill 
          key={skill.id}
          id={skill.id}
          title={skill.title}
          stat={skill.stat}
          ranks={skill.ranks}
          miscMod={skill.miscMod}
          stats={stats}
          skillDescription={skill.skillDescription}
        />
      );
    });
    skillsArr.sort((a, b)=>{
    var nameA=a.props.title.toLowerCase(), nameB=b.props.title.toLowerCase();
    if (nameA < nameB){
      return -1;
    }
    if (nameA > nameB){
      return 1;
    }
    return 0; 
    }); 
    return <div>{skillsArr}</div>;
  };

  render() { 
    return (
      <div className="Skills">
        <div className="skillHeaders">
          <div className="firstSkillHeader skillHeader">
            <u>Skill Name</u>
          </div>
          <div className="secondSkillHeader skillHeader">
            <u>Total</u>
          </div>
          <div className="thirdSkillHeader skillHeader">
            <u>Ability</u>
          </div>
          <div className="fourthSkillHeader skillHeader">
            <u>Ranks</u>
          </div>
          <div className="fifthSkillHeader skillHeader">
            <u>Misc.</u>
          </div>
        </div>
        <br />
        {this.classSkills()}
      </div>
    );
  }
}
export default connect(
  mapStateToProps, 
)(Skills);
