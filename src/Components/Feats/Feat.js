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
	constructor(props){
		super(props);
		this.props = props;
	}

	render(){
		const {
			id,
			feat,
			updateFeat,
			removeFeat
		} = this.props;
		return(
  <div className="Feat" id={id}>
    <textarea value={feat} cols="50" onChange={updateFeat} />
    <button type="button" className="red deleteWeapon deleteFeat" onClick={removeFeat}>x</button>
  </div>
		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Feat)