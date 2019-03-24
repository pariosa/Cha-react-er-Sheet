import React, { Component } from "react";
import { connect } from "react-redux";
import Feat from "./Feat";
import {
	updateFeat,
	addFeat
} from "./js/actions/featsActions"

const mapStateToProps = state => {
	return {
		feats: state.feats
	}
}

const mapDispatchToProps = dispatch => {
	return{
		updateFeat: feat => dispatch(updateFeat(feat)),
		addFeat: feat => dispatch(addFeat(feat)) 
	}
}

class Feats extends Component {
	getFeats = () => {
    let feats = [];
    this.props.feats.forEach((feat, i) => {
      feats.push(
        <Feat 
          key={i}
          id={feat.id}
          feat={feat.feat}
          
        />
      );
    });
    return <div>{feats}</div>;
  };
	render(){

		return(

			<div className="Feats">
			<div className="FeatsTitle">
			Feats
			</div>
				{this.getFeats()}

			 <button className="ui small button green addNewAcItem" onClick={this.props.addFeat} > + </button>

			</div>

		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Feats)