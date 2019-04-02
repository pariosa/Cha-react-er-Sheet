import React, { Component } from "react";
import { connect } from "react-redux"; 
import {
	updateExperience,
	updateExperienceMax
} from "../../js/actions/experienceActions"

const mapStateToProps = state => {
	return {
		experience:state.experience.experience,
		maxExperience: state.experience.maxExperience
	}
}

const mapDispatchToProps = {
		updateExperience,
		updateExperienceMax 
}

class Experience extends Component {
	render(){
		return(
			<div className="Experience">
				<div className="ExperienceTitle">
				Experience Points
				</div>
				<div className="NextLevelTitle">
				Next Level
				</div>
				<div className="ui small input ExperienceInputs">
					<input size="12" value={this.props.experience}  onChange={this.props.updateExperience} />
					/<input size="9" value={this.props.maxExperience} onChange={this.props.updateExperienceMax} />
				</div> 
			</div>
		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Experience)