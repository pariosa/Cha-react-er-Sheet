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

// import SpellList from "../Spells/SpellList"; 
const mapStateToProps = state => {
  return {
    auth: state.auth,
    name: state.character.name,
    homeland: state.character.homeland,
    loginModalVisible: state.ui.loginModalVisible,
    registerModalVisible: state.ui.registerModalVisible
  };
};

class CharacterSheet extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
 
  render() {
    const{
      name,
      homeland,
      auth,
      loginModalVisible,
      registerModalVisible,
    } = this.props;

    const sideDrawer = auth.uid ? null : <SideDrawer />;
    return (
      <div className="CharacterSheet"> 
        <div className="ui stackable grid column twelve wide">
          <LoginModal show={loginModalVisible} />
          <RegisterModal show={registerModalVisible} />
          <h2 className="characterTitle">
            {`
              ${name} of ${homeland}
            `}
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

        </div>
        { sideDrawer }   
      </div>
    );
  }
}

export default connect(
  mapStateToProps 
)(CharacterSheet);