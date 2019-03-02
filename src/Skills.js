import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSkillRank } from './js/actions/skillActions';
import SkillDetail from './SkillDetail'
const mapStateToProps = (state) => {
	return{
		skills: state.action.character.skills,
		stats: state.action.character.stats
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{ 
		updateSkillRank: (skill) => dispatch(updateSkillRank(skill,rank))
	}
}
let skills = []; 
class Skills extends Component{
	constructor(props){
		super(props);
	}  
	classSkills = () => {
		let skills = [];
		this.props.skills.forEach((skill, i) => {
			skills.push(
				<SkillDetail 
					key={i} 
					id={i}
					title={skill.title} 
					stat={skill.stat} 
					ranks={skill.ranks}
					miscMod={skill.miscMod}
					stats={this.props.stats}
					skillDescription={skill.skillDescription}
				/>
			);
		}) 
		return <div>{skills}</div>;
	} 
	render(){ 
		console.log(this.props);
		return( 
			<div>
			<div className="skillHeaders"> 
				<div className="firstSkillHeader skillHeader"><u>Skill Name</u></div>
				<div className="secondSkillHeader skillHeader"><u>Total</u></div>
				<div className="thirdSkillHeader skillHeader"><u>Ability</u></div>
				<div className="fourthSkillHeader skillHeader"><u>Ranks</u></div>
				<div className="fifthSkillHeader skillHeader"><u>Misc.</u></div>
			</div>
			 	{this.classSkills()}
			</div>
		)
	}
} 
export default connect(mapStateToProps, mapDispatchToProps) (Skills)