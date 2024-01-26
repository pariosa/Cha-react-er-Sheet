import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'fomantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CharacterSheet from "./Components/Character/CharacterSheet";
import Header from './Components/UIComponents/Header';
import store from "./js/store/index";
 
window.store = store;
function Layout (){  
  return (
    <Provider store={store}>
      <div className="Layout">
        <Header />
        <CharacterSheet /> 
      </div>
    </Provider>
  ); 
}
store.firebaseAuthIsReady.then(()=>{

  ReactDOM.render(
    React.createElement(Layout, null),
    document.getElementById("app")
  );
    

});

module.hot.accept();
