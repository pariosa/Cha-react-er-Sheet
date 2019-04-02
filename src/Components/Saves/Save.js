import React, { Component } from "react";
import { connect } from "react-redux";
import { 
updateBaseSave,
updateMagicSaveModifier,
updateMiscSaveMod,
updateTempSaveMod,
} from "../../js/actions/savesActions";

const mapDispatchToProps = {
    updateBaseSave,
    updateMagicSaveModifier,
    updateMiscSaveMod,
    updateTempSaveMod,
};

const mapStateToProps = (state, ownProps) => {
  return {
    stats: state.stat.stats,
    title: state.saves[ownProps.id].save,
    stat: state.saves[ownProps.id].stat,
    base: state.saves[ownProps.id].base,
    miscMod: state.saves[ownProps.id].miscMod,
    magicMod: state.saves[ownProps.id].magicMod,
    tempMod: state.saves[ownProps.id].tempMod,
    id: state.saves[ownProps.id].id
  };
};
class Save extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getTotalSave(){
    const {
      base,
      magicMod,
      miscMod,
      tempMod
    } = this.props;
    return (parseInt(base,10) + parseInt(this.statModifierOnly(),10) + parseInt(magicMod,10) + parseInt(miscMod,10) + parseInt(tempMod,10))
  }  

  statModifierOnly(){
    const {
      stats,
      stat
    } = this.props 
    let statVal;
    switch (stat) {
      case "dexterity":
        statVal = stats.dexMod;
        break;  
      case "wisdom":
        statVal =  stats.wisMod;
        break;
      case "constitution":
        statVal =  stats.conMod;
        break; 
      default:
        break; 
    }
    return statVal;
  }

  render() {
    const {
      title,
      stats,
      save,
      stat,
      base,
      miscMod,
      magicMod,
      tempMod,
      id,
      updateBaseSave,
      updateMagicSaveModifier,
      updateMiscSaveMod,
      updateTempSaveMod
    } = this.props;
    return (
      <div className="Save" id={id}>
        <div className="SaveTitle">
          {title}
          <div className="SaveSubtitle">
            {stat}
          </div>
        </div>
        <div className="SaveModifiers">
          <input type="text" size="3" className="TotalSave" value={`+ ${this.getTotalSave()}`} readOnly />
           =&nbsp;  
          <input type="text" size="2" className="BaseSave" value={base} onChange={updateBaseSave} />
          &nbsp; + &nbsp;   
          <input type="text" size="2" className={`SaveStat ${stat}`} value={this.statModifierOnly()} readOnly />
          + &nbsp;  
          <input type="text" size="2" className="" value={magicMod} onChange={updateMagicSaveModifier} />
          +              
          <input type="text" size="2" className="MagicMod" value={miscMod} onChange={updateMiscSaveMod} />
            +    
          <input type="text" size="2" className="tempMod" value={tempMod} onChange={updateTempSaveMod} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Save);