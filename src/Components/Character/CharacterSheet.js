import React, { Component } from "react";
import { connect } from "react-redux";
import CharacterInfo from "./CharInfo";
import Stats from "../Stats/Stats";
import Skills from "../Skills/Skills";
import Saves from "../Saves/Saves";
import Speed from './Speed';
import Bab from "./Bab";
import Gears from "../Equipment/Gears";
import Cmb from './Cmb';
import Cmd from './Cmd';
import Abilities from "../Abilities/Abilities";
import Feats from "../Feats/Feats";
import Languages from "./Languages"
import ArmorClass from "../Ac/ArmorClass";
import Weapons from "../Equipment/Weapons";
import LoginModal from '../Modals/LoginModal'
import RegisterModal from '../Modals/RegisterModal'
import HealthPoints from "./HealthPoints";
import css from "../../css/CharacterSheet.css"; 
import SideDrawer from '../UIComponents/SideDrawer';
import AcItems from '../Ac/AcItems';
import Currency from '../Equipment/Currency';
import Experience from "./Experience";
import SpellSlots from "../Spells/SpellSlots";
import SpellList from "../Spells/SpellList";
import Notes from "../Notes/Notes"
// import SpellList from "../Spells/SpellList"; 
const mapStateToProps = state => {
  return {
    auth: state.auth,
    name: state.character.name,
    homeland: state.character.homeland,
    loginModalVisible: state.ui.loginModalVisible,
    registerModalVisible: state.ui.registerModalVisible,
    darkMode:state.ui.darkMode
  };
};

class CharacterSheet extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getTitle(){
    if(this.props.name !== "" && this.props.homeland === ""){
      return this.props.name;
    }else if(this.props.name !== "" && this.props.homeland !== ""){
      return `${this.props.name} of ${this.props.homeland}`;
    }else{
      return `Enter your character's name!`;
    }
  }

  
  render() {
    const{
      name,
      homeland,
      auth,
      loginModalVisible,
      registerModalVisible,
      darkMode
    } = this.props;
    const sideDrawer = auth.uid ? null : <SideDrawer />;
    const darkModeFn = (dark) =>{ 
      return dark ? "CharacterSheet dark" : "CharacterSheet";
    }
    return (
      <div className={darkModeFn(darkMode)}> 
        <div className="ui stackable grid column twelve wide">
          <LoginModal show={loginModalVisible} />
          <RegisterModal show={registerModalVisible} />
          <h2 className="characterTitle">
            {this.getTitle()}
          </h2>
          <CharacterInfo />   
          <div className="ui stackable grid column eight wide">  
            <Stats />  
            <div className="ui stackable grid column nine wide">
              <HealthPoints />
            </div>
            <ArmorClass />
            <Saves />  
            <Bab />
            <Cmb />
            <Cmd />
            <Weapons />
          </div>
          <div className="ui stackable grid column six wide">
            <Speed />
            <Skills /> 
            <Languages />
            <Experience />
          </div> 
        </div>
        <div className="ui stackable grid row twelve wide">
          <AcItems />
          <Gears />
          <Currency />
          <Abilities />
          <Feats />
          <SpellSlots />
          <SpellList />
          <Notes />

        </div>
        { sideDrawer }   
      </div>
    );
  }
}

export default connect(
  mapStateToProps 
)(CharacterSheet);