import React, { Component } from "React";
import { connect } from "react-redux";
import { 
updateBaseSave,
updateMagicSaveModifier,
updateMiscSaveMod,
updateTempSaveMod,
} from "./js/actions/savesActions";

const mapDispatchToProps = dispatch => {
  return {
    updateBaseSave: baseSave=> dispatch(updateBaseSave(baseSave)),
    updateMagicSaveModifier:magicMod => dispatch(updateMagicSaveModifier(magicMod)),
    updateMiscSaveMod: miscMod => dispatch(updateMiscSaveMod(miscMod)),
    updateTempSaveMod: tempMod => dispatch(updateTempSaveMod(tempMod)),
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    stats: state.action.character.stats,
    title: state.action.character.saves[ownProps.id].save,
    stat: state.action.character.saves[ownProps.id].stat,
    base: state.action.character.saves[ownProps.id].base,
    miscMod: state.action.character.saves[ownProps.id].miscMod,
    magicMod:state.action.character.saves[ownProps.id].magicMod,
    tempMod: state.action.character.saves[ownProps.id].tempMod,
    id: state.action.character.saves[ownProps.id].id
  };
};
class Save extends Component {
  constructor(props) {
    super(props);
  }
  statModifierOnly = () => {
    let stat;
    switch (this.props.stat) {
      case "dexterity":
        stat = this.props.stats.dexMod;
        break;  
      case "wisdom":
        stat = this.props.stats.wisMod;
        break;
      case "constitution":
        stat = this.props.stats.conMod;
        break;  
    }
    return stat;
  };
  getTotalSave = () =>{
    return (parseInt(this.props.base) + parseInt(this.statModifierOnly()) + parseInt(this.props.magicMod) + parseInt(this.props.miscMod))
  }
  render() {
    return (
      <div className="Save">
        <div  className="SaveTitle">
          {this.props.title}
          <div className="SaveSubtitle">
            {this.props.stat}
          </div>
        </div>
        <div className="SaveModifiers">
          <input type="text" size="1" className="TotalSave" value={"+" + this.getTotalSave()} />
           =&nbsp;  
          <input type="text" size="1" className="BaseSave" value={this.props.base}  onChange={this.props.updateBaseSave} />
          &nbsp; + &nbsp;   
          <input type="text" size="1" className={"SaveStat " + this.props.stat} value={this.statModifierOnly()} />
          + &nbsp;  
          <input type="text" size="1" className="" value={this.props.base}  onChange={this.props.updateBaseSave} />
          +              
          <input type="text" size="1" className="MagicMod"  value={this.props.magicMod}  onChange={this.props.updateMagicSaveModifier} />
            +    
          <input type="text" size="1" className="tempMod" value={this.props.tempMod}  onChange={this.props.updateTempSaveMod} />
        </div>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Save);