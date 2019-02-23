import React, {Component} from 'React';

class Stats extends Component{
	constructor(props){
		super(props);
		this.state = {
			strength: 10,
			intelligence: 10,
			charisma: 10,
			dexterity:10,
			wisdom: 10,
			constitution: 10
		}
	}
	render(){
		return(
			<div className="Stats ui eight wide stackable grid column">
				<div>
					INT <input className="intelligence column"  value={this.state.intelligence} />
				</div>
				<div>
					WIS <input className="wisdom column" value={this.state.wisdom} />
				</div>
				<div>
					CON <input className="constitution column" value={this.state.constitution} />
				</div>
				<div>
					DEX <input className="dexterity column" value={this.state.dexterity} />
				</div>
				<div>
					STR <input className="strength column" value={this.state.strength} />
				</div>
				<div>
					CHA <input className="charisma column" value={this.state.charisma} />
				</div>
			</div>
		)
	}


}

export default Stats;