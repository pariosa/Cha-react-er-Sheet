import React, { Component } from 'react';
import { compose } from 'redux';
import Backdrop from './Backdrop'; 
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import CharacterList from './CharacterList';
const Fragment = React.Fragment;
const mapStateToProps = (state) =>{
    return{ 
        isVisible: state.ui.sideDrawerVisible,
        characters: state.firestore.ordered.characters
    }
} 
class SideDrawer extends Component {
    render(){
        const { characters, auth } = this.props;
        if(!this.props.isVisible){
            return null;
        } 
        return (
            <Fragment>
                <Backdrop type="sideDrawer" />
                <div className="SideDrawer"> 
                    <CharacterList characters={characters} />
                </div>
            </Fragment> 
        );
    }   
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'characters'}
    ])
)(SideDrawer)