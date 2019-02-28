import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSkillRank } from './js/actions/skillActions';
/*const mapStateToProps = (state) => {
	return{
		
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{

	}
}*/
class SkillDetail extends Component{
	render(){
		return(
			<div>
				 {this.props.skillName}
			</div>
		)
	}
}
//export default connect(mapDispatchToProps,mapDispatchToProps) (SkillDetail)

export default SkillDetail;