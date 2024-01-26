import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/CharacterSheet.css";
import Abilities from "../Abilities/Abilities";
import AcItems from '../Ac/AcItems';
import ArmorClass from "../Ac/ArmorClass";
import Currency from '../Equipment/Currency';
import Gears from "../Equipment/Gears";
import Weapons from "../Equipment/Weapons";
import Feats from "../Feats/Feats";
import LoginModal from '../Modals/LoginModal';
import RegisterModal from '../Modals/RegisterModal';
import Notes from "../Notes/Notes";
import Saves from "../Saves/Saves";
import Skills from "../Skills/Skills";
import SpellList from "../Spells/SpellList";
import SpellSlots from "../Spells/SpellSlots";
import Stats from "../Stats/Stats";
import SideDrawer from '../UIComponents/SideDrawer';
import Bab from "./Bab";
import CharacterInfo from "./CharInfo";
import Cmb from './Cmb';
import Cmd from './Cmd';
import Experience from "./Experience";
import HealthPoints from "./HealthPoints";
import Languages from "./Languages";
import Speed from './Speed';
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
    }if(this.props.name !== "" && this.props.homeland !== ""){
      return `${this.props.name} of ${this.props.homeland}`;
    }
      return `Enter your character's name!`;
    
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