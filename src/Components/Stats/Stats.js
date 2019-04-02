import React, { Component } from "react";
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
const mapDispatchToProps = {
    updateStat, 
    updateTempStat, 
};

class Stats extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  Stats(){
    const {
      stats,
      statsTemp
    } = this.props;
    const statsDefs = ["intelligence", "dexterity", "constitution", "charisma", "wisdom", "strength"];
    const statsArr = []; 
    let i = 0;
    for(const key in stats){ 
      if(statsDefs.indexOf(key)>-1 === true){
        if(!stats.hasOwnProperty(key)) continue;
        const property = stats[key];
        const modifier = stats[key.substring(0,3)+"Mod"];
        const className = `${property} ui labeled button`;
        const tempMod = statsTemp[key.substring(0,3)+"Mod"];
        const tempScore = statsTemp[key];
        statsArr.push(
          <Stat
            key={key}
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
    return <div>{statsArr}</div>;
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
