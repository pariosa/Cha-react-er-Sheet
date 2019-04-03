import React, { Component } from 'react';
import { connect } from 'react-redux';
import{
	updateCp,
	updateSp,
	updateGp,
	updatePp
} from "../../js/actions/currencyActions";

const mapStateToProps = state =>{
	return{
		currency:state.currency
	}
}
const mapDispatchtoProps = {
		updateCp,
		updateSp,
		updateGp,
		updatePp
}

class Currency extends Component{
	constructor(props){
		super(props);
		this.props = props;
	}
	
	render(){
		const {
			currency,
			updateCp,
			updateSp,
			updateGp,
			updatePp
		} = this.props; 
		return(
  <div className="Currency">
    <div className="currencyHeader">
		Money
    </div>
    <div className="CP">
		CP - 
      <input className="CP" value={currency.CP} onChange={updateCp} />
    </div>
    <div className="SP">
		SP - 
      <input className="SP" value={currency.SP} onChange={updateSp} />
    </div>
    <div className="GP">
		GP - 
      <input className="GP" value={currency.GP} onChange={updateGp} />
    </div>
    <div className="PP">
		PP - 
      <input className="PP" value={currency.PP} onChange={updatePp} />
    </div>
  </div>
		)
	}
}


export default connect(mapStateToProps,mapDispatchtoProps)(Currency)
