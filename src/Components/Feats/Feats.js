import React, { Component } from "react";
import { connect } from "react-redux";
import Feat from "./Feat";
import {
	updateFeat,
	addFeat
} from "../../js/actions/featsActions"

const mapStateToProps = state => {
	return {
		feats: state.feats
	}
}

const mapDispatchToProps = { 
	updateFeat,
	addFeat 
}

class Feats extends Component {
	getFeats(){
	  const {
		feats
      } = this.props; 
	  const featsArr = [];
	  feats.forEach(feat => {
	  featsArr.push(
  <Feat 
    key={feat.id}
    id={feat.id}
    feat={feat.feat}    
  />
	   );
    });
    return <div>{featsArr}</div>;
  };

	render(){
	const { 
	  addFeat,
	  feats	
	} = this.props

	return(
  <div className="Feats">
    <div className="FeatsTitle">
	  Feats
    </div>
    {this.getFeats(feats)}
    <button type="button" className="ui small button green addNewAcItem" onClick={addFeat}> + </button>
  </div>

	)
  }
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Feats)