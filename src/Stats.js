import React, {Component} from 'React';

class Stats extends Component{
	constructor(props){
		super(props);
		this.state = {
			strength: 11,
			intelligence: 13,
			charisma: 12,
			dexterity:18,
			wisdom: 14,
			constitution: 14
		}
	}
	render(){
		return(
			<div className="Stats ui six wide stackable grid column">
				<div className="strength ui labeled button" tabindex="0">
				  <div className="ui one wide red button">
				    <strong>STR</strong>
				  </div>
				  <div className="ui basic red button">
				    {this.state.strength}
				  </div>
				  <a className="ui basic red label">
				    +0
				  </a>	
				  	<div className="ui inverted red button temp">
				    	<strong>{this.state.strength}</strong>
				 	</div>
				  	<a className="ui basic inverted red label">
				  	+0
				  	</a>
				</div> 

				<div className="strength ui twelve wide labeled button" tabindex="0">
				  <div className="ui one wide teal button">
				    <strong>DEX</strong>
				  </div>
				  <div className="ui basic teal button">
				    {this.state.dexterity}
				  </div>
				  <a className="ui basic teal label">
				    +0
				  </a>	
				  <div className="ui inverted teal button temp">
				    <strong>{this.state.dexterity}</strong>
				  </div>
				  <a className="ui basic inverted teal label">
				  +0
				  </a>	
				</div>

				<div className="strength ui twelve wide labeled button" tabindex="0">
				  <div className="ui orange button">
				    <strong>CON</strong>
				  </div>
				  <div className="ui basic orange button">
				    {this.state.constitution}
				  </div>
				  <a className="ui basic orange label">
				  +0
				  </a>	
				  <div className="ui inverted orange button temp">
				    <strong>{this.state.constitution}</strong>
				  </div>
				  <a className="ui basic inverted orange label">
				  +0
				  </a>	
				</div>


				<div className="strength ui twelve wide labeled button" tabindex="0">
				  <div className="ui  blue button">
				    <strong>INT</strong>
				  </div>
				  <div className="ui basic blue button">
				    {this.state.intelligence}
				  </div>
				  <a className="ui basic blue label">
				    +0
				  </a>	
				  <div className="ui inverted blue button temp">
				    <strong>{this.state.intelligence}</strong>
				  </div>
				  <a className="ui basic inverted blue label">
				  +0
				  </a>	
				</div>



				<div className="wisdom ui twelve purple wide labeled button" tabindex="0">
				  <div className="ui button violet">
				    <strong>WIS</strong>
				  </div>
				  <div className="ui basic violet button">
				    {this.state.wisdom}
				  </div>
				  <a className="ui basic violet label">
				    +0
				  </a>	
				  <div className="ui inverted violet button temp">
				    <strong> {this.state.wisdom}</strong>
				  </div>
				  <a className="ui basic inverted violet label">
				  +0
				  </a>	
				</div>
				
				<div className="charisma ui twelve pink wide labeled button" tabindex="0">
				  <div className="ui button pink">
				    <strong>CHA</strong>
				  </div>
				  <div className="ui basic pink button">
				    {this.state.charisma}
				  </div>
				  <a className="ui basic pink label">
				    +0
				  </a>	
				  <div className="ui inverted pink button temp">
				    <strong>{this.state.charisma}</strong>
				  </div>
				  <a className="ui basic inverted pink label">
				  +0
				  </a>	
				</div>
			</div>
		)
	}
}

export default Stats;