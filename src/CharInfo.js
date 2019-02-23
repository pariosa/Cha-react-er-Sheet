import React, {Component} from 'React';

class CharacterInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: 'stubby',
			alignment:'C/E',
			player:'peter a.',
			level:1,
			diety:'Nethys',
			homeland:'the swamp',
			race:'human',
			size: 'm',
			gender:'M',
			age: 28,
			height: '6\'1',
			weight:'230lbs',
			hair:'brown',
			eyes:'green'
		}
	}

	changeHandler = (event) =>{
		this.setState({value: event.target.value});
	}

	render(){

		return(  
			 <div className="ui eight wide stackable grid column">
			 	<div className="ui left corner labeled input">
				  <div className="ui left corner label">
				    name
				  </div>
			 		<input type="text" onChange={this.changeHandler} value={this.state.name}/>
			 	</div>

				<div className="ui left corner labeled input">
				  <div className="ui left corner label">
				  Align
				  </div>
			 		<input type="text" value={this.state.alignment}/>
			 	</div>
			 	
			 	<div className="ui left corner labeled input">	
				  <div className="ui left corner label">
				  player
				  </div>		 	
			 		<input type="text" value={this.state.player}/>
			 	</div>

			 	<div className="ui left corner labeled input">
				<input type="text" value={this.state.level}/>
				  <div className="ui left corner label">
				  level
				  </div>
				</div>		
			 	<div className="ui left corner labeled input">
				<input type="text" value={this.state.homeland}/>
				  <div className="ui left corner label">
				  homeland
				  </div>
				</div>					 	
				<div className="ui left corner labeled input">
				<input type="text" value={this.state.race}/>
				  <div className="ui left corner label">
				  race
				  </div>
				</div>		
				<div className="ui left corner labeled input">
				<input type="text" value={this.state.size}/>
				  <div className="ui left corner label">
				  size
				  </div>
				</div>		
				<div className="ui left corner labeled input">
				<input type="text" value={this.state.gender}/>
				  <div className="ui left corner label">
				  gender
				  </div>
				</div>		
				<div className="ui left corner labeled input">
				<input type="text" value={this.state.age}/>
				  <div className="ui left corner label">
				  age
				  </div>
				</div>		
				<div className="ui left corner labeled input">
				<input type="text" value={this.state.height}/>
				  <div className="ui left corner label">
				  height
				  </div>
				</div>		
				<div className="ui left corner labeled input">
				<input type="text" value={this.state.weight}/>
				  <div className="ui left corner label">
				  weight
				  </div>
				</div>		
				<div className="ui left corner labeled input">
				<input type="text" value={this.state.hair}/>
				  <div className="ui left corner label">
				  hair
				  </div>
				</div>		
				<div className="ui left corner labeled input">
				<input type="text" value={this.state.eyes}/>
				  <div className="ui left corner label">
				  eyes
				  </div>
				</div>		 
			 </div>
		)
	}
}

export default CharacterInfo;