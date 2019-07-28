import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { saveCharacter } from '../../js/actions/saveCharacterAction';
import { loadCharacter } from '../../js/actions/loadCharacterAction';
import { getCharactersThunk } from '../../js/actions/getCharacterListActions';

const mapStateToProps = (state, ownProps) => {
  const characters = ownProps.characters ? ownProps.characters : null
  return { 
    isSynched: state.character.isSynched,
    character:state,
    savedCharacters:state.characterList,
  }
};
const mapDispatch = dispatch => {
  dispatch(getCharactersThunk()) 
  return {
   }
 }

const mapDispatchToProps = {
    saveCharacter,
    loadCharacter
};

class SaveCharacterButton extends Component{

  constructor(props){
    super(props)
    this.props = props;
  }
  isCharacterTheSame(savedCharacters, character){ 
   //console.log('the character is the')
   //console.log('here is the current character')
   //console.log(character)
   //console.log(savedCharacters)
   let savedCharacter = [];
   savedCharacter = savedCharacters.filter(e=>{return e.character.name === character.character.name})
   if(savedCharacter.length > 0){
      //there is a saved character with a similar name (something that does not change much? right?)
      //we shoudl return false if the character state differs in many common areas
      let difference = false;
      let keys = ["abilities", "acItems", "armor", "character", "currency",  "experience", "feats", "gear", "health", "languages", "notes", 
      "saves", "skills", "speed", "spells", "spellslots", "weapons", "stat"];
      keys.forEach((key, index) =>{
        if(key !== "character" && key !== "currency" && key !== "stat"){
          if(JSON.stringify(character[key]) !== JSON.stringify(savedCharacter[0][key])){ 
            console.log(`theres a difference in ${key}`)
            difference = true; 
          } 
        }
        if(key === "character"){
          let copyOfChar1 = character[key]
          let copyOfChar2 = savedCharacter[0][key]
            delete copyOfChar1["isSynched"]
            delete copyOfChar2["isSynched"]
            if(JSON.stringify(copyOfChar1) !== JSON.stringify(copyOfChar2)){
              difference = true
            }
        }
        if(key === "currency"){
          if(character[key].PP !== savedCharacter[0][key].PP){
            difference = true
          }
          if(character[key].GP !== savedCharacter[0][key].GP){
            difference = true
          }
          if(character[key].CP !== savedCharacter[0][key].CP){
            difference = true
          }
          if(character[key].SP !== savedCharacter[0][key].SP){
            difference = true
          }
        }
        if(key === "stat"){  
          if(character[key].stats.dexterity !== savedCharacter[0].stats.stats.dexterity){
            difference = true
          }if(character[key].stats.strength !== savedCharacter[0].stats.stats.strength){
            difference = true
          }if(character[key].stats.charisma !== savedCharacter[0].stats.stats.charisma){
            difference = true
           }if(character[key].stats.wisdom !== savedCharacter[0].stats.stats.wisdom){
            difference = true
           }if(character[key].stats.intelligence !== savedCharacter[0].stats.stats.intelligence){
            difference = true            
          }if(character[key].stats.constitution !== savedCharacter[0].stats.stats.constitution){
             difference = true
          }
        }


      }); 
      if(difference === true){ 

        return false;
      }else{
        return true;
      }

   }
   return true;
  }
	render(){  
    const { 
      character,
      isSynched,
      loadCharacter,
      saveCharacter,
      savedCharacters,
    }  = this.props 
      if((this.isCharacterTheSame(savedCharacters, character) === true)){
        console.log(isSynched)
        console.log(this.isCharacterTheSame(savedCharacters, character) === true)

        return(
      <div className="registerButton"> 
        <button type="button" className="ui item green" onClick={saveCharacter}>
          Save Character
        </button>
      </div> 
        )
      }else if(this.isCharacterTheSame(savedCharacters, character) === false){
                console.log('is synched')
                console.log(isSynched)
                //dispatch
                console.log('is the character the same')
                console.log(this.isCharacterTheSame(savedCharacters, character) === true)
        return(
        <div className="registerButton"> 
        <button type="button" className="gloweyGreen"  onClick={saveCharacter}>
          Save Character
        </button>
      </div> 
        )
      } 
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (SaveCharacterButton);