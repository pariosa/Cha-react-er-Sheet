import React, {Component} from 'React';
import { connect } from 'react-redux';
import { incrementStr, incrementStrTemp, decrementStr, decrementStrTemp, incrementDex, incrementDexTemp, decrementDex, decrementDexTemp, incrementCon, incrementConTemp, decrementCon, decrementConTemp, incrementInt, incrementIntTemp, decrementInt, decrementIntTemp, incrementWis, incrementWisTemp, decrementWis, decrementWisTemp, incrementCha, incrementChaTemp, decrementCha, decrementChaTemp} from './js/actions/statsActions';

const mapStateToProps = (state) => {
	return{
			strength: state.action.character.stats.strength,
			dexterity: state.action.character.stats.dexterity,
			constitution: state.action.character.stats.constitution,
			wisdom:state.action.character.stats.wisdom,
			intelligence:state.action.character.stats.intelligence,
			charisma:state.action.character.stats.charisma,
			strengthTemp: state.action.character.statsTemporary.strength,
			dexterityTemp: state.action.character.statsTemporary.dexterity,
			constitutionTemp: state.action.character.statsTemporary.constitution,
			wisdomTemp:state.action.character.statsTemporary.wisdom,
			intelligenceTemp:state.action.character.statsTemporary.intelligence,
			charismaTemp:state.action.character.statsTemporary.charisma,	
			strengthMod: state.action.character.stats.strMod,
			dexterityMod: state.action.character.stats.dexMod,
			constitutionMod: state.action.character.stats.conMod,
			wisdomMod:state.action.character.stats.wisMod,
			intelligenceMod:state.action.character.stats.intMod,
			charismaMod:state.action.character.stats.chaMod,
			strengthTempMod: state.action.character.statsTemporary.strMod,
			dexterityTempMod: state.action.character.statsTemporary.dexMod,
			constitutionTempMod: state.action.character.statsTemporary.conMod,
			wisdomTempMod:state.action.character.statsTemporary.wisMod,
			intelligenceTempMod:state.action.character.statsTemporary.intMod,
			charismaTempMod:state.action.character.statsTemporary.chaMod,	
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		incrementStr: (stat) => dispatch(incrementStr(stat)),
		incrementStrTemp: (stat) => dispatch(incrementStrTemp(stat)),
		incrementDex: (stat) => dispatch(incrementDex(stat)),
		incrementDexTemp: (stat) => dispatch(incrementDexTemp(stat)),
		incrementCon: (stat) => dispatch(incrementCon(stat)),
		incrementConTemp: (stat) => dispatch(incrementConTemp(stat)),
		incrementWis: (stat) => dispatch(incrementWis(stat)),
		incrementWisTemp: (stat) => dispatch(incrementWisTemp(stat)),
		incrementInt: (stat) => dispatch(incrementInt(stat)),
		incrementIntTemp: (stat) => dispatch(incrementIntTemp(stat)),
		incrementCha: (stat) => dispatch(incrementCha(stat)),
		incrementChaTemp: (stat) => dispatch(incrementChaTemp(stat)),
		decrementStr: (stat) => dispatch(decrementStr(stat)),
	    decrementStrTemp: (stat) => dispatch(decrementStrTemp(stat)),
		decrementDex: (stat) => dispatch(decrementDex(stat)),
		decrementDexTemp: (stat) => dispatch(decrementDexTemp(stat)),
		decrementCon: (stat) => dispatch(decrementCon(stat)),
		decrementConTemp: (stat) => dispatch(decrementConTemp(stat)),
		decrementWis: (stat) => dispatch(decrementWis(stat)),
		decrementWisTemp: (stat) => dispatch(decrementWisTemp(stat)),
		decrementInt: (stat) => dispatch(decrementInt(stat)),
		decrementIntTemp: (stat) => dispatch(decrementIntTemp(stat)),
		decrementCha: (stat) => dispatch(decrementCha(stat)),
		decrementChaTemp: (stat) => dispatch(decrementChaTemp(stat))
	}
}

