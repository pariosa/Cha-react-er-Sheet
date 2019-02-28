import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSkillRank } from './js/actions/skillActions';
import SkillDetail from './SkillDetail'
const mapStateToProps = (state) => {
	return{
		skills: state.action.character.skills.children
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{ 

	}
}
let skills = [];

class Skills extends Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(this.props.skills);
		return(

			<div>
				 
					 test
				 
				
			</div>

		)
	}
} 
export default connect(mapDispatchToProps,mapDispatchToProps) (Skills)