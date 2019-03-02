import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSkillRank, updateSkillDescription, updateSkillMiscMod} from './js/actions/skillActions';
const mapStateToProps = (state, ownProps) => { 
	return{
		title:state.action.character.skills[ownProps.id].title,
		stat:state.action.character.skills[ownProps.id].stat,
		ranks:state.action.character.skills[ownProps.id].ranks,
		miscMod:state.action.character.skills[ownProps.id].miscMod,
		skillDescription:state.action.character.skills[ownProps.id].skillDescription,
		stats:state.action.character.stats,
		id: state.action.character.skills[ownProps.id].id
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		updateSkillRank: (skill) => dispatch(updateSkillRank(skill)),
		updateSkillDescription: (skillDescription) => dispatch(updateSkillDescription(skillDescription)),
		updateSkillMiscMod: (skillMiscMod) => dispatch(updateSkillMiscMod(skillMiscMod))
	}
}
class SkillDetail extends Component{
	constructor(props){
		super(props); 
	}
	statModifier = () => {
		let stat; 
		switch(this.props.stat){
			case 'dexterity': 
				stat = this.props.stats.dexMod;
				break;
			case 'strength':
				stat = this.props.stats.strMod;
				break;
			case 'intelligence':
				stat = this.props.stats.intMod;
				break;
			case 'wisdom':
				stat = this.props.stats.wisMod;
				break;
			case 'constitution': 
				stat = this.props.stats.conMod;
				break;
			case 'charisma':
				stat = this.props.stats.chaMod;
				break;
			default:
				break;
		}
		return <input readOnly className={stat} size="2" value={stat} />;
	} 
	statModifierOnly = () => {
				let stat; 
		switch(this.props.stat){
			case 'dexterity': 
				stat = this.props.stats.dexMod;
				break;
			case 'strength':
				stat = this.props.stats.strMod;
				break;
			case 'intelligence':
				stat = this.props.stats.intMod;
				break;
			case 'wisdom':
				stat = this.props.stats.wisMod;
				break;
			case 'constitution': 
				stat = this.props.stats.conMod;
				break;
			case 'charisma':
				stat = this.props.stats.chaMod;
				break;
			default:
				break;
		}
		return stat;
	}
	skillDescription = () => {
		if(this.props.skillDescription !== undefined){
			return <input size="12" className="skillDescription" value={this.props.skillDescription} onChange={this.props.updateSkillDescription} />
		}
	} 
	render(){ 
		return(
			<div className="skillCapsule" id={this.props.id}>
				<div className="statName" >
					{this.props.title} 
					{this.skillDescription()} 
				</div>
				<input readOnly className="total" size="4" type="text" value={'+' + (parseInt(this.props.ranks) + parseInt(this.props.miscMod) + parseInt(this.statModifierOnly()))} />
				{this.statModifier()}
				<input className="ranks"  size="2" type="text" value={this.props.ranks} onChange={this.props.updateSkillRank} />
				<input className="miscMod" size="2" type="text" value={this.props.miscMod} onChange={this.props.updateSkillMiscMod} />
		
			</div>
		)
	}
}
export default connect(mapStateToProps,mapDispatchToProps) (SkillDetail) 