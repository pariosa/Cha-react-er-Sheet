import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'; 
import Backdrop from './Backdrop'; 
import CharacterList from '../Character/CharacterList';
import { getCharactersThunk } from '../../js/actions/getCharacterListActions';

const {Fragment} = React;

const mapStateToProps = (state) =>{ 

        return{ 
            isVisible: state.ui.sideDrawerVisible,
            characters: state.characterList,
            auth:state.firebase.auth
        }
} 

const mapDispatch = dispatch => {
 dispatch(getCharactersThunk()) 
 return {
  }
}

class SideDrawer extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){ 
        const { characters, isVisible, auth } = this.props; 
        if(!isVisible){
            return null;
        }  
        return (
          <Fragment>
            <Backdrop type="sideDrawer" />
            <div className="SideDrawer"> 
            List of characters:
              <CharacterList characters={characters} />
            </div>
          </Fragment> 
        );
    }   
};



export default compose( 
    connect(mapStateToProps,
        mapDispatch))(SideDrawer)