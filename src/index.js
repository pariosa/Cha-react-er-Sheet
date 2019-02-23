import store from './js/store/index';
import React,{Component} from 'react';
//import changeValue from "../js/actions/index;
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import CharacterSheet from './CharacterSheet';
window.store = store;
class Layout extends Component{
	render(){

		return(  
			<div className="Layout"> 

				<CharacterSheet />

			</div>
		)
	}
}

ReactDOM.render(
  React.createElement(Layout,null),
  document.getElementById('app')
);

module.hot.accept();
 
