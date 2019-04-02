import React, { Component } from "React";
import { connect } from "react-redux";
import Stat from './Stat';
import {
  updateStat,
  updateTempStat
} from "../../js/actions/statsActions";

const mapStateToProps = state => {
  return {
    stats: state.stat.stats,
    statsTemp: state.stat.statsTemporary
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateStat: stat => dispatch(updateStat(stat)), 
    updateTempStat: tempStat => dispatch(updateTempStat(tempStat)), 
  };
};

class Stats extends Component {
  constructor(props) {
    super(props);
  }
  Stats = () =>{
    let statsDefs = ["intelligence", "dexterity", "constitution", "charisma", "wisdom", "strength"];
    let stats = []; 
    let i = 0;
    for(const key in this.props.stats){ 
      if(statsDefs.indexOf(key)>-1 === true){
        if(!this.props.stats.hasOwnProperty(key)) continue;
        const property = this.props.stats[key];
        const modifier = this.props.stats[key.substring(0,3)+"Mod"];
        const className = `${property} ui labeled button`;
        const tempMod = this.props.statsTemp[key.substring(0,3)+"Mod"];
        const tempScore = this.props.statsTemp[key];
        stats.push(
          <Stat
            key={i}
            stat={key}
            value={property}
            modifier={modifier}
            className={className}
            tempMod={tempMod}
            tempScore={tempScore}
          />
        );
        i++;
      }
    }   
    return <div>{stats}</div>;
  }
  render() {
    return (
      <div className="Stats"> 
        <div className="statHeader">Stat</div>
        <div className="statHeader">Current</div>
        <div className="statHeader">Temporary</div>
          {this.Stats()}   
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
