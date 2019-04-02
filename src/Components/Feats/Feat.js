import React, { Component } from "react";
import { connect } from "react-redux";
import {
	removeFeat,
	updateFeat
} from "../../js/actions/featsActions"

const mapStateToProps = ( state, ownProps ) => {
	return {
		feat:ownProps.feat,
		id:ownProps.id
	}
}

const mapDispatchToProps =  {
		removeFeat,
		updateFeat
}

class Feat extends Component {
	render(){
		return(

			<div className="Feat" id={this.props.id}>

				<textarea value={this.props.feat} cols="50" onChange={this.props.updateFeat} />
	         
	         	<button className="red deleteWeapon deleteFeat" onClick={this.props.removeFeat}>x</button>

			</div>

		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Feat)