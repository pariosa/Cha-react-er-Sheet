import React, { Component } from "react";
import { connect } from "react-redux";
import {
	removeFeat,
	updateFeat
} from "./js/actions/featsActions"

const mapStateToProps = ( state, ownProps ) => {
	return {
		feat:ownProps.feat,
		id:ownProps.id
	}
}

const mapDispatchToProps = dispatch => {
	return{
		removeFeat: feat => dispatch(removeFeat(feat)),
		updateFeat: feat => dispatch(updateFeat(feat))

	}
}

class Feat extends Component {
	render(){
		return(

			<div className="Feats" id={this.props.id}>

				<textarea value={this.props.feat} onChange={this.props.updateFeat} />
         		<button className="red deleteWeapon" onClick={this.props.removeFeat}>x</button>

			</div>

		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Feat)