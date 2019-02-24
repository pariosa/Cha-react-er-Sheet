import React, {Component} from 'React';

class CharacterInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: 'stubby',
			alignment:'C/E',
			player:'peter a.',
			class:'fighter',
			level:21,
			diety:'Nethys',
			homeland:'the swamp',
			race:'human',
			size: 'm',
			gender:'M',
			age: 28,
			height: '6\'1',
			weight:'230lbs',
			hair:'brn',
			eyes:'grn'
		}
	}

	changeHandler = (event) =>{
		this.setState({value: event.target.value});
	}

	render(){

		return(  
			 <div className="charinfo ui ten wide stackable grid column">
			 	<div className="ui six wide left labeled input">
				  <div className="ui left corner label">
				  name
				  </div>
			 	  <input size="26" type="text" onChange={this.changeHandler} value={this.state.name}/>
			 	</div>

				<div className="ui two wide left  labeled input">
				  <div className="ui left corner label">
				  Align
				  </div>
			 	  <input size="10" type="text" value={this.state.alignment}/>
			 	</div>
			 	
			 	<div className="ui left  labeled input">	
				  <div className="ui left corner label">
				  player
				  </div>		 	
			 		<input size="26" type="text" value={this.state.player}/>
			 	</div>

			 	<div className="ui left four wide  labeled input">	
				  <div className="ui left corner label">
				  class
				  </div>		 	
			 		<input size="18" type="text" value={this.state.class}/>
			 	</div>

			 	<div className="ui left six wide  labeled input">
				  <div className="ui left corner label">
				  level
				  </div>
				  <input  size="1" type="text" value={this.state.level}/>
				</div>	

				<div className="ui left three wide labeled input">
				  <div className="ui left corner label">
				  diety
				  </div>
				  <input  size="13" type="text" value={this.state.diety}/>
				</div>		
			 	<div className="ui left eight wide labeled input">
				  <div className="ui left corner label">
				  homeland
				  </div>
				  <input size="22" type="text" value={this.state.homeland}/>
				</div>					 	
				<div className="ui left three wide  labeled input">
				  <div className="ui left corner label">
				  race
				  </div>
				  <input type="text" size="8" value={this.state.race}/>
				</div>		
				<div className="ui left two wide labeled input">
				  <div className="ui left corner label">
				  size
				  </div>
				  <input type="text" size="4" value={this.state.size}/>
				</div>		
				<div className="ui left two wide labeled input">
				  <div className="ui left corner label">
				  gender
				  </div>
					<input type="text" size="4" value={this.state.gender}/>
				</div>		
				<div className="ui left two wide labeled input">
				  <div className="ui left corner label">
				  age
				  </div>
				  <input type="text" size="4" value={this.state.age}/>
				</div>

				<div className="ui left two wide labeled input">
				  <div className="ui left corner label">
				  height
				  </div>
				  <input type="text" size="6" value={this.state.height}/>
				</div>

				<div className="ui left two wide labeled input">
				  <div className="ui left corner label">
				  weight
				  </div>
				  <input type="text" size="6" value={this.state.weight}/>
				</div>		
				<div className="ui left one wide labeled input">
				  <div className="ui left corner label">
				  hair
				  </div>
				  <input type="text" size="6" value={this.state.hair}/>
				</div>		

				<div className="ui left one wide labeled input">
				<input type="text" size="6" value={this.state.eyes}/>
				  <div className="ui left corner label">
				  eyes
				  </div>
				</div>		 
			 </div>
		)
	}
}

export default CharacterInfo;