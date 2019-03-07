import React, { Component } from "React";
import { connect } from "react-redux";
import { updateStat, updateTempStat } from "./js/actions/statsActions";

const mapStateToProps = (state, ownProps) => { 
  return {
    stat: ownProps.stat,
    score: ownProps.value,
    mod:  ownProps.modifier,
    tempMod: ownProps.tempMod,
    tempScore: ownProps.tempScore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStat: stat => dispatch(updateStat(stat)), 
    updateTempStat: tempStat => dispatch(updateTempStat(tempStat)), 
  };
};

class Stat extends Component { 
  getAbbrev = () =>{
  	return this.props.stat.substring(0,3);
  }
  getStatPos = () =>{
  	return `${this.getAbbrev()}Pos statPos`;
  }
  getStatNeg = () =>{
  	return `${this.getAbbrev()}Neg statNeg`;
  }
  getColor = () =>{
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
  	}
  }
  getTopClassName = () =>{ 
    return `${this.props.stat} ui labeled button`;
  }
  getOverClassName = () =>{
  	return `ui one wide ${this.getColor()} button`;
  }
  getUnderClassName = () =>{
  	return `ui basic ${this.getColor()} button abilityScore`;
  }
  getLastClassName = () =>{
  	return `ui basic ${this.getColor()} label`
  }

  render(){
  	return( 
	  <div className={this.getTopClassName()}>

        <div className={this.getOverClassName()}>
          <strong>{this.getAbbrev().toUpperCase()}</strong>
        </div>

        <div className={this.getUnderClassName()}>
          {this.props.score}
          <div className="statButtons">
            <button className={this.getStatPos()} onClick={this.props.updateStat}>+</button>
            <button className={this.getStatNeg()} onClick={this.props.updateStat}>-</button>
          </div>
        </div>

        <a className={this.getLastClassName()}>
          {(this.props.mod < 0) ? <span /> : <span>+</span>}
          {this.props.mod}
        </a>

        <div className={this.getUnderClassName()}>
          <strong>{this.props.tempScore}</strong>
          <div className="statButtons"> 
            <button className={this.getStatPos()} onClick={this.props.updateTempStat}>+</button>
            <button className={this.getStatNeg()} onClick={this.props.updateTempStat}>-</button>
          </div>
        </div>

        <a className={this.getLastClassName()}>
          {(this.props.tempMod < 0) ? <span /> : <span>+</span>}
          {this.props.tempMod}
        </a>

      </div>
  	)
  }
} 

export default connect(mapStateToProps, mapDispatchToProps) (Stat);