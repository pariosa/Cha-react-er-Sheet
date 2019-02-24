import React, { Component } from 'react';

class HealthPoints extends Component{
	render(){
		return (
			<div className="HealthPoints ui four wide">
				<div className=" ui  labeled button small " tabindex="0">
				  	<div className="ui black button small">
				   		<strong>Hit Points</strong>
				  	</div>
					<div className="ui three wide left labeled input">
						<div className="ui left corner label">
							total
						</div>
					 	<input size="10" type="text" />
				 	</div>
				 	<div className="ui three wide left labeled input">
						<div className="ui left corner label">
						DR
						</div>
					 	<input size="4" type="text" />
				 	</div>
				 	<br/>
				</div>
				<div class="ui form">
				 	<div className="field">
				 	    <label>Wounds/Current HP</label>
    					<textarea rows="1">
    					</textarea>
					</div>
				</div>
				<div class="ui form">
				 	<div className="field">
				 	    <label>Nonlethal Damage</label>
    					<textarea rows="1">
    					</textarea>
					</div>
				</div>
				<div className=" ui  labeled button small" tabindex="0">
				  	<div className="ui black button small">
				   		<strong>Initiative</strong>
				  	</div>
					<div className="ui three wide left labeled input">
						<div className="ui left corner label">
							total
						</div>
					 	<input size="2" type="text" />
				 	</div>
				 	=
				 	<div className="ui three wide left labeled input">
						<div className="ui left corner label">
						Dex mod
						</div>
					 	<input size="4" type="text" />
				 	</div> 
					+
				 	<div className="ui three wide left labeled input">
						<div className="ui left corner label">
						Misc mod
						</div>
					 	<input size="4" type="text" />
				 	</div>
				 	<br/>
				</div>
			</div>
		)
	}
}
export default HealthPoints;