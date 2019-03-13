import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import CharacterSheet from "./CharacterSheet";
import store from "./js/store/index";
import Header from './Header'; 


window.store = store;
class Layout extends Component { 
  render() { 
    return (
      <Provider store={store}>
        <div className="Layout">
          <Header />
          <CharacterSheet /> 
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(
  React.createElement(Layout, null),
  document.getElementById("app")
);

module.hot.accept();
