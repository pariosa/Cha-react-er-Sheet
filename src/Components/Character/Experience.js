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
	constructor(props) {
      super(props);
      this.props = props;
    }

	render(){
		const {
			experience,
			maxExperience,
			updateExperience,
			updateExperienceMax
		} = this.props
		return(
  <div className="Experience">
    <div className="ExperienceTitle">
      Experience Points
    </div>
    <div className="NextLevelTitle">
      Next Level
    </div>
    <div className="ui small input ExperienceInputs">
      <input size="12" value={experience} onChange={updateExperience} />
        /    
      <input size="9" value={maxExperience} onChange={updateExperienceMax} />
    </div>
  </div>
		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Experience)