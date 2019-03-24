import React, { Component } from "React";
import { connect } from "react-redux";
import CharacterInfo from "./CharInfo";
import Stats from "./Stats";
import Skills from "./Skills";
import Saves from "./Saves";
import Speed from './Speed';
import Bab from "./Bab";
import Gears from "./Gears";
import Cmb from './Cmb';
import Cmd from './Cmd';
import Abilities from "./Abilities";
import Feats from "./Feats";
import Languages from "./Languages"
import ArmorClass from "./ArmorClass";
import Weapons from "./Weapons";
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import HealthPoints from "./HealthPoints";
import css from "./css/CharacterSheet.css"; 
import SideDrawer from './SideDrawer';
import AcItems from './AcItems';
import Currency from './Currency';
import Experience from "./Experience";
//import SpellSlots from "./SpellSlots";
//import SpellList from "./SpellList";

const mapStateToProps = state => {
  return {
    auth: state.auth,
    name: state.character.name,
    homeland: state.character.homeland,
    loginModalVisible: state.ui.loginModalVisible,
    registerModalVisible: state.ui.registerModalVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePlayerName: playerName => dispatch(updatePlayerName(playerName))
  };
};

class CharacterSheet extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const sideDrawer = this.props.auth.uid ? null : <SideDrawer />;
    return (
      <div className="CharacterSheet"> 
        <div className="ui stackable grid column twelve wide">
          <LoginModal show={this.props.loginModalVisible} />
          <RegisterModal show={this.props.registerModalVisible} />
          <h2 className="characterTitle">
            {this.props.name}
            {' '}
of
            {this.props.homeland}
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
          </div> 
        </div>
        <div className="ui stackable grid row twelve wide">
          <AcItems />
          <Gears />
          <Currency />
          <Abilities />
          <Feats />
          <Experience />
        </div>
        { sideDrawer }   
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterSheet);
