import store from './js/store/index';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import CharacterSheet from './CharacterSheet';
import { Provider } from 'react-redux';


window.store = store;
class Layout extends Component{
	render(){
		return(  
			<Provider store={store}>
				<div className="Layout"> 
					<CharacterSheet />
				</div>
			</Provider>
		)
	}
}

ReactDOM.render(
  React.createElement(Layout,null),
  document.getElementById('app')
);

module.hot.accept();
 
