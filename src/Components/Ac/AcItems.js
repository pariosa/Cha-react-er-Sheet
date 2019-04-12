import React, { Component } from "react";
import { connect } from "react-redux";
import AcItem from './AcItem';
import {
addAcItem
} from "../../js/actions/acItemsActions";

const mapDispatchToProps = {
    addAcItem
};
const mapStateToProps = state => {
  return {
    items: state.acItems
  };
};

class AcItems extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  };

  bonusTotal(){
    let x = 0;
    const items = this.props;
    items.items.forEach(item=>{
      if(item.bonus !== ''){
        x += parseInt(item.bonus,10);
      }
    }); 
    return x;
  };

  typeTotal(){
    let x = 0;
    const items = this.props;
    items.items.forEach(item=>{
      if(item.type !== ''){
        x += parseInt(item.type,10);
      }
    }); 
    return x;
  };

  checkPenaltyTotal(){
    let x = 0;
    const items = this.props;
    items.items.forEach(item=>{
      if(item.checkPenalty !== ''){
        x += parseInt(item.checkPenalty,10);
      }
    }); 
    return x;
  };

  spellFailureTotal(){
    let x = 0;
    const items = this.props;
    items.items.forEach(item=>{
      if(item.spellFailure !== ''){
        x += parseInt(item.spellFailure,10);
      }
    }); 
    return x;
  };

  weightTotal (){
    let x = 0;
    const items = this.props;
    items.items.forEach(item=>{
      if(item.weight !== ''){
        x += parseInt(item.weight,10);
      }
    }); 
    return x;
  };

  propertiesTotal(){
    let x = 0;
    const items = this.props;
    items.items.forEach(item=>{
      if(item.properties !== ''){
        x += parseInt(item.properties,10);
      }
    }); 
    return x;
  };

  acItems(){
    const acItems = []; 
    const items = this.props;
    items.items.forEach((item, i) => {
     acItems.push(
       <AcItem
         key={item.id}
         id={item.id}
         name={item.name}
         bonus={item.bonus} 
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
    const { addAcItem } = this.props;
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
          <input className="propertiesTotal" size="9" value={this.propertiesTotal()} readOnly />
        </div>
        <button type="button" className="ui small button green addNewAcItem" onClick={addAcItem}> + </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcItems);