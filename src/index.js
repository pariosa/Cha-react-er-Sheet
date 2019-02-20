import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';


const title = 'Hello World!';

class Sheet extends React.Component{
	render(){
		return(  
			<div className="ui grid">
			  <div className="doubling eight column row">
			    <div className="column">hello</div>
			    <div className="column">how</div>
			    <div className="column">are</div>
			    <div className="column">you</div>
			    <div className="column">today</div>
			    <div className="column">i</div>
			    <div className="column">am</div>
			    <div className="column">fine</div>
			  </div>
			  <div className="doubling six column row">
			    <div className="column">today</div>
			    <div className="column">is</div>
			    <div className="column">a</div>
			    <div className="column">great</div>
			    <div className="column">day,</div>
			    <div className="column">nice!</div>
			  </div>
			  <div className="doubling four column row">
			    <div className="column">hello</div>
			    <div className="column">I</div>
			    <div className="column">am</div>
			    <div className="column">dog</div>
			  </div>
			</div>
		)
	}
}

ReactDOM.render(
  React.createElement(Sheet,null),
  document.getElementById('app')
);

module.hot.accept();
 