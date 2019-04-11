import {
  UPDATE_STAT,
  UPDATE_TEMP_STAT,
  LOAD_ENTIRE_CHARACTER,
  NEW_CHARACTER
} from "../constants/actionTypes";
 
const initialState =  
  {
    stats: {
      strength: 10,
      strMod: 0, 
      dexterity: 10,
      dexMod: 0,
      constitution: 10,
      conMod: 0,
      intelligence: 10,
      intMod: 0,
      wisdom: 10,
      wisMod: 0,
      charisma: 10,
      chaMod: 0
      
    },
    statsTemporary: {
      strength: 10,
      strMod: 0, 
      dexterity: 10,
      dexMod: 0,
      constitution: 10,
      conMod: 0,
      intelligence: 10,
      intMod: 0,
      wisdom: 10,
      wisMod: 0,
      charisma: 10,
      chaMod: 0
    },
  };
const statReducer = (state = initialState, action) => { 
  switch (action.type) {
    case UPDATE_STAT:  
      let stat; let value; let statName;
      const returnObj = new Object;
      stat = action.payload.currentTarget.attributes[0].value.split(" ")[0].substring(0,3);
      value = action.payload.currentTarget.attributes[0].value.split(" ")[0].substring(3,6);
      switch(stat){
        case "str":
          statName = "strength";
          break;
        case   "int":
          statName = "intelligence";
          break;
        case   "dex":
          statName = "dexterity";
          break;
        case  "con":
          statName = "constitution";
          break;
        case   "wis":
          statName = "wisdom";
          break;
        case  "cha":
          statName = "charisma";
          break;
        default:
          break;
      }
      if(value == "Pos"){
        returnObj[statName] = state.stats[statName] + 1;
        returnObj[`${stat}Mod`] =  Math.floor((state.stats[statName] - 9) / 2);
      }
      if(value == "Neg"){
        returnObj[statName] = state.stats[statName] - 1;
        returnObj[`${stat}Mod`] =  Math.floor((state.stats[statName] - 11) / 2);
      }
  
      switch(stat){
        case "str":
          return {
            ...state, 
              stats: {
                ...state.stats,
                  strength: returnObj[statName],
                  strMod: returnObj[`${stat}Mod`]
              },
              statsTemporary:{
                ...state.statsTemporary,
                  strength: returnObj[statName],
                  strMod: returnObj[`${stat}Mod`]
              } 
          };
          break;
        case "int":
         return {
            ...state, 
              stats: {
                ...state.stats,
                  intelligence: returnObj[statName],
                  intMod: returnObj[`${stat}Mod`]
              }, 
              statsTemporary:{
                ...state.statsTemporary,
                  intelligence: returnObj[statName],
                  intMod: returnObj[`${stat}Mod`]
              } 
          };
          break;
        case "dex":
          return {
            ...state, 
              stats: {
                ...state.stats,
                  dexterity: returnObj[statName],
                  dexMod: returnObj[`${stat}Mod`]
              },
              statsTemporary:{
                ...state.statsTemporary,
                  dexterity: returnObj[statName],
                  dexMod: returnObj[`${stat}Mod`]
              } 

          };
          break;
        case  "con":
          return {
            ...state, 
              stats: {
                ...state.stats,
                  constitution: returnObj[statName],
                  conMod: returnObj[`${stat}Mod`]
              },
               statsTemporary:{
                ...state.statsTemporary,
                  constitution: returnObj[statName],
                  conMod: returnObj[`${stat}Mod`]
              } 
          };
          break;
        case   "wis":
          return {
            ...state, 
              stats: {
                ...state.stats,
                  wisdom: returnObj[statName],
                  wisMod: returnObj[`${stat}Mod`]
              },
              statsTemporary:{
                ...state.statsTemporary,
                  wisdom: returnObj[statName],
                  wisMod: returnObj[`${stat}Mod`]
              } 
          };
          break;
        case  "cha":
          return {
            ...state, 
              stats: {
                ...state.stats,
                  charisma: returnObj[statName],
                  chaMod: returnObj[`${stat}Mod`]
              },
              statsTemporary:{
                ...state.statsTemporary,
                  charisma: returnObj[statName],
                  chaMod: returnObj[`${stat}Mod`]
              } 
          };
          break;
        default:
          break;
      }
    case UPDATE_TEMP_STAT:  
      let statTemp; let valueTemp; 
      const returnObjTemp = new Object;
      statTemp = action.payload.currentTarget.attributes[0].value.split(" ")[0].substring(0,3);
      valueTemp = action.payload.currentTarget.attributes[0].value.split(" ")[0].substring(3,6);
      switch(statTemp){
        case "str":
          statName = "strength";
          break;
        case   "int":
          statName = "intelligence";
          break;
        case   "dex":
          statName = "dexterity";
          break;
        case  "con":
          statName = "constitution";
          break;
        case   "wis":
          statName = "wisdom";
          break;
        case  "cha":
          statName = "charisma";
          break;
        default:
          break;
      }
      if(valueTemp == "Pos"){
        returnObjTemp[statName] = state.statsTemporary[statName] + 1;
        returnObjTemp[`${statTemp}Mod`] =  Math.floor((state.statsTemporary[statName] - 9) / 2);
      }
      if(valueTemp == "Neg"){
        returnObjTemp[statName] = state.statsTemporary[statName] - 1;
        returnObjTemp[`${statTemp}Mod`] =  Math.floor((state.statsTemporary[statName] - 11) / 2);
      }  
      switch(statTemp){
        case "str":
          return {
            ...state, 
              statsTemporary: {
                ...state.statsTemporary,
                  strength: returnObjTemp[statName],
                  strMod: returnObjTemp[`${statTemp}Mod`]
              } 
          };
          break;
        case "int":
         return {
            ...state, 
              statsTemporary: {
                ...state.statsTemporary,
                  intelligence: returnObjTemp[statName],
                  intMod: returnObjTemp[`${statTemp}Mod`]
              } 
          };
          break;
        case "dex":
          return {
            ...state, 
              statsTemporary: {
                ...state.statsTemporary,
                  dexterity: returnObjTemp[statName],
                  dexMod: returnObjTemp[`${statTemp}Mod`]
              } 
          };
          break;
        case  "con":
          return {
            ...state, 
              statsTemporary: {
                ...state.statsTemporary,
                  constitution: returnObjTemp[statName],
                  conMod: returnObjTemp[`${statTemp}Mod`]
              } 
          };
          break;
        case   "wis":
          return {
            ...state, 
              statsTemporary: {
                ...state.statsTemporary,
                  wisdom: returnObjTemp[statName],
                  wisMod: returnObjTemp[`${statTemp}Mod`]
              } 
          };
          break;
        case  "cha":
          return {
            ...state, 
              statsTemporary: {
                ...state.statsTemporary,
                  charisma: returnObjTemp[statName],
                  chaMod: returnObjTemp[`${statTemp}Mod`]
              } 
          };
          break;
        default:
          break;
      }
    case  LOAD_ENTIRE_CHARACTER: 
      return {...state, stats:{
                  ...state.stats,
                  strength: action.payload.stats.stats.strength,
                  strMod: action.payload.stats.stats.strMod, 
                  dexterity: action.payload.stats.stats.dexterity,
                  dexMod: action.payload.stats.stats.dexMod,
                  constitution: action.payload.stats.stats.constitution,
                  conMod: action.payload.stats.stats.conMod,
                  intelligence: action.payload.stats.stats.intelligence,
                  intMod: action.payload.stats.stats.intMod,
                  wisdom: action.payload.stats.stats.wisdom,
                  wisMod: action.payload.stats.stats.wisMod,
                  charisma: action.payload.stats.stats.charisma,
                  chaMod: action.payload.stats.stats.chaMod
                }
      , statsTemporary: action.payload.stats.statsTemporary}

    case NEW_CHARACTER:
      return initialState;
    default:
      return state;
     
  }
};

export default statReducer;