import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStat, updateTempStat } from "../../js/actions/statsActions";

const mapStateToProps = (state, ownProps) => { 
  return {
    stat: ownProps.stat,
    score: ownProps.value,
    mod:  ownProps.modifier,
    tempMod: ownProps.tempMod,
    tempScore: ownProps.tempScore
  };
};

const mapDispatchToProps = {
    updateStat, 
    updateTempStat, 
};

class Stat extends Component { 
  constructor(props){
    super(props);
    this.props = props;
  }

  getAbbrev(){
    const { stat } = this.props;
  	return stat.substring(0,3);
  }

  getStatPos(){
  	return `${this.getAbbrev()}Pos statPos`;
  }

  getStatNeg(){
  	return `${this.getAbbrev()}Neg statNeg`;
  }

  getColor(){
  	switch(this.getAbbrev()){
  		case "int":
  			return "blue";
  		case "con":
  			return "orange";
  		case "dex":
  			return "teal";
  		case "wis":
  			return "purple";
  		case "str":
  			return "red";
  		case "cha":
  			return "pink";
      default:
        return null;
  	}
  }

  getTopClassName (){ 
    const { stat } = this.props;
    return `${stat} ui labeled button`;
  }

  getOverClassName(){
  	return `ui one wide ${this.getColor()} button`;
  }

  getUnderClassName(){
  	return `ui basic ${this.getColor()} button abilityScore`;
  }

  getLastClassName(){
  	return `ui basic ${this.getColor()} label`
  }

  render(){
    const{
      mod,
      score,
      tempScore,
      tempMod,
      updateStat,
      updateTempStat
    } = this.props;
  	return( 
    <div className={this.getTopClassName()}>
      <div className={this.getOverClassName()}>
        <strong>{this.getAbbrev().toUpperCase()}</strong>
      </div>
      <div className={this.getUnderClassName()}>
        {score}
        <div className="statButtons">
          <button className={this.getStatPos()} type="button" onClick={updateStat}>+</button>
          <button className={this.getStatNeg()} type="button" onClick={updateStat}>-</button>
        </div>
      </div>

      <a className={this.getLastClassName()}>
        {(mod < 0) ? <span /> : <span>+</span>}
        {mod}
      </a>

      <div className={this.getUnderClassName()}>
        <strong>{tempScore}</strong>
        <div className="statButtons"> 
          <button className={this.getStatPos()} type="button"  onClick={updateTempStat}>+</button>
          <button className={this.getStatNeg()} type="button" onClick={updateTempStat}>-</button>
        </div>
      </div>

      <a className={this.getLastClassName()}>
        {(tempMod < 0) ? <span /> : <span>+</span>}
        {tempMod}
      </a>
    </div>
  	)
  }
} 

export default connect(mapStateToProps, mapDispatchToProps) (Stat);