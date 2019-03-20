import React, { Component } from "React";
import { connect } from "react-redux";
import AcItem from './AcItem';
import {
addAcItem
} from "./js/actions/acItemsActions";

const mapDispatchToProps = dispatch => {
  return {
    addAcItem: item => dispatch(addAcItem(item))
  };
};
const mapStateToProps = state => {
  return {
    items: state.acItems
  };
};
class AcItems extends Component {
  constructor(props) {
    super(props);
  };
  bonusTotal = () =>{
    let x = 0;
    this.props.items.forEach(item=>{
      if(item.bonus !== ''){
        x = x + parseInt(item.bonus);
      }
    }); 
    return x;
  };
  typeTotal = () =>{
    let x = 0;
    this.props.items.forEach(item=>{
      if(item.type !== ''){
        x = x + parseInt(item.type);
      }
    }); 
    return x;
  };
  checkPenaltyTotal = () =>{
    let x = 0;
    this.props.items.forEach(item=>{
      if(item.checkPenalty !== ''){
        x = x + parseInt(item.checkPenalty);
      }
    }); 
    return x;
  };
  spellFailureTotal = () =>{
    let x = 0;
    this.props.items.forEach(item=>{
      if(item.spellFailure !== ''){
        x = x + parseInt(item.spellFailure);
      }
    }); 
    return x;
  };
  weightTotal = () =>{
    let x = 0;
    this.props.items.forEach(item=>{
      if(item.weight !== ''){
        x = x + parseInt(item.weight);
      }
    }); 
    return x;
  };
  propertiesTotal = () =>{
    let x = 0;
    this.props.items.forEach(item=>{
      if(item.properties !== ''){
        x = x + parseInt(item.properties);
      }
    }); 
    return x;
  };
  acItems = () => {
    let acItems = [];
    this.props.items.forEach((item, i) => {
     acItems.push(
        <AcItem
          key={i}
          id={item.id}
          name={item.name}
          bonus={item.attackBonus} 
          type={item.type}
          checkPenalty={item.range}
          spellFailure={item.ammunition}
          weight={item.weight}
          properties={item.properties}
        />
      );
    });
    return <div>{acItems}</div>;
  };
  render() {
    return (
      <div className="AcItems">
        <div className="acItemsHeader acHeader1">AC Items</div>
        <div className="acBonusheader acHeader2">Bonus</div>
        <div className="acTypeHeader acHeader2">Type</div>
        <div className="acCheckHeader acHeader2">Check Penalty</div>
        <div className="acSpellHeader acHeader2">Spell Failure</div>
        <div className="acWeightheader acHeader2">Weight</div> 
        <div className="acPropertiesheader acHeader2">Properties</div>
         {this.acItems()}
        <div className="acTotals ui small input">
          <div className="totals">
          Totals
          </div>
          <input className="bonusTotal" size="3" value={this.bonusTotal()} readOnly />
          <input className="typeTotal" size="3" value={this.typeTotal()} readOnly />
          <input className="checkTotal" size="6" value={this.checkPenaltyTotal()} readOnly />
          <input className="spellTotal" size="6" value={this.spellFailureTotal()} readOnly />
          <input className="weightTotal" size="4" value={this.weightTotal()} readOnly />
          <input className="propertiesTotal" size="9"  value={this.propertiesTotal()} readOnly />
        </div>
        <button className="ui small button green addNewAcItem" onClick={this.props.addAcItem} > + </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcItems);