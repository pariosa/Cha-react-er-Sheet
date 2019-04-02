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
const mapDispatchtoProps = dispatch =>{
	return{
		updateCp: count => dispatch(updateCp(count)),
		updateSp: count => dispatch(updateSp(count)),
		updateGp: count => dispatch(updateGp(count)),
		updatePp: count => dispatch(updatePp(count)),
	}
}

class Currency extends Component{
	render(){
		return(
  <div className="Currency">
    <div className="currencyHeader">

					Money
				
    </div>
    <div className="CP">

					CP - 
      <input className="CP" value={this.props.currency.CP} onChange={this.props.updateCp} />
    </div>
    <div className="SP">

					SP - 
      <input className="SP" value={this.props.currency.SP} onChange={this.props.updateSp} />
    </div>
    <div className="GP">

					GP - 
      <input className="GP" value={this.props.currency.GP} onChange={this.props.updateGp} />
    </div>
    <div className="PP">

					PP - 
      <input className="PP" value={this.props.currency.PP} onChange={this.props.updatePp} />
    </div>
  </div>
		)
	}
}


export default connect(mapStateToProps,mapDispatchtoProps)(Currency)