class Stats extends Component{
	constructor(props){
		super(props); 
	}
	render(){
		return(
			<div className="Stats ui six wide stackable grid column ">
				<div className="ui stackable column four wide">
				stat
				</div>
				<div className="ui stackable column four wide">
				current
				</div>
				<div className="ui stackable column four wide">
				temporary
				</div>

				<div className="strength ui labeled button " tabIndex="0">
					<div className="ui one wide red button">
					    <strong>STR</strong>
					</div> 
				  	<div className="ui basic red button abilityScore">
				    	{this.props.strength}
						<div className="statButtons">
							<button className="strPos statPos" onClick={this.props.incrementStr} >+</button>
							<button className="strNeg statNeg" onClick={this.props.decrementStr} >-</button>
						</div>
				  	</div> 
				  	<a className="ui basic red label ">
						{this.props.strengthMod < 0 ? ( <span></span> ) : (<span>+</span>)}{this.props.strengthMod}
				  	</a>	
				  	<div className="ui inverted red button temp abilityScore">
				    	<strong>{this.props.strengthTemp}</strong>
				    	<div className="statButtons">
							<button className="strPos statPos" onClick={this.props.incrementStrTemp} >+</button>
							<button className="strNeg statNeg" onClick={this.props.decrementStrTemp} >-</button>
						</div>
				 	</div>
				  	<a className="ui basic inverted red label">
				  		{this.props.strengthTempMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.strengthTempMod}
				  	</a>
				</div> 


				<div className="dexterity ui twelve wide labeled button" tabIndex="0">
					<div className="ui one wide teal button">
						<strong>DEX</strong>
					</div>
				  	<div className="ui basic teal button abilityScore">
				    	{this.props.dexterity}
				    	<div className="statButtons">
							<button className="dexPos statPos" onClick={this.props.incrementDex} >+</button>
							<button className="dexNeg statNeg" onClick={this.props.decrementDex} >-</button>
						</div>
				  	</div>
				  	<a className="ui basic teal label">
				    	{this.props.dexterityMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.dexterityMod}
					</a>	
				  	<div className="ui inverted teal button temp abilityScore">
				    	<strong>{this.props.dexterityTemp}</strong>
				    	<div className="statButtons">
							<button className="dexPos statPos" onClick={this.props.incrementDexTemp} >+</button>
							<button className="dexNeg statNeg" onClick={this.props.decrementDexTemp} >-</button>
						</div>
				  	</div>
					<a className="ui basic inverted teal label">
						{this.props.dexterityTempMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.dexterityTempMod}
				  	</a>	
				</div>


				<div className="strength ui twelve wide labeled button" tabIndex="0">
					<div className="ui orange button">
				    	<strong>CON</strong>
				  	</div>
				  	<div className="ui basic orange button abilityScore">
				    	{this.props.constitution}
				    	<div className="statButtons">
							<button className="conPos statPos" onClick={this.props.incrementCon} >+</button>
							<button className="conNeg statNeg" onClick={this.props.decrementCon} >-</button>
						</div>
				  	</div>
				  	<a className="ui basic orange label">
				    	{this.props.constitutionMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.constitutionMod}
				  	</a>	
				  	<div className="ui inverted orange button temp abilityScore">
				    	<strong>{this.props.constitutionTemp}</strong>
				    	<div className="statButtons">
							<button className="conPos statPos" onClick={this.props.incrementConTemp} >+</button>
							<button className="conNeg statNeg" onClick={this.props.decrementConTemp} >-</button>
						</div>
				  	</div>
				  	<a className="ui basic inverted orange label">
				  		{this.props.constitutionTempMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.constitutionTempMod}
				  	</a>	
				</div>


				<div className="strength ui twelve wide labeled button" tabIndex="0">
				 	<div className="ui  blue button">
				   		<strong>INT</strong>
				  	</div>
				  	<div className="ui basic blue button abilityScore">
				    	{this.props.intelligence}
				    	<div className="statButtons">
							<button className="intPos statPos" onClick={this.props.incrementInt} >+</button>
							<button className="intNeg statNeg" onClick={this.props.decrementInt} >-</button>
						</div>
				  	</div>
				  	<a className="ui basic blue label">
				    	{this.props.intelligenceMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.intelligenceMod}
				  	</a>	
				  	<div className="ui inverted blue button temp abilityScore">
				    	<strong>{this.props.intelligenceTemp}</strong>
				    	<div className="statButtons">
							<button className="intPos statPos" onClick={this.props.incrementIntTemp} >+</button>
							<button className="intNeg statNeg" onClick={this.props.decrementIntTemp} >-</button>
						</div>
				  	</div>
				  	<a className="ui basic inverted blue label">
				  		{this.props.intelligenceTempMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.intelligenceTempMod}
				  	</a>	
				</div>


				<div className="wisdom ui twelve purple wide labeled button" tabIndex="0">
				  	<div className="ui button violet">
				    	<strong>WIS</strong>
				  	</div>
				  	<div className="ui basic violet button abilityScore">
				    	{this.props.wisdom}
				    	<div className="statButtons">
							<button className="wisPos statPos" onClick={this.props.incrementWis} >+</button>
							<button className="wisNeg statNeg" onClick={this.props.decrementWis} >-</button>
						</div>
				  	</div>
					<a className="ui basic violet label">
				    	{this.props.wisdonMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.wisdomMod}
				  	</a>	
				  	<div className="ui inverted violet button temp abilityScore">
				    	<strong> {this.props.wisdomTemp}</strong>
				    	<div className="statButtons">
							<button className="wisPos statPos" onClick={this.props.incrementWisTemp} >+</button>
							<button className="wisNeg statNeg" onClick={this.props.decrementWisTemp} >-</button>
						</div>
				  	</div>
				  	<a className="ui basic inverted violet label">
				  		{this.props.wisdomTempMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.wisdomTempMod}
				  	</a>	
				</div>

				
				<div className="charisma ui twelve pink wide labeled button" tabIndex="0">
				  	<div className="ui button pink">
				    	<strong>CHA</strong>
				  	</div>
				  	<div className="ui basic pink button abilityScore">
				    	{this.props.charisma}
				    	<div className="statButtons">
							<button className="chaPos statPos" onClick={this.props.incrementCha} >+</button>
							<button className="chaNeg statNeg" onClick={this.props.decrementCha} >-</button>
						</div>
				  	</div>
				  	<a className="ui basic pink label">
				    	{this.props.charismaMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.charismaMod}
				  	</a>	
				  	<div className="ui inverted pink button temp abilityScore">
				    <strong>{this.props.charismaTemp}</strong>
				    	<div className="statButtons">
							<button className="chaPos statPos" onClick={this.props.incrementChaTemp} >+</button>
							<button className="chaNeg statNeg" onClick={this.props.decrementChaTemp} >-</button>
						</div>
				  	</div>
				  	<a className="ui basic inverted pink label">
				  		{this.props.charismaTempMod < 0 ? (<span></span>) : (<span>+</span>)}{this.props.charismaTempMod}
				 	</a>	
				</div>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (Stats);
